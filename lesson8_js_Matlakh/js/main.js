
new JustValidate('.js-form', {
    rules: {
        email:{
            required : false,
            email : true
        },
        name:{
            required: true,
            minLength: 2
        },
        phone:{
            required: true
        },
    },
    messages:{
        name:{
            minLength: 'It`s more than 1 symbol!'
        },
        email:{
            email: 'Your email is invalid!'
   
        },
        phone:{
            required: 'Enter your real phone!'
        },
    },
})    
$(document).ready(function() {

    let im = new Inputmask("+38 (099) 999 99 99");
    im.mask($(".phoneInput"));

    $('.js-form').submit(function(){
        
        let name = $('.nameInput').val();
        let email = $('.emailInput').val();
        let phone = $('phoneInput').val();

          
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: {
                'name': name, 
                'phone': phone,
                'email': email
            },
            dataType: "json",
            success: function(data){

                if(data.result == 'success'){   
                    console.log('форма корректно заполнена');
                } else {
                    for(let errorField in data.text_error){
                        $('#'+errorField+'_error').html(data.text_error[errorField]);
                        $('#'+errorField+'_error').show();
                        $('#'+errorField).addClass('error_input');                      
                    }
                }
            }
        });
        return false;
    });
});
