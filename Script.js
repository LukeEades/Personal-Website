const search = document.getElementById("text"); 
let isSearching = false; 
search.addEventListener("click", function(){
search.innerHTML = "";
isSearching = true; 
});
window.addEventListener("keydown",function(e){
    if(isSearching){
        if(e.key === "Backspace"){
            search.innerHTML = search.innerHTML.slice(0,-1);
        }else{
            search.innerHTML += e.key ;
        }
        
    }

});