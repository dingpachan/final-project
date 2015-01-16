
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
			///alert(username);
			//alert(password);
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
			if(username.match(/w)){
				alert("yes");
			}else{
				alert("no");
			}
		
		});		
	});
