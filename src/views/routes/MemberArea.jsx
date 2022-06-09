import React, {useContext, useState} from "react";
import "./MemberArea.css";
import Members from "../../components/Members";
import { AppContext } from "../../data/InfoContext";
import Tasks from "../../components/Tasks";
const axios = require("axios");

const MemberArea = props =>
{
    const axiosConfig = 
    {
        headers:
        {
            Authorization: "Bearer "+ localStorage.getItem("token")
        }
    }
    let [description, setDescription] = useState("");
    let [responsible, setResponsible] = useState("");
    const {members, setMembers, tasks, setTasks} = useContext(AppContext);

    axios.get("http://localhost:4000/usuarios", axiosConfig).then((res) => 
    {
        setMembers(res.data);
    })

    const quandoMudarDescricao = (event) =>
    {
        setDescription(event.target.value);
    }
    const quandoMudarResponsavel = (event) =>
    {
        setResponsible(event.target.value);
    }

    return (
        <div className="MemberArea">
            <h2>Área do membro</h2>
            <Members members={members}></Members>
            <div className="createTask">
                <button className="button" onClick={() => {
                    axios.post("http://localhost:4000/tarefa", {
                        nome: " ",
                        descricao: description,
                        responsavel: responsible
                    }).then(() => {
                        description = "";
                        responsible = "";
                        axios.get("http://localhost:4000/tarefas", axiosConfig).then(res => {
                            setTasks(res.data);
                        });
                    }).catch((err) => {
                        console.log(err);
                    })
                }}><h3>Adicionar nova tarefa</h3></button>
                <label for="text">Adicionar descricao</label>
                <input type="text" className="descricao" value={description} onChange={quandoMudarDescricao}/>
                <label for="text">Adicionar responsáveis</label>
                <input type="text" className="responsavel" value={responsible} onChange={quandoMudarResponsavel}/>
            </div>
            <Tasks tasks={tasks}></Tasks>
        </div>
    )
}

export default MemberArea;