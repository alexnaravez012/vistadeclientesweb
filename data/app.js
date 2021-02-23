function openDropMenus(type) {
    let bodyHeight = document.getElementById('body-height-customers')
    let higthMax = bodyHeight.scrollHeight
    console.log(higthMax + "px !important")

    if (type == 'login') {
        document.getElementById("menu-login").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-login").classList.toggle("show");
        document.getElementById("menu-filter").classList.remove("show");
    }
    if (type == 'filter') {
        document.getElementById("menu-filter").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-filter").classList.toggle("show");
        document.getElementById("menu-login").classList.remove("show");
        document.getElementById("menu-sesion-started").classList.remove("show");
    }
    if (type == 'sesion-started') {
        document.getElementById("menu-sesion-started").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-sesion-started").classList.toggle("show");
        document.getElementById("menu-filter").classList.remove("show");
    }
    if (type == 'orders') {
        document.getElementById("menu-orders").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-orders").classList.toggle("show");
        document.getElementById("menu-filter").classList.remove("show");
    }
}