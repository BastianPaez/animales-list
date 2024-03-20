import { btnRegistrar, selectAnimal, contenedorAnimales } from './selectores.js';
import { previewImagenCambio, validacion, mostrarModal, iniciarSonido } from './funciones.js';
export function eventlisteners() {
    selectAnimal.addEventListener('change', previewImagenCambio);
    btnRegistrar.addEventListener('click', validacion);
    contenedorAnimales.addEventListener('click', mostrarModal);
    contenedorAnimales.addEventListener('click', iniciarSonido);
}