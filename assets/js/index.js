import {Leon, Lobo, Oso, Serpiente, Aguila} from './class.js';

const btnRegistrar = document.querySelector("#btnRegistrar");
const selectAnimal = document.querySelector("#animal");
const selectEdad = document.querySelector ("#edad")
const inputComentario = document.querySelector("#comentarios")
const previewImg = document.querySelector("#preview")





eventlisteners();
function eventlisteners(){
    selectAnimal.addEventListener('change', previewImagenCambio);
    btnRegistrar.addEventListener('click', validacion);
}

// cambia la img del preview cada vez que cambia el select de animal
function previewImagenCambio(){
    if (previewImg.firstElementChild){
        previewImg.firstElementChild.remove()
    }
    pintarImgPreview()
}
const pintarImgPreview = async () =>{
    const imagen = document.createElement('img')
    try {
        const animal = await data();
        imagen.src = `assets/imgs/${animal.imagen}`
        imagen.classList.add('img-fluid', 'h-100')
        previewImg.appendChild(imagen)
    } catch (error) {
        console.log(error);
    }
}


// Ingresar el animal
function validacion(){
    selectAnimal.classList.remove('is-invalid');
    selectEdad.classList.remove('is-invalid');
    inputComentario.classList.remove('is-invalid');
    if (selectAnimal.value === ""){
        selectAnimal.classList.add('is-invalid')
    }
    if (selectEdad.value === ""){
        selectEdad.classList.add('is-invalid')
    }
    if (inputComentario.value === ""){
        inputComentario.classList.add('is-invalid')
    }
    if (selectAnimal.value != "" && selectEdad.value != "" && inputComentario.value != ""){
        registrarAnimal()
    }
}

const registrarAnimal = () => {
    instanciarAnimal();
}

const data = async () => {
    try {
        const response = await fetch("animales.json");
        if (!response.ok){
                throw{
                    code : 404,
                    message: "No se encontro data"
                }
        }
        const data = await response.json();
        return data.animales.find(animal => animal.name === selectAnimal.value);
    } catch (error) {
        console.log(error);
    }
}


const instanciarAnimal = () =>{
    switch(selectAnimal.value){
        case 'Leon':
            instancia(Leon)
            break;
        case 'Lobo':
            instancia(Lobo)
            break;
        case 'Oso':
            instancia(Oso)
            break;
        case 'Serpiente':
            instancia(Serpiente)
            break;
        case 'Aguila':
            instancia(Aguila)
            break;
    }
}

const instancia = async (nombre) =>{
    try {
        const {name, imagen, sonido} = await data();
        const animal = new nombre();
        animal.setNombre = name;
        animal.setEdad = selectEdad.value;
        animal.setImg = imagen;
        animal.setComentario = inputComentario.value;
        animal.setSonido = sonido;
        pintarHTML(animal)
    } catch (error) {
        console.log(object);
    }
}

const pintarHTML = (animal) =>  {
    console.log(animal);
}