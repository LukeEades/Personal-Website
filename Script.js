const search = document.getElementById("text"); 
let isSearching = false; 
let temp;
search.addEventListener("click", function(){
search.innerHTML = "";
isSearching = true; 
});
window.addEventListener("click", function(e){
temp = e.target.id;
if(temp != "text"){
    search.innerHTML = "Search";
    console.log(temp); 
    isSearching = false; 
}
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