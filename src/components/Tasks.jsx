import React from "react";
import "./Tasks.css";

const Tasks = (props) =>
{
    let list = props.tasks.map((task, i) => 
        <div key={i} className="task">
            <p>{task.descricao}</p>
            <h4>Responsáveis: {task.responsavel.reduce((a, b) => a + " " + b)}</h4>
        </div>)
    return (
        <div className="taskContainer">
            {list}
        </div>
    )
}

export default Tasks;