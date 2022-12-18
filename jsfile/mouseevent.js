
document.addEventListener("copy", (event) => {
    event.preventDefault()
    alert("copying is prohibited")
})

document.addEventListener("mousedown", (event) => {
    console.log("mousedown")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mouseup", (event) => {
    console.log("mouseup")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mouseenter", (event) => {
    console.log("mouseenter")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mouseleave", (event) => {
    console.log("mouseleave")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mousemove", (event) => {
    console.log("mousemove")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mouseover", (event) => {
    console.log("mouseover")
    //     console.log(event)
    //     console.log(event.clientX);
    //     console.log(event.clientY);
})

document.addEventListener("mouseout", (event) => {
    console.log("mouseout")
    // console.log(event)
    // console.log(event.clientX);
    // console.log(event.clientY);
})

document.addEventListener("mouseup", (event) => {
    switch (event.which) {
        case 1:
            alert("left key is pressed")
            break;
        case 2:
            alert("middle key is pressed")
            break;
        case 3:
            alert("right key is pressed")
            break;
        default:
            alert("unknown key is pressed ")
            break;
    }
})

