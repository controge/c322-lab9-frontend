

async function signup() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let customer = {email:email, username: username, password: password}
    let request = {
        method: "POST",
        headers: {
				"Content-Type": "application/json",
				'Authorization' : `Bearer ${configuration.token()}`
		},
        body: JSON.stringify(customer)
      };
      try {
        let response = await fetch(getHost() + "/signup", request);
		  if(response.status == 401){
			  logout();
		  }
		if(response.status == 200) {  
            alert("The registration was successful!")
            location.href = "login.html";

        } else {
            console.log(`response status:${response.status}`);            
            alert("Something went wrong!");
        }
      }
      catch(error) {
        console.log(error);        
        alert("Something went wrong!");
      }    
}
