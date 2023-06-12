
(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/HO0yg6l.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/HO0yg6l.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

const componentWrapper = document.querySelectorAll(".component-wrapper");
const marcas = document.querySelector(".marcas-section");

//REVISAR ESTA FUNCION PORUQE SI AGREGAN MAS SECCIONES ESTO ROMPE
//ACTUALIZACION: Problema arreglado
setTimeout(function() {
    let largoWrapper = componentWrapper.length;
    componentWrapper[largoWrapper-2].parentNode.insertBefore(marcas, componentWrapper[largoWrapper-2].nextSibling);
  }, 500);

//******************************************** FUNCIONES DE URI ************************************
// Funcion para saber el largo que tiene que tener los titulos naranjas
// const borderWidth = () =>{
//   const marcas_borde = document.getElementById('marcas-borde');
//   const widthM_Borde = marcas_borde.getBoundingClientRect().width + "px";
//   const marcas_borde_h2 = document.getElementById('marcas-section-H2');
//   marcas_borde_h2.style.setProperty('--ancho', widthM_Borde);
// } 
// window.addEventListener('resize', borderWidth);
// borderWidth();

//funcion para amoldar los titulos al ancho de la pagina

// const ajustarAncho = () =>{
//   let anchoDePagina = window.innerWidth;
//   let sectionCategoriH2 = document.querySelector('.section-category__title');
//   let H2RowContainer = document.querySelectorAll('.row.container.carousel-with-tabs-mobile > h2');
//   const anchoParaH2_categorias = (anchoDePagina - 280) / 2; 
//   const anchoParaH2 = (anchoDePagina - 210) / 2;
//   H2RowContainer.forEach(h2 => {
//     h2.style.setProperty('--ancho', anchoParaH2 + 'px');
//   });
//   sectionCategoriH2.style.setProperty('--ancho', anchoParaH2_categorias + 'px');
// }
// window.addEventListener('resize', ajustarAncho);
// ajustarAncho();

//Funcion para desplegar el menu en mobile
let btn_menu = document.getElementById('hamburguer-menu');
let menu_desplegable = document.getElementById('menuDesplegable');

btn_menu.addEventListener('click', () => {
    'use strict';
     menu_desplegable.classList.toggle('desplegarMenu');
    // window.scroll({
    //   top: 0, left: 0, behavior: 'smooth' 
    // });
});

//Funcion para desplegar los submenus
//referencias de las flechas
const flecha_electronica = document.getElementById('flecha_1');
const flecha_seguridad = document.getElementById('flecha_2');
const flecha_conectividad = document.getElementById('flecha_3');
const flecha_audio = document.getElementById('flecha_4');
const flecha_celulares = document.getElementById('flecha_5');
const flecha_computacion = document.getElementById('flecha_6');
const flecha_herramientas = document.getElementById('flecha_7');
const flecha_musicales = document.getElementById('flecha_8');
const flecha_bebes = document.getElementById('flecha_9');
const flecha_masCategorias = document.getElementById('flecha_10');
const flecha_componentes = document.getElementById('submenu_flecha_componentes');
const flecha_perifericos = document.getElementById('submenu_flecha_perifericos');

//referencia de los menus
const primer_menu = document.getElementById('primer-menu-item');
const segundo_menu = document.getElementById('segundo-menu-item');
const tercer_menu = document.getElementById('tercer-menu-item');
const cuarto_menu = document.getElementById('cuarto-menu-item');
const quinto_menu = document.getElementById('quinto-menu-item');
const sexto_menu = document.getElementById('sexto-menu-item');
const septimo_menu = document.getElementById('septimo-menu-item');
const octavo_menu = document.getElementById('octavo-menu-item');
const noveno_menu = document.getElementById('noveno-menu-item');
const decimo_menu = document.getElementById('decimo-menu-item');

//referencia de los submenus
const submenu_electronica = document.getElementById('submenu-electronica');
const submenu_seguridad = document.getElementById('submenu-seguridad');
const submenu_conectividad = document.getElementById('submenu-conectividad');
const submenu_audio = document.getElementById('submenu-audio');
const submenu_celulares = document.getElementById('submenu-celulares');
const submenu_computacion = document.getElementById('submenu-computacion');
const submenu_herramientas = document.getElementById('submenu-herramientas');
const submenu_musicales = document.getElementById('submenu-musicales');
const submenu_bebes = document.getElementById('submenu-bebes');
const submenu_masCategorias = document.getElementById('submenu-masCategorias');
const miniSubmenu_componenetes = document.getElementById('mini-submenu-componentes');
const miniSubmenu_perifericos = document.getElementById('mini-submenu-perifericos');

//funcionalidad para desplegar los submenus
// flecha_componentes.addEventListener('click', ()=>{
//   flecha_componentes.classList.toggle('girar');
//   miniSubmenu_componenetes.classList.toggle('desplegarSubmenu');
// });

// flecha_perifericos.addEventListener('click', ()=>{
//   flecha_perifericos.classList.toggle('girar');
//   miniSubmenu_perifericos.classList.toggle('desplegarSubmenu');
// });

// flecha_electronica.addEventListener('click', ()=>{
//   flecha_electronica.classList.toggle('girar');
//   primer_menu.classList.toggle('menuDesplegado');
//   submenu_electronica.classList.toggle('desplegarSubmenu');
// });

// flecha_seguridad.addEventListener('click', ()=>{
//   flecha_seguridad.classList.toggle('girar');
//   segundo_menu.classList.toggle('menuDesplegado');
//   submenu_seguridad.classList.toggle('desplegarSubmenu');
// });

// flecha_conectividad.addEventListener('click', ()=>{
//   flecha_conectividad.classList.toggle('girar');
//   tercer_menu.classList.toggle('menuDesplegado');
//   submenu_conectividad.classList.toggle('desplegarSubmenu');
// });

// flecha_audio.addEventListener('click', ()=>{
//   flecha_audio.classList.toggle('girar');
//   cuarto_menu.classList.toggle('menuDesplegado');
//   submenu_audio.classList.toggle('desplegarSubmenu');
// });

// flecha_celulares.addEventListener('click', ()=>{
//   flecha_celulares.classList.toggle('girar');
//   quinto_menu.classList.toggle('menuDesplegado');
//   submenu_celulares.classList.toggle('desplegarSubmenu');
// });

// flecha_computacion.addEventListener('click', ()=>{
//   flecha_computacion.classList.toggle('girar');
//   sexto_menu.classList.toggle('menuDesplegado');
//   submenu_computacion.classList.toggle('desplegarSubmenu');
// });

// flecha_herramientas.addEventListener('click', ()=>{
//   flecha_herramientas.classList.toggle('girar');
//   septimo_menu.classList.toggle('menuDesplegado');
//   submenu_herramientas.classList.toggle('desplegarSubmenu');
// });

// flecha_musicales.addEventListener('click', ()=>{
//   flecha_musicales.classList.toggle('girar');
//   octavo_menu.classList.toggle('menuDesplegado');
//   submenu_musicales.classList.toggle('desplegarSubmenu');
// });

// flecha_bebes.addEventListener('click', ()=>{
//   flecha_bebes.classList.toggle('girar');
//   noveno_menu.classList.toggle('menuDesplegado');
//   submenu_bebes.classList.toggle('desplegarSubmenu');
// });

// flecha_masCategorias.addEventListener('click', ()=>{
//   flecha_masCategorias.classList.toggle('girar');
//   decimo_menu.classList.toggle('menuDesplegado');
//   submenu_masCategorias.classList.toggle('desplegarSubmenu');
// });

let flechas = document.getElementsByClassName('menu-arrow')

flechas[0].addEventListener('click', () => {
  flechas[0].classList.toggle('girar')
  submenu_bebes.classList.toggle('desplegarSubmenu')
})

flechas[1].addEventListener('click', () => {
  flechas[1].classList.toggle('girar')
  submenu_electronica.classList.toggle('desplegarSubmenu')
})

flechas[2].addEventListener('click', () => {
  flechas[2].classList.toggle('girar')
  submenu_seguridad.classList.toggle('desplegarSubmenu')
})

flechas[3].addEventListener('click', () => {
  flechas[3].classList.toggle('girar')
  submenu_computacion.classList.toggle('desplegarSubmenu')
})




//***************************************************************************************************

const marcasDiv = document.querySelector('.marcas-div');
let isDown = false;
let startX;
let scrollLeft;

marcasDiv.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - marcasDiv.offsetLeft;
    scrollLeft = marcasDiv.scrollLeft;
    marcasDiv.style.scrollBehavior = 'auto';
});

marcasDiv.addEventListener('mouseleave', () => {
    isDown = false;
});

marcasDiv.addEventListener('mouseup', () => {
    isDown = false;
    marcasDiv.style.scrollBehavior = 'smooth';
});

marcasDiv.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marcasDiv.offsetLeft;
    const walk = (x - startX) * 2;
    marcasDiv.scrollLeft = scrollLeft - walk;
});

let footer = document.getElementsByClassName('nav-tools-footer')[0]

setTimeout(function() {

  componentWrapper[2].parentNode.insertBefore(footer, componentWrapper[2])
}, 500);
