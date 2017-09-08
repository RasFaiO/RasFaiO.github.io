const objeto = document.getElementById('objeto')
const btn = document.getElementById('btn')
const objeto_2 = document.getElementById('objeto_2')
const boton = document.getElementById('abajo')

btn.addEventListener('click', mover)

boton.addEventListener('click', mover_2)

function mover(){
	objeto.classList.toggle('esconder_2')
}
function mover_2(){
	objeto_2.classList.toggle('escondido')
}