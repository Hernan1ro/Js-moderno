const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();

console.log(dia);

if(dia ===  0){
    console.log('domingo');
}else if (dia===1){
    console.log('lunes');
}else if (dia===2){
    console.log('martes');
}else{
    console.log('No es ni lunes ni martes ni domingo')
}

//sin usar If Else, o Switch, unicamente objetos
// imprimir en consola el dia de la semana 
 
dia = 3; 

const dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

console.log(dias[dia] || 'dia no valido');