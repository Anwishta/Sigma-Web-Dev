console.log("Welcome to code");
let boxes = document.querySelectorAll(".box")
let randomColor = ()=>{
    let var1 =  + ceil(Math.random()*255)
    let var2 =  + ceil(Math.random()*255)
    let var3 =  + ceil(Math.random()*255)
    return rgb(`${var1}, ${var2}, ${var3}`)
    
}
boxes.forEach()