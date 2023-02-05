const container = document.createElement("div");
document.body.appendChild(container);
const message =document.createElement("h1");
const input =document.createElement("input");
const btn = document.createElement("btn")

container.appendChild(message);
container.appendChild(input);
container.appendChild(btn);

btn.textContent ="click me";
input.value ="write here";
message.textContent ="Displayed here";
btn.addEventListener("click" ,(e)=>{
    let value = input.value;
    message.textContent=value;
    input.value="";
})
