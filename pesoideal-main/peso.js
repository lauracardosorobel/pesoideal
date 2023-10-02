alert("testando")
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const sexo = form.inNota1.value
    const altura = Number(form.inNota2.value)

let peso
 if(masculino){
    peso=22 *Math.pow(altura, 2)
 } else{
    peso=21 *Math.pow(altura,2)
 }

 resp.innerText = '${none} seu peso ideal é: ${(peso.toFixed(3)}kg'
})

fora.addEventListener("reset", (e)=> {
    resp.innetText = " "
})
