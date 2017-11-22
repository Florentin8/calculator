<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
        #content {
            color: blue;
            font-size: 40px;
            background-color: white;
            text-align: center;
        }

        h1 {
            color: #5795ee;
            font-size: 20px;
            background-color: white;
        }

        .bt {
            height: 30px;
            width: 30px;
            text-align: center;
            align-content: center;
            background-color: transparent;
        }

        .img {
            height: 12px;
            width: 12px;
            text-align: center;
            align-content: center;

        }


    </style>

    <!-- below are my stylesheets -->

    <link type="text/css" rel="stylesheet" href="css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="styleSheet.css">

</head>




<body>


    <!-- HTML content-->
    <div class="container-fluid" id="content">

        <div id="parent" class="row text-center">
            <h1 class="text-primary text-center">Javascript Calculator</h1>

            <h1 id="input" class="text-primary text-center"></h1>

            <div id = "bt">
            <div id = "start" class="row text-center">
                <button id="CE" class="bt clear">CE</button>
                <button id="C" class="bt clear">C</button>
                <button id="back" class="bt clear"><img class="img" src = "https://image.freepik.com/free-icon/backspace-outline_318-10630.jpg"></button>
                <button id="divide" class="bt">/</button>
            </div>
            <div class="row text-center">
                <button id="7" class="bt">7</button>
                <button id="8" class="bt">8</button>
                <button id="9" class="bt">9</button>
                <button id="X" class="bt">X</button>
            </div>
            <div class="row text-center">
                <button id="4" class="bt">4</button>
                <button id="5" class="bt">5</button>
                <button id="6" class="bt">6</button>
                <button id="minus" class="bt">-</button>
            </div>
            <div class="row text-center">
                <button id="1" class="bt">1</button>
                <button id="2" class="bt">2</button>
                <button id="3" class="bt">3</button>
                <button id="plus" class="bt">+</button>
            </div>
            <div class="row text-center">
                <button id="pm" class="bt"><img class="img" src = "https://maxcdn.icons8.com/Share/icon/Science//plus_minus1600.png"></button>
                <button id="0" class="bt">0</button>
                <button id="decimal" class="bt">.</button>
                <button id="equal" class="bt">=</button>
            </div>
            </div>

        </div>
    </div>


    <hr class="hr">
    

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>



    <script>

    var result=[];
    var d;
    var e;
    var f;


    $('.clear').on('click', function () {
        result.splice(0);
        $('#input').empty();

    });

     $('#1').on('click', function () {
         result.push(1);
         $('#input').html(result);
     });

     $('#2').on('click', function () {
         result.push(2);
         $('#input').html(result);
     });

     $('#3').on('click', function () {
        result.push(3);
        $('#input').html(result);
    });

     $('#4').on('click', function () {
        result.push(4);
        $('#input').html(result);
    });

    $('#5').on('click', function () {
         result.push(5);
        $('#input').html(result);
    });

    $('#6').on('click', function () {
        result.push(6);
        $('#input').html(result);
    });

    $('#7').on('click', function () {
         result.push(7);
        $('#input').html(result);
    });

    $('#8').on('click', function () {
         result.push(8);
        $('#input').html(result);
    });

    $('#9').on('click', function () {
         result.push(9);
        $('#input').html(result);
    });

    $('#0').on('click', function () {
         result.push(0);
        $('#input').html(result);
    });

    $('#decimal').on('click', function () {
        result.push('.');
        $('#input').html(result);
    });




    //do calculation and show result with mathematical operators  && isNaN(parseInt(result[result.length-1]))
    function calculation(){

        result.forEach(function(element,index,array){
            //check if 2 cal sign exist in the array
            if (isNaN(parseInt(element)) && element != "." && index != result.length-1) {

                d = result.splice(0,index).join("");
                e = result.splice(1,result.length-2).join("");

                if (element=="+") {
                    f = parseFloat(d) + parseFloat(e);
                }

                if (element=="-") {
                    f = parseFloat(d) - parseFloat(e);
                }

                if (element=="x") {
                    f = parseFloat(d) * parseFloat(e);
                }

                if (element=="/") {
                    f = parseFloat(d) / parseFloat(e);
                }

                result[0]=f;

                $('#input').html(f);

            }
        });

    }

//to check if anything exists in result, and if anything exists in f
    function empty(){
            if (parseFloat(f)!= 0 && result.length == 0) {
                result[0] = f;
            }
    }

    //click on calc signs and process calculation
    $('#plus').on('click', function () {
        empty();
        result.push('+');
        $('#input').html(result);
        calculation();
    });

    $('#minus').on('click', function () {
        empty();
        result.push('-');
        $('#input').html(result);
        calculation();
    });

    $('#divide').on('click', function () {
        empty();
        result.push('/');
        $('#input').html(result);
        calculation();
    });

    $('#X').on('click', function () {
        empty();
        result.push('x');
        $('#input').html(result);
        calculation();
    });


    //do calculation with equal sign
    $('#equal').on('click', function(){

        result.forEach(function(element,index,array){

            if (isNaN(parseInt(element)) && element != ".") {
                d = result.splice(0,index).join("");
                e = result.splice(1).join("");

                if (element=="+") {
                    f = parseFloat(d) + parseFloat(e);
                }

                if (element=="-") {
                    f = parseFloat(d) - parseFloat(e);
                }

                if (element=="x") {
                    f = parseFloat(d) * parseFloat(e);
                }

                if (element=="/") {
                    f = parseFloat(d) / parseFloat(e);
                }

                $('#input').html(f);
                result.splice(0);

            }
        });
    });


    </script>




</body>
</html>
