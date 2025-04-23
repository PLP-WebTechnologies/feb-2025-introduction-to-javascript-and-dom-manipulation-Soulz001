const container = document.querySelector("#container")
const text = document.querySelector("#text")
const btn = document.querySelector("#btn")
const box = document.querySelector(".box")

let message = " I am a PLP student"
container.textContent += message

text.style.fontWeight = "bold"
text.style.fontSize = "1.2rem"
text.style.color = "red"

btn.addEventListener("click", () => {
    const paragraph = document.createElement("p")
    paragraph.textContent = "I love Javascript"
    document.body.appendChild(paragraph)
})

box.textContent = "JS means JavaScript"
box.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"
box.style.color = "green"
box.style.padding = "0.5rem"
box.style.borderRadius = "0.5rem"
box.style.width = "50%"
box.style.marginTop = "1rem"
box.style.textTransform = "uppercase"
box.style.fontWeight = "700"
