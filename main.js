var objPeople = [
  {
    username:"sam",
    password:"codify"
  },
  {
    username:"matt",
    password:"academy"
  },
  {
    username:"chris",
    password:"forever"
  }
];

function getInfo() { 
  var username =document.getElementById("username").value;
  var password =document.getElementById("password").value;
  for(var i = 0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password == objPeople[i].password) {
      console.log(username + " is logged in!!!");
      window.open("index.html");
      return;
      }
  }
  alert("You username or password is not correct.");
}

function register() {
  //check if user name already existed
  var username = document.getElementById("username").value;
  for(var i = 0; i < objPeople.length; i++){
    if(username == objPeople[i].username){
      alert("The username has been used.");
          return;
    }
  }

  //check if password match
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if(password != confirmpassword){
    alert("The passwords don't match.");
    return;
  }

  //Put new account into data
  var newaccount = {
    username: username,
    password: password
  };
  objPeople.push(newaccount);
  window.open("index.html");
  return;
}















// function load () {
// 		document.getElementById('register').style="display:none;";
// 		document.getElementById('check').value="Register";
// 	}
// 	function register () {
// 		document.getElementById('register').style="height:100%;";
// 		document.getElementById('login').style="display:none";
// 		document.getElementById('check').value="Login";
// 		//document.getElementById('header').style="display:none";
// 	}
// 	function login () {
// 		document.getElementById('register').style="display:none;";
// 		document.getElementById('login').style="display:block;";
// 		document.getElementById('check').value="Register";
// 		//document.getElementById('header').style="display:none";
// 	}
// 	function check () {
//
// 		var che= document.getElementById('check').value;
// 		if(che=="Login")
// 		{
// 		document.getElementById('register').style="display:none;";
// 		document.getElementById('login').style="display:block;";
// 		document.getElementById('check').value="Register";
// 		}
// 		else
// 		{
// 			document.getElementById('register').style="height:100%;";
// 			document.getElementById('login').style="display:none";
// 			document.getElementById('check').value="Login";
// 		}
//
// 	}
// 	function validation()
// 	{
//
// 		var check=document.getElementById('email').type;
// 		if(check=="email")
// 		{
// 			var value=document.getElementById('email').value;
// 			if(value=="")
// 			{
// 				document.getElementById('error').innerHTML="Incorrect Email Address";
// 			}
// 		}
// 	}
