import React, {useState} from 'react';

function Gruppen({wandererList, gruppen, setGruppen, touren}) {

    const [newGroupName, setNewGroupName] = useState("");

    function handleAddGroup(e) {
        e.preventDefault();
        if (newGroupName.trim() === "") return;

        const newGroup = {
            id: Date.now(),
            name: newGroupName,
            members: [],
            tourId: null
        };

        setGruppen(prev => [...prev, newGroup]);
        setNewGroupName("");

    }
    function handleAssignTour(gruppId, tourId) {
        setGruppen(prev =>
            prev.map(g =>
                g.id === gruppId ? { ...g, tourId: Number(tourId) } : g
            )
        );
    }


    return (
        <div className="card">
            <h2>Gruppen anzeigen</h2>

            <form onSubmit={handleAddGroup} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Neue Gruppe"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                />
                <button type="submit">Gruppe hinzufügen</button>
            </form>

            {gruppen.map(gruppe => (
                <div key={gruppe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h3>{gruppe.name}</h3>
                    <label>Tour zuweisen: </label>
                    <select
                        value={gruppe.tourId}
                        onChange={(e) => handleAssignTour(gruppe.id, e.target.value)}
                        style={{ marginLeft: '10px' }}>
                        <option value="">Keine</option>
                        {touren.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.name} ({t.schwierigkeitsgrad})
                            </option>
                        ))}
                    </select>
                    <p>Zugewiesene Tour: {gruppe.tourId ? gruppe.tourId : 'Keine'}</p>
                    <p>Mitglieder:</p>
                    {gruppe.members.length > 0 ? (
                        <ul>
                            {gruppe.members.map(mId => {
                                const member = wandererList.find(w => w.id === mId);
                                return (
                                    <li key={mId}>
                                        {member ? member.name : `Unbekannt (#${mId})`}
                                    </li>);
                            })}
                        </ul>
                    ) : (
                        <p>Keine Mitglieder</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Gruppen;