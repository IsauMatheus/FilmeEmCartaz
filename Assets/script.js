//Funcao de sidebar//
function togglemenu(){
    const menumobile = document.getElementById('aside-bar')
    if(menumobile.classList.contains("active-nav")){
        menumobile.classList.remove("active-nav")
    } else{
        menumobile.classList.add("active-nav")
    }
}
//Funcao Filmes//
const api  = fetch("3e853c8dfc47fc62197970839de29f55")
.then(act => console.log(act))