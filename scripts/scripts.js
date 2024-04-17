$(document).ready(function(){
    // This is the jQuery function to show the modal when the submit button is clicked

    $("#submit-form").click(function () { 
        var getName = $("#name").val();
        var getEmail = $("#email").val();
        var getPhone = $("#phonenumber").val();
        var getBday = $("#bDay").val(); 

        $("#modal_name").html(getName); 
        $("#modal_email").html(getEmail); 
        $("#modal_phonenumber").html(getPhone); 
        $("#modal_bDay").html(getBday); 

        var checkSMS = document.getElementById("SMS");
        var checkEmail = document.getElementById("Email");

            if (checkSMS.checked == true){
                checkSMS = "Will not receive SMS messages";
            } else {
                checkSMS = "Will recieve SMS messages";
            }

            if (checkEmail.checked == true){
                checkEmail = "Will not receive Email messages";
            } else {
                checkEmail = "Will recieve Email messages";
            }

        $("#modal_noSMS").html(checkSMS);
        $("#modal_noEmail").html(checkEmail);

        $('#submitModal').modal('toggle')
    }); 
});