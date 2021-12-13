import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../context/context';
import Headers from './header';

function Settings() {
    const settingsContext = useContext(SettingsContext)
    const [show, setShow] = useState(true);
    const [itemNumber, setItemNumber] = useState(1);

    function handleItemNumber(e) {
        setItemNumber(Number(e.target.value));
    }
    function handleView(e) {
        if (e.target.checked) {
            setShow(e.target.checked);
        } else {
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        settingsContext.setperPage(Number(itemNumber));
        settingsContext.setshowCompleted(show);
    }

    useEffect(() => {
        let payload = {
            itemPerPage: settingsContext.itemPerPage,
            showCompleted: settingsContext.showCompleted,
        }
        if (settingsContext.itemPerPage) {
            localStorage.setItem('settingsContext', JSON.stringify(payload));
        }
    }, [settingsContext])

    return (
        <div>
            <Headers/>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>Number of items shown per page</label>
                <input name='items' type='number' placeholder={1} value={itemNumber} min={1} onChange={handleItemNumber}></input>
                <label>View completed items</label>
                <input name='view' type='checkbox' onChange={handleView}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Settings;

