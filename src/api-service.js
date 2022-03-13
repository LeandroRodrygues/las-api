const fetch = require("node-fetch");

async function listarProdutos(){
    const response = await fetch("https://stupefied-keller-a2c79e.netlify.app/produtos.json");  
    const data = await response.json();
    return data;  
}

module.exports = listarProdutos;