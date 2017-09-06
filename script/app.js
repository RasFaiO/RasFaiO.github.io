const objeto = document.getElementById('objeto')
const btn = document.getElementById('btn')

btn.addEventListener('click', mover)

function mover(){
	objeto.classList.toggle('esconder_2')
}