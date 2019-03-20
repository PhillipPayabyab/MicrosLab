var msgInput = document.getElementById("msgInput");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
	var inputValue= msgInput.value;
	var body = document.getElementsByTagName("body")[0];
	var msgDiv = document.createElement("div");
	var inbox = msgDiv;
	inbox.className = "inbox-design";
	msgDiv.innerText = inputValue;
	body.appendChild(msgDiv);

	var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) 
			{
			var response = JSON.parse(xhttp.responseText);
			/*console.log(response.response); */
			var body = document.getElementsByTagName("body")[0];
			var msgDiv = document.createElement("div");
			var inbox = msgDiv;
			inbox.className = "inbox-design";
			msgDiv.innerText = response.response;
			body.appendChild(msgDiv);
			}

		}

		xhttp.open("GET", "http://localhost/Payabyab/api.php?text=" + inputValue, true);
		xhttp.send();

})

