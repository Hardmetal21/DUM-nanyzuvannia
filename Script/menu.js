let MouseMove = document.querySelector('.nav-part')
MouseMove.onclick = function (event) {
    console.log(event);
    if (event.target.classList.contains('sub') == false) return;
    closeAllSubMenu(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.toggle('sub-menu');

}
function closeAllSubMenu(current = null) {
    let parents = [];
    if(current){
        let currentParent = current.parentNode;
        while (currentParent){
            if(currentParent.classList.contains('nav-part'))break;
            if(currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }
const subMenu = document.querySelectorAll('.nav-part ul');
Array.from(subMenu).forEach(item => {
    if(item != current && !parents.includes(item)) item.classList.remove('sub-menu')
});
}