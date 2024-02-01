const c=console.log;
const err=console.error;
const d=document;
const $contenedorBotones=d.querySelector("#contenedor_botones");
const $ON_button=$contenedorBotones.querySelector("#ON_button");
const $OFF_button=$contenedorBotones.querySelector("#OFF_button");
const $contenedor_respuesta=d.querySelector("#contenedor_respuesta");
const url="wss://192.168.100.16:3000";

const ws=new WebSocket(url);

ws.addEventListener("open",(e)=>{
    ws.send(JSON.stringify({"mensaje":"hola servidor","id":1}));
    
});

ws.addEventListener("error",(e)=>{
    err("error al iniciar la conexion");
});

ws.addEventListener("close",(e)=>{
    alert("se ha cerrado la conexion");
});


