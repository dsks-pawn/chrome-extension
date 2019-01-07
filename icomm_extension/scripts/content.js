console.log(window.location)
let urlGet = window.location.hash
let camHash = urlGet.replace("#/view/", "");

window.onload = function () {
    addButton()
};
const addButton = () => {
    //create button
    let para = document.createElement("a");

    //add button in DOM
    let element = document.getElementsByClassName("stick-to-top")
    element[0].appendChild(para);

    //get element after add DOM
    let button = element[0].querySelector('a')
    //add class
    button.classList.add("button_click");

    //add attr
    button.setAttribute("href", `http://10.9.2.160:7000/Camera/CameraConfig?cameraHash=${camHash}`);

    //create icon
    let iconElement = document.createElement("i")
    button.appendChild(iconElement);
    let icon = button.querySelector('i')
    icon.classList.add("glyphicon");
    icon.classList.add("glyphicon-share");
}