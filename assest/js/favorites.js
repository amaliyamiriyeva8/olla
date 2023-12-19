let id=new URLSearchParams(window.location.search).get("id");
const js=document.querySelector(".js")

fetch(" http://localhost:3000/favorites")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        js.innerHTML+=`
        <div class="js-1">
                    <div class="js-2">
                        <h1>${element.name}</h1>
                        <img src="${element.image}" alt="">
                        <p>${element.description}</p>
                        <button onclick="deleteFavEl(${element.id})">Delete</button>
                    </div>
                </div>
        `
    });
})

function deleteFavEl(id){
    axios.delete(`http://localhost:3000/favorites/${id}`)
}
const back=document.querySelector(".back")
back.addEventListener("click",()=>{
    window.location="./index.html?id"
})
