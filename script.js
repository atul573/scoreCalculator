var score = 0;

function add(){
    score +=1;
    document.getElementById("score").innerHTML = score;
}
function reset(){
    score = 0;
    document.getElementById("score").innerHTML  = score;
}
function remove(){
    if(score ==0){
        alert("score cannot be less than 0 ")
    }
    else{
        score-=1;
        document.getElementById("score").innerHTML  = score;
    }
   

}