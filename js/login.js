$(document).ready(function(){
	$(document).on("submit", "#login", function(e) {
    		e.preventDefault();
		Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
		var username = $("#username").val(); 
		var password = $("#password").val();
		Parse.User.logIn(username,password, {  
			success: function(user) {
			// Do stuff after successful login.
				alert('登入成功');
				window.location.href = "index.html"; 
			},
			error: function(user, error) {
			// The login failed. Check error to see why.
				alert('帳號或密碼錯誤!');
				window.location.href = "index.html";
			}
		});
	});
});
	
$(document).ready(function(){
	$(document).on("submit", "#signUp", function(e) {
    		e.preventDefault();
		Parse.initialize("c4azxhlcBAObQPSxQ6jY4lf8dbFEPBD6y7zgIHD0", "2uGIxUaShVOXpBWyn4UwRoPK1Tali8MrKf4mp0Xp");
		var username = $("#new_username").val(); 
		var password = $("#new_password").val();
		var re = /^[A-Za-z0-9]+$/;
		var id_ok = re.exec(username);
		var pwd_ok = re.exec(password);
		if(id_ok && pwd_ok){
			var user = new Parse.User();
			user.set("username", username);
			user.set("password", password);
			user.signUp(null, {  
				success: function(user) {
				// Do stuff after successful login.
					alert('恭喜你，註冊成功!');
					window.location.href = "index.html"; 
				},
				error: function(user, error) {
					// The login failed. Check error to see why.
					alert('此帳號已被使用過了喔!');
					window.location.href = "index.html";
				}
			});	
		}else{
			alert("帳號密碼格式錯誤");
			window.location.href = "index.html";
		}
	});		
});
