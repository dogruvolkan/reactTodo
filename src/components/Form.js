import { useEffect, useState } from 'react'

const Form = ({ onSave, selectedTitle, onCancel }) => {

    const [title, setTitle] = useState(selectedTitle || "");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(title)
        setTitle("");
    }


    useEffect(() => {
        setTitle(selectedTitle || "");
    }, [selectedTitle]);

    return (
        <div className='row'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Yeni todo ekle" value={title} onChange={handleChange} />
                <button type="submit">Ekle</button>
                <button type="button" onClick={onCancel}>Iptal</button>
            </form>
        </div>
    )
}

export default Form;