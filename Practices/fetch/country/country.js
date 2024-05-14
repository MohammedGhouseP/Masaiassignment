let container = document.querySelector("#container");
let sel = document.getElementById("select") 
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    
    country(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${sel.value}`)
})

function country(url){
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        // console.log(res.data);
        renderfunc(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
};


function renderfunc(url){
    console.log(url);
    url.map(function(ele,i) {
        // container.innerHTML="";

        let box = document.createElement("div");

        let h3 = document.createElement("h4");
        h3.innerHTML = `Name: ${ele.country}`;

        // let h2 = document.createElement("h4");
        // h2.innerHTML = ele.rank;
    
        let h5 = document.createElement("h5");
        h5.innerHTML = `population: ${ele.population}`;

        box.append(h3,h5);
        container.append(box);
    });
     
}






