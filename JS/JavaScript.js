var game = false;
var score;
var action;
var timeRem;
var A;

document.getElementById("start").onclick = function(){ //click
    if(game == true){ // we are playing so it should reload page
        location.reload();
    }else{ //we are not playing
        game = true; //we start play
        score = 0;
        document.getElementById("score-val").innerHTML = score;
        //btn should change bc we are playing

        timeRem = 60;
        document.getElementById("time").innerHTML = timeRem;

        hide("game-over");

        document.getElementById("start").innerHTML = "Reset Game";
        //timer shoud start counting down..
        startcount();
        
        // Q & A
        general();
    }

}
//first answer
for(i=1;i<5;i++){
    document.getElementById("A" + i).onclick = function(){
        //playing?
        if(game == true){
            if(this.innerHTML == A){
                //right answer
                score++;
                document.getElementById("score-val").innerHTML = score;
                //show right answer
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000)
                //new Q
                general();
            }else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
    
        }
    }
}

function startcount(){
    action = setInterval(function(){
        timeRem -= 1;
        document.getElementById("time").innerHTML = timeRem;
        if(timeRem==0){ //game over
            stopcount();
            show("game-over");
            document.getElementById("game-over").innerHTML = "<p>Game over!</p><p>your score is " + score + " </p>"
            game = false;
            document.getElementById("start").innerHTML = "Start Game";
        }
    }, 1000);

}

function stopcount(){
    clearInterval(action);

}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function general(){
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    A = x*y;
    document.getElementById("quiz").innerHTML = x + "  X  " + y;
    var pos = 1 + Math.round(Math.random()*3);
    //make a box fill by right answer
    document.getElementById("A" + pos).innerHTML = A;
    
    var As = [A];//not 2 same Answer

    for(i=1;i<5;i++){
        if(i != pos){ //for not putting on right answer
            var WA;
            do{//well there is a small chance that these 2 new numbers are equal to that x and y and we get one ore more numbers on answer boxs.. so.. :)
                WA = (1 + Math.round(Math.random()*9)) * 1 + Math.round(Math.random()*9)
                document.getElementById("A"+ i).innerHTML = WA;
            }while(As.indexOf(WA) > -1);
            As.push(WA);
        } 


    }


}