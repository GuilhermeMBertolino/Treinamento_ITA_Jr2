const axios = require("axios");

async function tryLogin(nome, senha)
{
    try
    {
        let res = await axios.post("http://localhost:4000/auth", {nome, senha});
        localStorage.setItem("token", res.data.token);
        return true;
    }
    catch(err)
    {
        console.log(err);
        return false;
    }
}

module.exports = tryLogin;