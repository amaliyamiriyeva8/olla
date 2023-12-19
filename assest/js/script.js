const click =document.querySelector("#click");
const list =document.querySelector(".list");
const js=document.querySelector(".js")
click.addEventListener("click",()=>{
    if(list.style.display!="block"){
        list.style.display="block"
    }
    else{
        list.style.display="none"
    }
})

fetch(" http://localhost:3000/olla")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        js.innerHTML+=`
        <div class="js-1">
                    <div class="js-2">
                        <h1>${element.name}</h1>
                        <img src="${element.image}" alt="">
                        <p>${element.description}</p>
                        <button onclick="details(${element.id})">Details</button>
                        <button onclick="update(${element.id})">Update</button>
                        <button onclick="deleteEl(${element.id})">Delete</button>
                    </div>
                </div>
        `
    });
})

function deleteEl(id){
    axios.delete("http://localhost:3000/olla/"+id)
    window.location.reload()
}

function update(id){
    window.location=`update.html?id=${id}`
}

function details(id){
    window.location=`details.html?id=${id}`
}

const addEl=document.querySelector(".addEl")