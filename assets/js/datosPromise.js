export const animales = [];
export const animalesInstanciados = [];

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