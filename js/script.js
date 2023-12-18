const click =document.querySelector("#click");
const list =document.querySelector(".list");

click.addEventListener("click",()=>{
    if(list.style.display!="block"){
        list.style.display="block"
    }
    else{
        list.style.display="none"
    }
})