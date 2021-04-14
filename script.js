
function callApi(){
 fetch("https://dog.ceo/api/breeds/image/random")
 .then(response => response.json())
 .then(data => createpage(data))
 .catch(data => console.log("Deu Ruim!",data))
};

function createpage(data){
    let status = data.status;
    let urlimg = data.message;
   console.log('img', urlimg)
    document.getElementById("status").innerHTML = status;
    document.getElementById("img").innerHTML = "<img height='100' src='"+urlimg+"'>";
};













window.onload = function(){
    callApi()
    }