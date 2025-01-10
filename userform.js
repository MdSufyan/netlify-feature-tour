function userregistration() {
    event.preventDefault();

    var userData = {
        name: $("#name").val(),
        email: $("#email").val(),
        contact: $("#contact").val(),
        interest: $("#interest").val(),
        password: $("#password").val()
    };

	$.ajax({
	        url: "http://localhost:8080/register",
	        type: "POST",
	        data: JSON.stringify(userData),
	        contentType: "application/json",
	        success: function (data) {
	            
	        },

	        error: function (error) {
				alert("inside error block")
	            alert("Error: " + error.responseText);

	        }
	    });
	}