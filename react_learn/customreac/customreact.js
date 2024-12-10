
const component =  {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click this to visit google" 
}


function Render(component,container) {
    const domele = document.createElement(component.type);

    domele.innerHTML = component.children;
    for(let prop in component.props) {
        domele.setAttribute(prop,component.props[prop]);
    }

    container.appendChild(domele)
}


const maincontainer = document.getElementById("root");
Render(component,maincontainer);

