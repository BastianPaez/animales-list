import {animales, animalesInstanciados} from './datosPromise.js';
import { Leon, Lobo, Oso, Serpiente, Aguila } from './class.js';
import {selectAnimal, selectEdad, inputComentario, previewImg, contenedorAnimales } from './selectores.js';

export function previewImagenCambio() {
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

// formulario / instancia 
export function validacion() {
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
        limpiarCampos()
    }
}

const limpiarCampos = () =>{
    selectAnimal.selectedIndex = 0;
    selectEdad.selectedIndex = 0;
    inputComentario.value = "";
    removeHTML(previewImg);
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
        divCarta.classList.add("card", "w-25", "border-0", "mr-2", `${animal.getNombre}`);
        
        const imgCarta = document.createElement('img');
        imgCarta.setAttribute("type", "button");
        imgCarta.setAttribute("data-toggle","modal");
        imgCarta.setAttribute("data-target", "#modal");
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

// mostrar modal
export function mostrarModal(e){
    e.preventDefault()
    if (e.target.classList.contains('img-carta')){
        console.log(e.target.classList);
        const body = document.querySelector('body')
        removeModal(document.querySelector(".modal".parentElement))
        const idElemento = e.target.parentElement.getAttribute("data-id");
        const animalInfo = animalesInstanciados[idElemento];
        const divModal = document.createElement('div');
        divModal.innerHTML = `
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content bg-dark text-light text-center">
                        <div class="modal-header d-block">
                            <img src="assets/imgs/${animalInfo.getImg}" alt="${animalInfo.getNombre}" class="w-25">
                            <h4 class="modal-title" id="ModalLabel">${animalInfo.getEdad}</h4>
                            <h5 class="modal-title">Comentarios</h5>
                        </div>
                        <div class="modal-body">
                            <p>${animalInfo.getComentario}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>`
      body.appendChild(divModal)
    }
}

const removeModal = () => {
    while (document.querySelector('.modal')) {
        document.querySelector('.modal').parentElement.remove()
    }
}

// sonido
export function iniciarSonido(e) {

    if (e.target.classList.contains('btn')) {
        const contenedor = e.target.parentElement.parentElement;
        console.log(contenedor.classList);
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