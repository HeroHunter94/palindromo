//Función de Juan Pablo: 
function normalizarTexto(texto) {
   // return devuelve un valor desde la función para poder utilizarlo en otras partes del código.
   return texto 
    .toLowerCase()                                           // minúsculas
    .normalize('NFD')                                        // separa letras de los acentos
    .replace(/[\u0300-\u036f]/g, '')                         // elimina los acentos
    .replace(/\b(el|la|los|las|un|una|unos|unas)\b/g, '')    // quita artículos
    .replace(/\s+/g, '')                                     // elimina espacios extra
}