import React,{ useState,useContext,useEffect } from "react";

export const SettingsContext = React.createContext();

export default function SettingProvider(props){

    const[showCompleted, setshowCompleted] = useState(false);
    const [perPage, setperPage] = useState(3);

    const state={
        showCompleted,
        setshowCompleted,
        perPage,
        setperPage
    }
    
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('settings'));
    if (local) {
      setperPage(Number(local.itemPerPage));
      setShowCompleted(local.showCompleted);
    }
    localStorage.clear()
  }, [])

    return(
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}