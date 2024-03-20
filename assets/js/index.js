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
const pintarImgPreview = async ()=>{
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
function registrarAnimal(){
    const animalData = data()
    animalData.then((animal) => { 
        console.log(animal);
    }).catch((err) => {
        console.log(err);
    });
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

const instanciarAnimal = (animalData) =>{
    switch(animalData.name){
        case 'Leon':
            instancia(animalData, Leon)
            break;
        case 'Lobo':
            instancia(animalData, Lobo)
            break;
        case 'Oso':
            instancia(animalData, Oso)
            break;
        case 'Serpiente':
            instancia(animalData, Serpiente)
            break;
        case 'Aguila':
            instancia(animalData, Aguila)
            break;
    }
}

const instancia = (animalData, nombre)=>{
    const {name, imagen, sonido} = animalData
    const animal = new nombre();
    animal.setNombre = name;
    animal.setEdad = selectEdad.value;
    animal.setImg = imagen;
    animal.setComentario = inputComentario.value;
    animal.setSonido = sonido;
    pintarHTML(animal)
}

const pintarHTML = (animal) =>  {
    
    
}