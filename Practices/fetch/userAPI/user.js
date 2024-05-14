let container = document.querySelector("#container");
let fetchbtn = document.querySelector("#fetchbtn");
fetchbtn.innerHTML = "Fetch User"
container.append(fetchbtn);

fetchbtn.addEventListener("click",()=>{    
    fetchUser("https://reqres.in/api/users")
})

function renderfn(data){
    console.log(data);

    data.forEach((ele,i)=> {        
        let box = document.createElement("div");
        
        let h3 = document.createElement("h3");
        h3.innerHTML = ele.first_name;

        let h2 = document.createElement("h3");
        h2.innerHTML = ele.last_name;
        
        let email = document.createElement("h3");
        email.innerHTML = ele.email;
        
        let img = document.createElement("img");
        img.src = ele.avatar;
        
        box.append(h3,h2,img,email)
        container.append(box);
    });
    
}

function  fetchUser(URL){
        fetch(URL)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            renderfn(data.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    };