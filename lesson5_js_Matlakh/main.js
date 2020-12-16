function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }   
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

let colorBtn = document.querySelectorAll("colors");
let bordradBtn = document.querySelectorAll("bordrad");

const title = document.querySelector('.title'),
colorName = document.querySelector('.color_name'),
colorNameHex = document.querySelector('.color_name-hex');

let red, green, blue, rgb;
let redHex, greenHex, blueHex;

function changeBackgroundColor () {

    document.addEventListener('keyup', function (event){
        if (event.code == 'Space') {
            changeBackground();
        }
    });

    function getRandom() {
        return Math.floor(Math.random() * 255);
      }
    function changeBackground() {
        
        red = getRandom();
        redHex = red.toString(16);
        if (redHex.length === 1) {
            redHex = '0' + redHex;
        }
        
        green = getRandom();
        greenHex = green.toString(16);
        if (greenHex.length === 1) {
            greenHex = '0' + greenHex;
        }

        blue = getRandom();
        blueHex = blue.toString(16);
        if (blueHex.length === 1) {
            blueHex = '0' + blueHex;
        }
        colorNameHex.textContent = '#' + redHex + greenHex + blueHex;
        colorName.textContent = '(' + red + ', ' + green + ', ' + blue + ')';
        
        rgb = 'rgb' + colorName.textContent;
        document.body.style.backgroundColor = rgb;
        
        if (red < 130 && green < 130 && blue < 130) {
            title.style.color = colorName.style.color = colorNameHex.style.color = 'white';
        } 
        else {
            title.style.color = colorName.style.color = colorNameHex.style.color = 'black';
        }
    };
};

    colorBtn.onclick = changeBackgroundColor();

    const topLeft = document.querySelector('.square__bordrad-tl'),
    topRight = document.querySelector('.square__bordrad-tr'),
    bottomLeft = document.querySelector('.square__bordrad-bl');
    bottomRight = document.querySelector('.square__bordrad-br');

    let inputTopLeft = document.querySelector(".input-Top-Left");
    let inputTopRight = document.querySelector(".input-Top-Right");
    let inputBottomLeft = document.querySelector(".input-Bottom-Left");
    let inputBottomRight = document.querySelector(".input-Bottom-Right");

    let square = document.querySelector(".square");

    let squareBordradTL = document.querySelector(".square__bordrad-tl"); 
    let squareBordradTR = document.querySelector(".square__bordrad-tr");
    let squareBordradBL = document.querySelector(".square__bordrad-bl");
    let squareBordradBR = document.querySelector(".square__bordrad-br");

function changeBorderRadius (){

inputTopLeft.addEventListener("input", function(){

   square.style.borderTopLeftRadius = this.value + "%";
   squareBordradTL.textContent = "border-top-left-radius: " + this.value + "%";

});
inputTopRight.addEventListener("input", function(){

    square.style.borderTopRightRadius = this.value + "%";
    squareBordradTR.textContent = "border-top-right-radius: " + this.value + "%";

 });
 inputBottomLeft.addEventListener("input", function(){

    square.style.borderBottomLeftRadius = this.value + "%";
    squareBordradBL.textContent = "border-bottom-left-radius: " + this.value + "%";

 });
 inputBottomRight.addEventListener("input", function(){

    square.style.borderBottomRightRadius = this.value + "%";
    squareBordradBR.textContent = "border-bottom-right-radius: " + this.value + "%";

 });

};

bordradBtn.onclick = changeBorderRadius();

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