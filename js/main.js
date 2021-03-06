const jsBody = document.querySelector('#js');
const addDiv = document.querySelector('#add');

const divRosa = () => {
  divR = document.createElement('div');
  divR.classList.add('rosa');
  return divR
}

const divBlanco = () => {
  divB = document.createElement('div');
  divB.classList.add('blanco');
  return divB
}

/*-----------------------------------------------------------------------------
------------------------------FUNCIONES----------------------------------------
-----------------------------------------------------------------------------*/

//Carga de página
document.addEventListener('DOMContentLoaded', () => {
  console.log("cargado")
});

//Funcion ocultar contenido index
function hide () {
  jsBody.classList.add('hidden');
}

//Funcion mostrar contenido index
function show () {
  window.location.href;
}

//Funcion para Marcas
function marcas () {
  window.location.href('http://127.0.0.1:5500/index.html#marcas');
}

//Funcion para Mascotas
function mascotas () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  

}

//Funcion para Perros
function perros () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Gatos
function gatos () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Roedores
function roedores () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Aves
function aves () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Peces
function peces () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Servicios
function servicios () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  

}

//Funcion para Veterinaria
function veterinaria () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Peluqueria
function peluqueria () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Farmacia
function farmacia () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Analisis
function analisis () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

//Funcion para Cirugias
function cirugias () {
  hide();
  addDiv.classList.remove('hidden');
  while (addDiv.firstChild){
    addDiv.removeChild(addDiv.firstChild);
  };

  let div1 = divBlanco();
  let div2 = divRosa();
  let div3 = divBlanco();
  let div4 = divRosa();
  let div5 = divBlanco();

  div5.setAttribute('style','height:50px')

  let h2Secos = document.createElement('h2');
  h2Secos.textContent = 'Alimentos Secos';
  div1.appendChild(h2Secos);

  let h2Hum = document.createElement('h2');
  h2Hum.textContent = 'Alimentos Húmedos';
  div2.appendChild(h2Hum);
  
  let h2Acc = document.createElement('h2');
  h2Acc.textContent = 'Accesorios';
  div3.appendChild(h2Acc);

  let h2Snacks = document.createElement('h2');
  h2Snacks.textContent = 'Snacks';
  div4.appendChild(h2Snacks);

  addDiv.appendChild(div1);
  addDiv.appendChild(div2);
  addDiv.appendChild(div3);
  addDiv.appendChild(div4);
  addDiv.appendChild(div5);

}

