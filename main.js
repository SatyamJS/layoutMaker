const toggler = document.querySelector("#toggler")
const insertedTmageDiv = document.querySelector(".insertedImageDiv")
const sideBarClosed = document.querySelector(".sideBarClosed")
const sideBarContent = document.querySelector(".sideBarContent")
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
    img.src = `${name}.png`
    outerDiv.appendChild(span)
    outerDiv.appendChild(img)
    return outerDiv


}
