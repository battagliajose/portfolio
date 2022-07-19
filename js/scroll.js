var menu_top = document.getElementById("menu_contacto");
var menu_acerca = document.getElementById("menu_contacto");
var menu_skills = document.getElementById("menu_contacto");
var menu_formacion = document.getElementById("menu_contacto");
var menu_proyectos = document.getElementById("menu_contacto");
var menu_contacto = document.getElementById("menu_contacto");

function scrollToContact() {
    scrollTo(".contacto");
}

function scrollTo(claseDestino) {
    var scrollIntoView = document.querySelectorAll(claseDestino)[0];
    scrollIntoView.scrollIntoView({block: "end", behavior: "smooth"});
}

menu_contacto.addEventListener("click", scrollToContact);