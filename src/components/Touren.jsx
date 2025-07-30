import React, { useState } from 'react'
import defaultImage from '../../public/wandernmuster.png';

function Touren({ touren, setTouren }) {

    const [newTour, setNewTour] = useState({
        name: '',
        schwierigkeitsgrad: 'leicht',
        maxTeilnehmer: ''
    });

    function handleTourNameChange(e) {
        setNewTour(prev => ({ ...prev, name: e.target.value }));
    }

    function handleSchwierigkeitsgradChange(e) {
        setNewTour(prev => ({ ...prev, schwierigkeitsgrad: e.target.value }));
    }

    function handleMaxTeilnehmerChange(e) {
        setNewTour(prev => ({ ...prev, maxTeilnehmer: e.target.value }));
    }

    function handleDeleteTour(id) {
        setTouren(prev => prev.filter(tour => tour.id !== id));
    }

    function handleAddTour(e) {
        e.preventDefault();

        if (
            newTour.name.trim() === '' ||
            newTour.maxTeilnehmer === '' ||
            Number(newTour.maxTeilnehmer) <= 0
        ) {
            alert('Bitte gültige Daten eingeben!');
            return;
        }

        const neueTour = {
            id: Date.now(),
            name: newTour.name,
            schwierigkeitsgrad: newTour.schwierigkeitsgrad,
            maxTeilnehmer: Number(newTour.maxTeilnehmer),
            image: defaultImage,
        };

        setTouren(prev => [...prev, neueTour]);

        setNewTour({
            name: '',
            schwierigkeitsgrad: 'leicht',
            maxTeilnehmer: ''
        });
    }

    return (
        <div className="card">
            <h2>Wandertouren</h2>

            <form onSubmit={handleAddTour} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Tourname"
                    value={newTour.name}
                    onChange={handleTourNameChange}
                />

                <select
                    value={newTour.schwierigkeitsgrad}
                    onChange={handleSchwierigkeitsgradChange}
                >
                    <option value="leicht">leicht</option>
                    <option value="mittel">mittel</option>
                    <option value="schwer">schwer</option>
                </select>

                <input
                    type="number"
                    placeholder="Max. Teilnehmer"
                    value={newTour.maxTeilnehmer}
                    onChange={handleMaxTeilnehmerChange}
                />

                <button type="submit">Tour hinzufügen</button>
            </form>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {touren.map(tour => (
                    <div key={tour.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        width: '250px',
                        padding: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }}>
                        <img
                            src={tour.image}
                            alt={tour.name}
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                        <h3>{tour.name}</h3>
                        <p>Zustand: <strong>{tour.schwierigkeitsgrad}</strong></p>
                        <p>Max. Teilnehmer: {tour.maxTeilnehmer}</p>
                        <button onClick={() => handleDeleteTour(tour.id)} style={{ marginTop: '10px' }}>
                            Tour löschen
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Touren;
