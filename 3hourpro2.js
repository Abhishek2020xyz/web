let onSubmit = document.getElementById("form");
onSubmit.addEventListener("submit",addToLocal);

// add to local storage

function addToLocal(e){
    // e.preventDefault();
    let amount = document.getElementById("num").value;
    let description = document.getElementById("des").value;
    let catagory = document.getElementById("cat").value;
    const obj = {
        amount : amount,
        description : description,
        catagory : catagory,
    }
    if(obj.amount){
        localStorage.setItem(obj.amount,JSON.stringify(obj))
    }
    axios.post("https://crudcrud.com/api/231a8de5bf8b45d0a95b36e56ca14a23/appointementData",obj)
    .then((response)=>{
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4> something went wrong </h4>" //error handle k liye do not complesery 
        console.log(err)
    })
//   localStorage.setItem(obj.amount,JSON.stringify(obj))
}

// window event
window.addEventListener("DOMContentLoaded",function(e){
    const data=axios.get("https://crudcrud.com/api/231a8de5bf8b45d0a95b36e56ca14a23/appointementData")
    .then((response)=>{
        //console.log(response)
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log(data)
    })
e.preventDefault();
Object.keys(localStorage).forEach((key)=>{
    // console.log(key)
    let stringData = this.localStorage.getItem(key);
    // console.log(stringData)
    let data = JSON.parse(stringData);
    showOnScreen(data);
})
})

//  show On screen

function showOnScreen(obj){
let list = document.getElementById("ui");
let addData =`<li id=${obj.amount}>${obj.amount}-${obj.description}-${obj.catagory}<button onClick=deleteUser(${obj.amount})>Delete</button>
<button onClick=editDetails(${obj.amount},\"${obj.description}\",\"${obj.catagory}\")>Edit</button></li>`
list.innerHTML += addData;
}

function deleteUser(amount){
    localStorage.removeItem(amount)
    removeFromScreen(amount)
}

function removeFromScreen(amount){
    let parent = document.getElementById("ui");
    let toBeRemove = document.getElementById(amount);
    parent.removeChild(toBeRemove);
}


function editDetails(amount,des,cat){
    // console.log(amo,des,cat)
    document.getElementById("num").value = amount;
    document.getElementById("des").value=des;
    document.getElementById("cat").value = cat;
    deleteUser(amount)
}

console.log("hello");