var menu_top = document.getElementById("menu_top");
var menu_acerca = document.getElementById("menu_acerca");
var menu_skills = document.getElementById("menu_skills");
var menu_formacion = document.getElementById("menu_formacion");
var menu_proyectos = document.getElementById("menu_proyectos");
var menu_contacto = document.getElementById("menu_contacto");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,  
        behavior: 'smooth'
      });
}
function scrollToAcerca() {
    scrollToClass(".acerca");
}
function scrollToSkills() {
    scrollToClass(".skills");
}
function scrollToFormacion() {
    scrollToClass(".formacion");
}
function scrollToProyectos() {
    scrollToClass(".proyectos");
}
function scrollToContact() {
    scrollToClass("#contacto");
}

function scrollToClass(claseDestino) {
    var scrollIntoView = document.querySelectorAll(claseDestino)[0];
    scrollIntoView.scrollIntoView({block: "end", behavior: "smooth"});
}

menu_top.addEventListener("click", scrollToTop);
menu_acerca.addEventListener("click", scrollToAcerca);
menu_skills.addEventListener("click", scrollToSkills);
menu_formacion.addEventListener("click", scrollToFormacion);
menu_proyectos.addEventListener("click", scrollToProyectos);
menu_contacto.addEventListener("click", scrollToContact);