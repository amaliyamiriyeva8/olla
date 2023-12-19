const name = document.querySelector("#name")
const description = document.querySelector("#description")
const image = document.querySelector("#image")
const form = document.querySelector("form")
const imageMdl=document.querySelector(".modalImage")
const input=document.querySelector('input[type="file"]')


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let object={}
    let src=image.files[0]
    const reader=new FileReader()
    reader.onload=(e)=>{
        object={
            image:e.target.result,
            name:name.value,
            description:description.value
        }
        axios.post(`http://localhost:3000/olla`,object)
    }
    reader.readAsDataURL(src)
    window.location="index.html"

})

input.addEventListener("input",(e)=>{
    let file=e.target.files[0];
      if(file){
          let reader=new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(){
            imageMdl.style.height="70px";
            imageMdl.style.width="70px";
          imageMdl.src = reader.result;
          }
      }
  })