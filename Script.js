
var recipes = [];
var postRow = document.getElementById("postRow");
var links = document.querySelectorAll(".nav-link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        getRecipes(e.target.text);

    })

}


getRecipes("pizza");

function getRecipes(link) { 
var httpRequest = new XMLHttpRequest();
httpRequest.open("get", `https://forkify-api.herokuapp.com/api/search?q=${link}`);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function () {
    if (httpRequest.readyState == 4) {
        recipes = JSON.parse(httpRequest.response).recipes;
       
    }
    displayData();
});
    

}

function displayData() {

    var cols ='';
    for (var i=0;i<recipes.length;i++) {

        cols += `<div class="col-md-3">
                   
                            <img class="w-100 h-50 " src="${recipes[i].image_url}"/>
                             <h2>${recipes[i].title} </h2>
                   
           </div> `;
    
       
       
    }/* end of for loop */

    postRow.innerHTML = cols;
}