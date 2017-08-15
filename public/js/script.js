$("#form").submit(function(event){
	event.preventDefault();

	var url = "http://localhost:3000/products";
	var value = $("#search").val();
	if(value.length > 0){
		url += "/search=" + value;
	} else {
		alert("Please enter a value");
		return;
	}
	//	If the instock box is checked then display stock in stock
	var radioButton = $("#form input[type='radio :checked").val();
	if (radioButton === "yes"){
		url += "/instock=yes"
	} else if (radioButton === "no"){
		url += "/instock=no"
	}
	$.ajax({
		url: url,
		dataType: "json",
		success:function(data){
			console.log(data);
		},
		error:function(){
			console.log("Something went wrong")
		}
	})
});
