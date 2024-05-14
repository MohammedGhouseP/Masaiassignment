let container = document.querySelector("#container")

function country(URL){
    fetch(URL)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res.data);
        renderfunc(res.data);
    });
};


function renderfunc(res){
    console.log(res);
    res.map(function(ele,i) {

        let box = document.createElement("div");

        let h3 = document.createElement("h4");
        h3.innerHTML = ele.country;

        let h2 = document.createElement("h4");
        h2.innerHTML = ele.rank;
    
        let h5 = document.createElement("h5");
        email.innerHTML = ele.population;

        box.append(h3,h2,h5);
        container.append(box);
    });
     
}



country(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)



