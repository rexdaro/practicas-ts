

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


