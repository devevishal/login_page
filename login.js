function check(){
	var unm=document.getElementById('uid').value;
	var pwd=document.getElementById('pd').value;
	if(unm=="admin" && pwd=="admin")
	{
		window.open("registration.html");
	}
	else
	{
		alert("Wrong username or password!!");
	}

}
