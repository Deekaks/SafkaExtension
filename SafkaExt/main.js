var container=document.createElement("div");
container.className ="panel-body no-bottom-padding no-top-padding";
var content=document.createElement("div"); 
container.appendChild(content)
content.className ="alert alert-sm"
document.querySelector("#loggedin-frontpage > div:nth-child(2)").appendChild(container); 
content.innerText ="Tänään ruokana: Nakkisoppamuusisekoitus \n\n Huomenna ruokana: 123 2347835 ";