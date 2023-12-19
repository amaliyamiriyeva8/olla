let id=new URLSearchParams(window.location.search).get("id")
const name=document.querySelector("#name")
const description=document.querySelector("#description")
const imageMdl=document.querySelector(".modalImage")
const input=document.querySelector('input[type="file"]')
const form=document.querySelector("form")

fetch(`http://localhost:3000/olla/${id}`)
.then(res=>res.json())
.then(data=>{
    imageMdl.style.width="70px";
    imageMdl.style.height="70px";
    imageMdl.src = data.image
    name.value = data.name
    description.value = data.description
})
 

input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
        imageMdl.src = reader.result;
        }
    }
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    axios.patch(`http://localhost:3000/olla/${id}`,{
       image: imageMdl.src,
       name: name.value,
       description: description.value
    })
    .then(res=>{
        window.location="index.html"
    })
})

