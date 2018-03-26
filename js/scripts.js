function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var txtDob = $("#dob").val();
	var dateOfBirth = new Date(txtDob);

	if (dateOfBirth >= new Date()){
		alert("Date of Birth is not valid. Date has to be before today.");
		return false;
	}

	var inputTxt = $("#phone").val();
  	var phoneNumTest = /^\d{10}$/.test(inputTxt);

  	console.log(/^\d{10}$/.test(inputTxt));

  	if (phoneNumTest == false){
  		alert("Phone number is not valid or in a valid format");
  		return false;
  	}


}