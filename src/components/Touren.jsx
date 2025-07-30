import React, { useState } from 'react';

function Touren() {
    const [touren, setTouren] = useState([
        //muster tour
        { id: 1, name: 'Bergpfad', schwierigkeitsgrad: 'mittel', maxTeilnehmer: 10 },
    ]);

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
            maxTeilnehmer: Number(newTour.maxTeilnehmer)
        };


        setTouren(prevTouren => [...prevTouren, neueTour]);

        setNewTour({
            name: '',
            schwierigkeitsgrad: 'leicht',
            maxTeilnehmer: ''
        });
    }

    return (
        <div>
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

            <ul>
                {touren.map(tour => (
                    <li key={tour.id}>
                        <strong>{tour.name}</strong> – {tour.schwierigkeitsgrad} – max. {tour.maxTeilnehmer} Teilnehmer
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Touren;
