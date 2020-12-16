let phoneFields = document.querySelectorAll(".phoneInput")

let im = new Inputmask("+38 (099) 999 99 99");
im.mask(phoneFields);

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
    submitHandler: function(form){
       let xhr = new XMLHttpRequest();

       xhr.open("POST", "mail.php", true);

       let formData = new FormData(form);

       xhr.addEventListener("load", function(){
            if (xhr.readyState === 4){
                switch (xhr.status){
                    case 200:
                        console.log("OK!!!");
                        break;
                    case 404:
                        console.log("You are looser!");
                        break;
                    default:
                        console.log(":(");
                        break;
                }
            }
    });
    xhr.send(formData);
    },
});