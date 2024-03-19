import {Leon, Lobo, Oso, Serpiente, Aguila} from './class.js';

const btnRegistrar = document.querySelector("#btnRegistrar");
const inputComentario = document.querySelector("#comentarios")
const previewImg = document.querySelector("#preview")

eventlisteners();
function eventlisteners(){
    btnRegistrar.addEventListener('click', registrarAnimal)
}

function registrarAnimal(){
    const selectAnimal = document.querySelector("#animal").value;
    data(selectAnimal)
}

const data = async (selectValue) => {
    try {
        const response = await fetch("animales.json")
        if (!response.ok){
                throw{
                    code : 404,
                    message: "No se encontro data"
                }
        }
        const data = await response.json();
        const animalData = data.animales.find(animal => animal.name === selectValue);
        instanciarAnimal(animalData)
        // console.log(animal);
    } catch (error) {
        console.log(error);
    }
}

const instanciarAnimal = (animalData) =>{
    switch(animalData.name){
        case 'Leon':
            const animal = new Leon();
            animal.setNombre = animalData.name;
            animal.setEdad = 2;
            animal.setImg = animalData.imagen;
            animal.setComentario = 'xd';
            animal.setSonido = animalData.sonido;
            console.log(animal);
            break;
    }
    
}