const toggler = document.querySelector("#toggler")
const insertedTmageDiv = document.querySelector(".insertedImageDiv")
const sideBarClosed = document.querySelector(".sideBarClosed")
const sideBarContent = document.querySelector(".sideBarContent")
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
let insertBtn = document.querySelectorAll(".insert")
insertBtn = Array.from(insertBtn)
insertBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {

        sideBarContent.appendChild(ComponentCreator(elem.innerHTML))
        let deleter = document.querySelectorAll(".deleter")
        deleter = Array.from(deleter)
        deleter.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.target.parentElement.style.display = "none"
            })

        })

    })
})



toggler.addEventListener("click", () => {
    sideBarClosed.classList.toggle("sideBarOpen")
    toggler.classList.toggle("close")

})
function ComponentCreator(name) {
    let outerDiv = document.createElement("div")
    outerDiv.className = "insertedImageDiv"
    let span = document.createElement("span")
    span.className = "deleter"
    span.innerHTML = "X"
    let img = document.createElement("img")
    img.className = "insertedImage"
    img.src = `./images/${name}.png`
    let sizer= document.createElement("div")
    sizer.className="sizerBtn"
    let increaser= document.createElement("span")
    increaser.className="increase"
    increaser.innerHTML="+"
    let decreaser= document.createElement("span")
    decreaser.className="decrease"
    decreaser.innerHTML="-"

    sizer.appendChild(increaser)
    sizer.appendChild(decreaser)
    outerDiv.appendChild(span)
    outerDiv.appendChild(img)
    outerDiv.appendChild(sizer)

    return outerDiv


}
let actualSize=120
increase.addEventListener("click",(e)=>{
    actualSize+=10
    if (actualSize>=250){
        actualSize=120
    }
    insertedTmageDiv.style.width=`${actualSize}px`

})
decrease.addEventListener("click",()=>{
    actualSize-=10
    if (actualSize<=80){
        actualSize+=10
    }
    insertedTmageDiv.style.width=`${actualSize}px`

})