import React, { useState } from "react";

const initialState =
{
    user: null,
    autentication: true,
    members: null,
    tasks: null
}

export const AppContext = React.createContext(initialState);

const InfoContext = (props) =>
{
    const [state, setState] = useState(initialState);
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
            tasks: state.tasks,
            setMembers: m => updateState("members", m),
            setTasks: t => updateState("tasks", t),
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