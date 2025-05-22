

// interface Usuario {
//     name: string;
//     edad: number;    
// }

// interface UsuarioPremium extends Usuario {
//     plan: string;
// }

// const user1: UsuarioPremium = {
//     plan: 'es premium',
//     edad: 27,
//     name: 'manu',
// }

// type Coordenadas = {
//     longitud: number;
//     latitud: number;
// }

// const venezuela: Coordenadas = {
//     latitud: 278,
//     longitud: 2827,
// }

// interface Producto {
//     id: number;
//     nombre: string;
//     precio: number;
// }


// const leche: Producto = {
//     id: 9898,
//     nombre: 'leche en polvo la cerenisima 800gr',
//     precio: 8500,
// }


// const sal: Producto = {
//     id: 0,
//     nombre: 'error en el producto',
//     precio: 0,
// }


// const validarProducto = (obj: any): obj is Producto => {
  
//    return (
//     typeof obj.id === 'number' &&  obj.id > 0  &&
//     typeof obj.nombre === 'string' && 
//     typeof obj.precio === 'number' && obj.precio >= 0

//     )
   
// }

// console.log(validarProducto(leche));
// console.log(validarProducto(sal));

// function esUsuarioPremium(usuario: any): usuario is UsuarioPremium {
//   return (
//     typeof usuario.nombre === "string" &&
//     typeof usuario.plan === "string" &&
//     usuario.plan === "gold"
//   );
// }

// const esUsuarioPremium = (usuario: any):usuario is UsuarioPremium => {
//     return(
//         typeof usuario.nombre === "string" &&
//         typeof usuario.plan === "string" &&
//         usuario.plan === "gold"
//     );
// }


// const crearProducto = (id: number, nombre: string, precio: number): Producto => {

//     if(id <= 0) throw new Error("El ID debe ser positivo");
//     if(precio < 0) throw new Error("El precio no debe ser negativo");
//     if(nombre.trim().length === 0) throw new Error("El nombre no puede estar vacio");
    
//     return {id, nombre, precio};
// }

// console.log(crearProducto(15, 'azucar', 5000));


// const crearListaProductos = (arr: Producto[]) => {

//     return arr.map(item => crearProducto(item.id, item.nombre, item.precio));

// }

// // Ejemplo de uso
// const listaValida = [
//   { id: 1, nombre: "Leche", precio: 5000 },
//   { id: 2, nombre: "Pan", precio: 3000 },
// ];
// console.log(crearListaProductos(listaValida)); // ✅ Funciona

// const listaInvalida = [
//   { id: 0, nombre: "Error", precio: 0 }, // ❌ ID inválido
// ];
// console.log(crearListaProductos(listaInvalida)); // Lanza error


// const palabras: string[] = ["hola", "typescript", "javascript"];

// const palabrasMayusculas: string[] = palabras.map( palabra => palabra.toUpperCase()  );

// console.log(palabrasMayusculas);



// //------

// interface producto {
//     nombre: string,
//     precio: number,
// }

// const productos: producto[] = [
//   { nombre: "Laptop", precio: 1000 },
//   { nombre: "Mouse", precio: 20 },
// ];

// const productosConInpuestos: producto[] = productos.map( producto => ({
//     nombre: producto.nombre,
//     precio: producto.precio * 1.15,
// }));

// console.log(productosConInpuestos)


// const usuarios = [
//   { id: 1, nombre: "Ana" },
//   { id: 2, nombre: "Luis" },
// ];
// // Resultado esperado: [1, 2]

// const idUsuarios = usuarios.map(usuario => usuario.id);

// console.log(idUsuarios);

// const temperaturasC: number[] = [0, 25, 100]; // Debe devolver [32, 77, 212]

// const temperaturasF: number[] = temperaturasC.map((temperatura: number) => (temperatura * (9/5)) + 32 );

// console.log(temperaturasF);

// const nombres: string[] = ["Ana Pérez", "Luis García"]; // Debe devolver ["A", "L"]

// const iniciales: string[] = nombres.map( (nombre: string): string => nombre[0] );
// console.log(iniciales);


// interface IProducto {
//     nombre: string,
//     precio: number
    
// }

// const productos: IProducto[] = [
//   { nombre: "Camisa", precio: 20 },
//   { nombre: "Pantalón", precio: 30 },
// ];
// // Debe devolver: [{ nombre: "Camisa", precio: 20, enStock: true }, ...]


// interface IProductoConStock extends IProducto {
//   enStock: boolean;
// }

// const productosModificados: IProductoConStock[] = productos.map((producto: IProducto) => ({
//     ...producto,
//     enStock: true,

// }));

// const productosConDescuento: IProductoConStock[] = productosModificados.map((producto: IProductoConStock) => ({
//     ...producto,
//     precio: producto.precio * 0.9,
// }));

// console.log(productosConDescuento);


// const calcularTotal = (precio: number, impuesto: number = 0.1, descuento: number = 0): number => {
    
//     return (precio * impuesto + 100 ) - descuento;


// }

// console.log(calcularTotal(100)); // 110 (100 + 10% impuesto)
// console.log(calcularTotal(100, 0.15, 20)); // 95 (100 + 15% - 20)

// function mapear<T, U>(array: T[], transformar: (item: T) => U): U[] {
//     return array.map(transformar);
// }

// // Ejemplo de uso:
// const numeros = [1, 2, 3];
// const duplicados = mapear(numeros, num => num * 2); // [2, 4, 6


const filtrar = <T>(array: T[], condicion: (item: T) => boolean): T[] => {
    return array.filter(condicion);
}

const primero = <T>(array: T[]): T | undefined => {
    return array[0];
}

const ultimo = <T>(array: T[]): T | undefined =>{
    return array[array.length-1];
}

// console.log(primero([1, 2, 3])); // 1
// console.log(primero(["a", "b"])); // "a"

// console.log(ultimo([1, 2, 3])); // 3
// console.log(ultimo(["a", "b"])); // "b"

const longitud = <T>(array: T[] | string): number | undefined => {
    return array.length;
    
}

// console.log(longitud([1, 2, 3])); // 3
// console.log(longitud("Hola")); // 4

const par = <T extends number>(num: T): boolean | undefined => {
    return (num % 2 === 0);
}


const mezclar = <T>(arr1: T[], arr2: T[]): T[] => {
    return [...arr1, ...arr2];
}

