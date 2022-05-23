import React, { useState } from "react";
import users from "./users.js";

const initialState =
{
    user: null,
    autentication: true,
    members: users
}

export const AppContext = React.createContext(initialState);

const InfoContext = (props) =>
{
    const [state, setState] = useState(initialState)
    function updateState(key, value)
    {
        setState({
            ...state,
            [key]: value
        });
    }
    return (
        <AppContext.Provider value={{
            user: state.user,
            autentication: state.autentication,
            members: state.members,
            setUser: u => updateState("user", u),
            setAutentication: a => updateState("autentication", a)
        }}>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
    );
}

export default InfoContext;