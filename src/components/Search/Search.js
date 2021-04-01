import React, {useState} from 'react';

function Search(props) {
    const [valueSearch, setValueSearch] = useState('');

    const valueChangeHandler = (event) => {
        setValueSearch(event.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={() => props.onSearch(valueSearch)} >Search</button>
            </div>
            <input type="text" value={valueSearch} onChange={valueChangeHandler} placeholder="Enter name" className="form-control" />
        </div>
    )
}

export default Search;