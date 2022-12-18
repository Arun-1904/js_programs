var image1 = document.getElementById("image1")
var btn = document.getElementById("btn")

function change(){
    
    image1.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorRs0minZah_sRrDcxFOBCBe2uiPQY4z8cw&usqp=CAU")
}

btn.addEventListener("click",change)



function KeyPress(event){
console.log(event.key)

}