function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber = event.target.number.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    
    axios.post("https://crudcrud.com/api/39df5d2a67e440ddb7f35485780f073e/appointmentData",obj)
    .then((response)=>{
        showNewUserOnScreen(response)
        console.log(response )
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    const data=axios.get("https://crudcrud.com/api/39df5d2a67e440ddb7f35485780f073e/appointmentData")
    .then((response)=>{
        console.log(response)
        
        for(var i=0;i<response.length;i++){
            showNewUserOnScreen(response.data)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(data)
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('number').value ='';
   

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}-${user.phonenumber}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
}

//Edit User

function editUserDetails(email, name, phonenumber){

    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('number').value =phonenumber;

    deleteUser(email)
 }

// deleteUser('abc@gmail.com')

function deleteUser(Id){
    
                removeUserFromScreen(Id);
            }
            function removeUserFromScreen(Id){
                const parentNode = document.getElementById('listOfUsers');
                const childNodeToBeDeleted = document.getElementById(Id);

                
                if(childNodeToBeDeleted) {
                    axios.delete(`https://crudcrud.com/api/39df5d2a67e440ddb7f35485780f073e/appointmentData/${Id}`)
                    .then(removeFromScreen(Id))
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            }
            function removeFromScreen(id){
                
                let parent = document.getElementById("listOfUsers");
                let toBeRemove = document.getElementById(id);
                
                parent.removeChild(toBeRemove);
            }

