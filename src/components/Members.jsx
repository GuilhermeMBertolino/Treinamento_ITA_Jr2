import React from "react";
import "./Members.css";

const Members = (props) =>
{
    let list = props.members.map((member, i) => 
        <tr key={i} className={i % 2 === 0 ? "Par" : "Impar"}>
            <td>{member.nome}</td>
            <td>{member.cargo}</td>
            <td>{member.turma}</td>
        </tr>)
    return (
        <table className="Members">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Função</th>
                    <th>Turma</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    )
}

export default Members;