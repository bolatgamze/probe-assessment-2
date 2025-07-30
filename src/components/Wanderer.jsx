import React, { useState } from 'react';

function Wanderer({wandererList, setWandererList, gruppen, setGruppen, touren}) {
    const [searchName, setSearchName] = useState('');

    const [newWanderer, setNewWanderer] = useState({
        name: '',
        surname: '',
        phone: '',
        address: ''
    });

    const [selectedGroupId, setSelectedGroupId] = useState({});

    function handleSearch(e) {
        setSearchName(e.target.value);
    }

    const filteredWanderer = wandererList.filter((w) =>
        w.name.toLowerCase().includes(searchName.toLowerCase())
    );

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewWanderer(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleAddWanderer(e) {
        e.preventDefault();
        if (newWanderer.name.trim() === '') {
            alert('Name ist erforderlich!');
            return;
        }

        const neuerWanderer = {
            id: Date.now(),
            ...newWanderer
        };

        setWandererList(prev => [...prev, neuerWanderer]);

        setNewWanderer({
            name: '',
            surname: '',
            phone: '',
            address: ''
        });
    }

    function handleDeleteWanderer(id) {
        setWandererList(prev => prev.filter(w => w.id !== id));
        setGruppen(prev =>
            prev.map(g => ({
                ...g,
                members: g.members.filter(mId => mId !== id)
            }))
        );
    }
    function handleAddToGroup(wandererId, groupId) {
        if (!groupId) return;
        setGruppen(prev =>
            prev.map(g =>
                g.id === Number(groupId) && !g.members.includes(wandererId)
                    ? { ...g, members: [...g.members, wandererId] }
                    : g
            )
        );
        setSelectedGroupId(prev => ({ ...prev, [wandererId]: '' }));
    }

    return (
        <div className="card" style={{ display: 'flex', gap: '40px' }}>
            <form onSubmit={handleAddWanderer} style={{
                width: '300px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px'
            }}>
                <h3>Neuer Wanderer</h3>

                <label>Vorname*</label><br />
                <input
                    type="text"
                    name="name"
                    value={newWanderer.name}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <label>Nachname</label><br />
                <input
                    type="text"
                    name="surname"
                    value={newWanderer.surname}
                    onChange={handleInputChange}
                /><br /><br />

                <label>Telefon</label><br />
                <input
                    type="text"
                    name="phone"
                    value={newWanderer.phone}
                    onChange={handleInputChange}
                /><br /><br />

                <label>Adresse</label><br />
                <input
                    type="text"
                    name="address"
                    value={newWanderer.address}
                    onChange={handleInputChange}
                /><br /><br />

                <button type="submit">Hinzufügen</button>
            </form>

            <div style={{ flex: '1' }}>
                <h2>Wanderer anzeigen</h2>

                <input
                    type="text"
                    placeholder="Wanderer suchen..."
                    value={searchName}
                    onChange={handleSearch}
                    style={{ padding: '5px', marginBottom: '20px', width: '100%' }}
                />

                <ul>
                    {filteredWanderer.length > 0 ? (
                        filteredWanderer.map((w) => (
                            <li key={w.id} style={{ marginBottom: '10px' }}>
                                <strong>{w.name}</strong> {w.surname && ` ${w.surname}`}<br />
                                {w.phone && <>📞 {w.phone}<br /></>}
                                {w.address && <>🏠 {w.address}<br /></>}

                                {(() => {
                                    const group = gruppen.find(g => g.members.includes(w.id));
                                    const tour = group ? touren.find(t => t.id === group.tourId) : null;
                                    return group ? (
                                        <>
                                            📌 Gruppe: {group.name}<br />
                                            {tour && <>🏔️ Tour: {tour.name} ({tour.schwierigkeitsgrad})<br /></>}
                                        </>
                                    ) : null;
                                })()}

                                <button
                                    onClick={() => handleDeleteWanderer(w.id)}
                                    style={{ marginTop: '5px', fontSize: '13px' }}
                                >
                                    Löschen
                                </button>

                                <div style={{ marginTop: '5px' }}>
                                    <select style={{height:'30px'}}
                                        value={selectedGroupId[w.id] || ''}
                                        onChange={(e) =>
                                            setSelectedGroupId(prev => ({ ...prev, [w.id]: e.target.value }))
                                        }
                                    >
                                        <option value="">Gruppe wählen</option>
                                        {gruppen.map(g => (
                                            <option key={g.id} value={g.id}>{g.name}</option>
                                        ))}
                                    </select>
                                    <button style={{fontSize:'14px'}} onClick={() => handleAddToGroup(w.id, selectedGroupId[w.id])}>
                                        Zur Gruppe
                                    </button>
                                </div>
                            </li>

                        ))
                    ) : (
                        <li>Kein Wanderer gefunden.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Wanderer;
