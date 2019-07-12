//variable that calculates score
var points = 0;

//variable that checks function name
var funcName = "";

//array that stores function names
var funcArr = [];



/*
    ***functions one to ten***
    - show pictures when clicked
    - check function names
    - function names are stored in funcArr
    - function calcScore is called 
    */
    function one(){
        document.getElementById("one").style.backgroundImage = "url('images/triangle.png')";
        funcName = "one";
        funcArr.push(funcName);
        calcScore();
    }

    function two(){
        document.getElementById("two").style.backgroundImage = "url('images/circle.png')";
        funcName = "two";
        funcArr.push(funcName);
        calcScore();

    }

    function three(){
        document.getElementById("three").style.backgroundImage = "url('images/circle.png')";   
        funcName = "three";
        funcArr.push(funcName);
        calcScore();
     }
           
    function four(){
        document.getElementById("four").style.backgroundImage = "url('images/heart.png')";
        funcName = "four";
        funcArr.push(funcName);
        calcScore();
    }

    function five(){
        document.getElementById("five").style.backgroundImage = "url('images/star.png')";
        funcName = "five";
        funcArr.push(funcName);
        calcScore();
    }

    function six(){
        document.getElementById("six").style.backgroundImage = "url('images/square.png')";
        funcName = "six";
        funcArr.push(funcName);
        calcScore();
    }

    function seven(){
        document.getElementById("seven").style.backgroundImage = "url('images/star.png')";
        funcName = "seven";
        funcArr.push(funcName);
        calcScore();
    }

    function eight(){
        document.getElementById("eight").style.backgroundImage = "url('images/square.png')";
        funcName = "eight";
        funcArr.push(funcName);
        calcScore();
    }

    function nine(){
        document.getElementById("nine").style.backgroundImage = "url('images/triangle.png')";
        funcName = "nine";
        funcArr.push(funcName);
        calcScore();
    }

    function ten(){
        document.getElementById("ten").style.backgroundImage = "url('images/heart.png')";
        funcName = "ten";
        funcArr.push(funcName);
        calcScore();
    }


    
function calcScore(){

        // checks when to flip picture back to black if the 2 pictures do not match
        if(funcArr.length % 3 == 0){
            document.getElementById(funcArr[0]).style.background = "linear-gradient(to bottom, #33ffee 0%, #ffc799 100%)";
        
            document.getElementById(funcArr[1]).style.background = "linear-gradient(to bottom, #33ffee 0%, #ffc799 100%)";

            /* 
            ***the if statements***
            - add points when the same pictures are flipped
            - cards remain open when the same pictures are flipped
            */

            if(funcArr[0] == "one" && funcArr[1] == "nine" || funcArr[0] == "nine" && funcArr[1] == "one"){
                document.getElementById("one").style.backgroundImage = "url('images/triangle.png')";
                document.getElementById("nine").style.backgroundImage = "url('images/triangle.png')";
                points += 100
  
            } else if(funcArr[0] == "two" && funcArr[1] == "three" || funcArr[0] == "three" && funcArr[1] == "two"){
                document.getElementById("two").style.backgroundImage = "url('images/circle.png')";
                document.getElementById("three").style.backgroundImage = "url('images/circle.png')";
                points += 100

            } else if(funcArr[0] == "four" && funcArr[1] == "ten" || funcArr[0] == "ten" && funcArr[1] == "four"){
                document.getElementById("four").style.backgroundImage = "url('images/heart.png')";
                document.getElementById("ten").style.backgroundImage = "url('images/heart.png')";
                points += 100

            } else if(funcArr[0] == "five" && funcArr[1] == "seven" || funcArr[0] == "seven" && funcArr[1] == "five"){
                document.getElementById("five").style.backgroundImage = "url('images/star.png')";
                document.getElementById("seven").style.backgroundImage = "url('images/star.png')";
                points += 100

            } else if(funcArr[0] == "six" && funcArr[1] == "eight" || funcArr[0] == "eight" && funcArr[1] == "six"){
                document.getElementById("six").style.backgroundImage = "url('images/square.png')";
                document.getElementById("eight").style.backgroundImage = "url('images/square.png')";
                points += 100

            } else { points += 0;}

        
            // the funcArr is emptied since the above if statements only check elements 1 and 2
          funcArr = [];

            // the first element is added to funcArr
          funcArr.push(funcName);
    }
    
    // points are displayed
    document.getElementById("points").innerHTML = "POINTS : " + points;

}
