import React from 'react'

const Listitem = ({ todo, onCompleted, onDelete, onSelect }) => {

    const handleOnClick = () => {
        onCompleted(todo.id)
    }

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(todo.id);
    }

    return (
        <div className='row'>
            <div className='col-6'>
                <span onClick={handleOnClick} style={{ cursor: "pointer", textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.title}</span>
            </div>
            <div className='col-3'>
                <a className='guncelle' href="#" onClick={(e) => {
                    e.preventDefault();
                    onSelect(todo);
                }}>Guncelle</a>
            </div>
            <div className='col-2'>
                <a className='sil' href="#" onClick={handleDelete}>Sil</a>
            </div>
        </div>
    )
}

export default Listitem