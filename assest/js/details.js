let id=new URLSearchParams(window.location.search).get("id");
const js=document.querySelector(".js")
fetch(" http://localhost:3000/olla/"+id)
.then(res=>res.json())
.then(element=> {
        js.innerHTML+=`
        <div class="js-1">
                    <div class="js-2">
                        <h1>${element.name}</h1>
                        <img src="${element.image}" alt="">
                        <p>${element.description}</p>
                        <button onclick="details(${element.id})">Details</button>
                    </div>
                </div>
        `
    });

