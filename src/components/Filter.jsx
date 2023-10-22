import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
            </select>
        </div>
    )
}

export default Filter;