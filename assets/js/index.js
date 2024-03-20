import { Leon, Lobo, Oso, Serpiente, Aguila } from './class.js';

const btnRegistrar = document.querySelector("#btnRegistrar");
const selectAnimal = document.querySelector("#animal");
const selectEdad = document.querySelector("#edad");
const inputComentario = document.querySelector("#comentarios");
const previewImg = document.querySelector("#preview");
const contenedorAnimales = document.querySelector("#Animales");

const animales = [];
const animalesInstanciados = [];

(async () => {
    try {
        const response = await fetch("animales.json");
        if (!response.ok) {
            throw {
                code: 404,
                message: "No se encontro data"
            }
        }
        const data = await response.json();
        data.animales.forEach(animal => {
            animales.push(animal)
        });
    } catch (error) {
        console.log(error);
    }
})();



eventlisteners();
function eventlisteners() {
    selectAnimal.addEventListener('change', previewImagenCambio);
    btnRegistrar.addEventListener('click', validacion);
    contenedorAnimales.addEventListener('click', mostrarModal);
    contenedorAnimales.addEventListener('click', iniciarSonido);
}

// cambia la img del preview cada vez que cambia el select de animal
function previewImagenCambio() {
    removeHTML(previewImg)
    animalImgPreview()
}
const animalImgPreview = () => {
    switch (selectAnimal.value) {
        case 'Leon':
            pintarPreviewHTML(animales[0].imagen)
            break;
        case 'Lobo':
            pintarPreviewHTML(animales[1].imagen)
            break;
        case 'Oso':
            pintarPreviewHTML(animales[2].imagen)
            break;
        case 'Serpiente':
            pintarPreviewHTML(animales[3].imagen)
            break;
        case 'Aguila':
            pintarPreviewHTML(animales[4].imagen)
            break;
    }
}
const pintarPreviewHTML = (animal) => {
    const imagen = document.createElement('img');
    imagen.src = `assets/imgs/${animal}`
    imagen.classList.add('img-fluid', 'h-100')
    previewImg.appendChild(imagen)
}



// Ingresar el animal
function validacion() {
    selectAnimal.classList.remove('is-invalid');
    selectEdad.classList.remove('is-invalid');
    inputComentario.classList.remove('is-invalid');
    if (selectAnimal.value === "") {
        selectAnimal.classList.add('is-invalid')
    }
    if (selectEdad.value === "") {
        selectEdad.classList.add('is-invalid')
    }
    if (inputComentario.value === "") {
        inputComentario.classList.add('is-invalid')
    }
    if (selectAnimal.value != "" && selectEdad.value != "" && inputComentario.value != "") {
        instanciarAnimal()
        pintarHTML()
    }
}

const instanciarAnimal = () => {
    switch (selectAnimal.value) {
        case 'Leon':
            instancia(selectAnimal.value, Leon)
            break;
        case 'Lobo':
            instancia(selectAnimal.value, Lobo)
            break;
        case 'Oso':
            instancia(selectAnimal.value, Oso)
            break;
        case 'Serpiente':
            instancia(selectAnimal.value, Serpiente)
            break;
        case 'Aguila':
            instancia(selectAnimal.value, Aguila)
            break;
    }
}

const instancia = (nombre, Objeto) => {
    const animalSelecionado = animales.find(animal => animal.name === nombre)
    const { name, imagen, sonido } = animalSelecionado;
    const animal = new Objeto();
    animal.setNombre = name;
    animal.setEdad = selectEdad.value;
    animal.setImg = imagen;
    animal.setComentario = inputComentario.value;
    animal.setSonido = sonido;
    animalesInstanciados.push(animal)
}

const pintarHTML = () => {
    removeHTML(contenedorAnimales)
    animalesInstanciados.forEach((animal, index) => {
        const divCarta = document.createElement('div');
        divCarta.setAttribute('data-id', index);
        divCarta.classList.add("card", "w-25", "border-0", "mr-2", `${selectAnimal.value}`);

        const imgCarta = document.createElement('img');
        imgCarta.classList.add("card-img-top", "img-carta");
        imgCarta.src = `assets/imgs/${animal.getImg}`;
        divCarta.appendChild(imgCarta);

        const divContenidoCarta = document.createElement('div');
        divContenidoCarta.classList.add("card-body", "p-0")

        const btnSonido = document.createElement('button');
        btnSonido.classList.add("btn", "btn-secondary", "boton", "w-100", "border-0")
        divContenidoCarta.appendChild(btnSonido);

        contenedorAnimales.appendChild(divCarta)
        divCarta.appendChild(divContenidoCarta)
    });

}
const removeHTML = (selector) => {
    while (selector.firstElementChild) {
        selector.firstElementChild.remove()
    }
}

//mostrarModal
function mostrarModal(e){
    if (e.target.classList.contains('img-carta')){
        const idElemento = e.target.parentElement.getAttribute("data-id")
        const animalInfo = animalesInstanciados[idElemento]
        console.log(animalInfo);
    }
}




// aplicar sonido
function iniciarSonido(e) {
    if (e.target.classList.contains('btn')) {
        const contenedor = e.target.parentElement.parentElement;
        const audio = document.querySelector("#player")
        if (contenedor.classList.contains('Leon')) {
            Leon.Rugir(audio)
        }
        if (contenedor.classList.contains('Lobo')) {
            Lobo.Aullar(audio)
        }
        if (contenedor.classList.contains('Oso')) {
            Oso.Gruñir(audio)
        }
        if (contenedor.classList.contains('Serpiente')) {
            Serpiente.Sisear(audio)
        }
        if (contenedor.classList.contains('Aguila')) {
            Aguila.Chillar(audio)
        }
    }
}