import React from 'react'
import Listitem from './Listitem'

const List = ({ todos, onCompleted, onDelete, onSelect }) => {
    return (
        <div >
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            <Listitem onSelect={onSelect} onCompleted={onCompleted} onDelete={onDelete} todo={todo} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List