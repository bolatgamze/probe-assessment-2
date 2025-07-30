import React, {useState} from 'react';

function Wanderer() {
    const [searchName, setSearchName] = useState('');
    const [wandererList, setWandererList] = useState([
        //muster wanderer
        {id: 1, name: 'Gandalf'},
        {id: 2, name: 'Loki'},
    ]);

    function handleSearch(e) {
        setSearchName(e.target.value);
    }
    const filteredWanderer = wandererList.filter((w) =>
        w.name.toLowerCase().includes(searchName.toLowerCase())
    );
    const [newName, setNewName] = useState('');

    function handleAddWanderer(e) {
        e.preventDefault();
        if (newName.trim() === '') return;

        const neuerWanderer = {
            id: Date.now(),
            name: newName
        };

        setWandererList([...wandererList, neuerWanderer]);
        setNewName('');
    }

    function handleDeleteWanderer(id) {
        setWandererList(wandererList.filter(w => w.id !== id));
    }



    return (
        <div>
            <h2>Wanderer anzeigen</h2>

            {/* Arama ve Ekleme alanı yan yana */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Wanderer suchen..."
                    value={searchName}
                    onChange={handleSearch}
                    style={{ padding: '5px', flex: '1' }}
                />

                <form onSubmit={handleAddWanderer} style={{ display: 'flex', gap: '5px' }}>
                    <input
                        type="text"
                        placeholder="Neuer Wanderer"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        style={{ padding: '5px' }}
                    />
                    <button type="submit">Hinzufügen</button>
                </form>
            </div>

            <ul>
                {searchName.trim() !== '' ? (
                    filteredWanderer.length > 0 ? (
                        filteredWanderer.map((w) => (
                            <li key={w.id}>{w.name}
                                <button onClick={() => handleDeleteWanderer(w.id)} style={{ marginLeft: '10px' }}>
                                    ❌Löschen
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>Kein Wanderer gefunden.</li>
                    )
                ) : (
                    wandererList.map((w) => (
                        <li key={w.id}>{w.name}
                            <button onClick={() => handleDeleteWanderer(w.id)} style={{ marginLeft: '10px' }}>
                                ❌Löschen
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );

}

export default Wanderer;