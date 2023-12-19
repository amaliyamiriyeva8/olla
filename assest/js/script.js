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

const nav=document.querySelector("nav")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 450) {
            nav.style.position = "fixed"
            nav.style.backgroundColor="white"
            nav.style.top="0"
            nav.style.left="0"
            nav.style.zIndex = "1001"
        }
        else {
            nav.style.position = ""
        }
    })

const windows=document.querySelector(".window")
window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        windows.style.display="flex";
       
    }
    else {
        windows.style.display = ""
    }
})
windows.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})

let page=3;
function LoadMore(){
fetch(" http://localhost:3000/olla")
.then(res=>res.json())
.then(data=>{
    axios.get('http://localhost:3000/favorites')
    .then(fav => {
        data.slice(page-3,page).forEach(element =>  {
            if(fav.data.find(f => f.id === element.id)){
                js.innerHTML+=`
                <div class="js-1">
                <i class="bi bi-heart-fill" style="color:red" onClick='DeleteFav(${element.id})'></i>
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
            }
            else{
                js.innerHTML+=`
                <div class="js-1">
                <i class="bi bi-heart" onClick='AddFav(${element.id})'></i>
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
            }
           
        });
    })
   
})}

LoadMore();
let load=document.querySelector(".load");
load.addEventListener("click",()=>{
    page+=3;
    LoadMore()
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
addEl.addEventListener("click",()=>{
    window.location="./add.html?id"
})

function AddFav(id){
    fetch("http://localhost:3000/olla/"+id)
    .then(res=>res.json())
    .then(data=>{
        axios.post("http://localhost:3000/favorites/",data)
    })
}
function DeleteFav(id){
    axios.delete("http://localhost:3000/favorites/"+id)
}

const fav=document.querySelector("#fav")
fav.addEventListener("click",()=>{
    window.location="./favorites.html?id"
})