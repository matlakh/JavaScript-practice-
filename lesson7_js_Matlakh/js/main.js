$(".tabcontent").not(":first").hide();
$(".tablinks").click(function() {
	$(".tablinks").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabcontent").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.array').on("click", function(){

    let language = [
        ['Живи','Кушай','Програмируй'],
        ['Live','Eat','Program']
    ];
        
    $(".button__rus").on("click", function() {
        console.log(language[0]);
        for(let i = 0; i < language[0].length; i++){
        console.log(language[0][i]);
        }
    })

    $(".button__eng").on("click", function() {
        console.log(language[1]);
        for(let i = 0; i < language[1].length; i++){
        console.log(language[1][i]);
        }
    })
})
    
$(".colors").on("click",function () {

    let red, green, blue, rgb;
    let redHex, greenHex, blueHex;

    $(document).keyup(function (event){
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

        $('.color_name-hex').text(" #" + redHex + greenHex + blueHex);
        $('.color_name').text( "(" + red + ", " + green + ", " + blue + ")");
            
        rgb = 'rgb' + $('.color_name').text();
        $("body").css("background-color", rgb);
            
        if (red < 130 && green < 130 && blue < 130) {
            $('.title').css('color','white');
            $('.color_name').css('color','white');
            $('.color_name-hex').css('color','white');
        } else {
            $('.title').css('color', 'black'),
            $('.color_name').css('color', 'black'),
            $('.color_name-hex').css('color', 'black');
        }
    };
})

$(".bordrad").on("click", function (){
    
    $(".input-Top-Left").on("input", function(){
        $(".square").css("border-top-left-radius", this.value + "%");
        $(".square__bordrad-tl").text("border-top-left-radius: " + this.value + "%");
    });

    $(".input-Top-Right").on("input", function(){
        $(".square").css("border-top-right-radius", this.value + "%");
        $(".square__bordrad-tr").text("border-top-right-radius: " + this.value + "%");
    });

    $(".input-Bottom-Left").on("input", function(){
        $(".square").css("border-bottom-left-radius", this.value + "%");
        $(".square__bordrad-bl").text("border-bottom-left-radius: " + this.value + "%");
    });

    $(".input-Bottom-Right").on("input", function(){
        $(".square").css("border-bottom-right-radius", this.value + "%");
        $(".square__bordrad-br").text("border-bottom-right-radius: " + this.value + "%");
    });
        
        })
