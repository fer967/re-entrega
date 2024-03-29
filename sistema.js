
class Sistema {
    constructor() {              
        this.servicios = [
            { nombre: "corte", precio: 100 },
            { nombre: "lavado", precio: 120 },
            { nombre: "nutricion", precio: 140 },
            { nombre: "manicuria", precio: 130 },
            { nombre: "pedicuria", precio: 110 },
            { nombre: "depilacion", precio: 150 },
        ];
    }
    mostrar_servicio() {
        const nombres = this.servicios.map((el) => el.nombre)
        const lista = JSON.stringify(nombres)
        alert("Servicios disponibles :" + lista);
    };
    calcular_total(){
        const precios = this.servicios.map((el) => el.precio)
        const total = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
        alert("El total por todos los servicios es :" + total);
    }
}



