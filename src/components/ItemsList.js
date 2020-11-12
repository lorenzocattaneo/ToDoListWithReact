import { useState } from 'react';

function ItemsList(props) {

    const [searchFilter, setSearchFilter] = useState('');
    const [completedFilter, setCompletedFilter] = useState('all')// completed, not_completed, all

    return (
        <>
            <div className="list-container">
                <div className="filter-input">
                    <div className="list-controls-container">
                        <input type="text" placeholder="search" onChange={(e) => setSearchFilter(e.target.value)} />
                        <button onClick={props.reset}>Reset</button>

                        <div className="buttons">
                            <button onClick={() => setCompletedFilter('completed')}>Completed</button>
                            <button onClick={() => setCompletedFilter('not_completed')}>Not completed</button>
                            <button onClick={() => setCompletedFilter('all')}>All</button>
                        </div>
                    </div>
                </div>
                <ul className="items-list">
                    {props.list
                        .filter((item) => {
                            if (completedFilter === 'all') return true
                            if (completedFilter === 'completed') return item.completed
                            if (completedFilter === 'not_completed') return !item.completed
                        })
                        .filter((item) => {
                            return item.testo.includes(searchFilter || '')
                        })
                        .map((item, index) => {
                            return <li
                                onClick={() => props.updateItem(index, item.completed === false)}
                                className={item.completed === true && "terminato"}
                                key={index}>
                                {item.testo}
                            </li>
                        })}
                </ul>
            </div>
        </>
    )
}

export default ItemsList;