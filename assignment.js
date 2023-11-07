function result(){
    var sheyi = new Audio("music/amda.mp3")
    if(score.value == '' ){
        show.innerHTML = 'Space cannot be blank'
        sheyi.play()
    }
    else if(score.value%3 == 0 && score.value%5 == 0){  
        show.innerHTML = 'FizzBuzz'
    }
    else if(score.value%3 == 0){
        show.innerHTML = 'Fizz'
    }
    else if(score.value%5 == 0){
        show.innerHTML = 'Buzz'
    }
    else{
        show.innerHTML = 'Your input is ivalid'
    }
}

function Result(){
    if(scores.value == "" ){
        show.innerHTML = 'The page cannot be blank'
    }
    else if(scores.value >= 0 && scores.value  <= 29){
        show.innerHTML = "Your Score is " + scores.value+ " and Your grade is F9"
    }
    else if( scores.value >= 30 && scores.value < 40){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is D7"
    }
    else if(scores.value >= 40 && scores.value < 46 ){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is E8"
    }
    else if(scores.value >= 46 && scores.value <= 50){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is C6"
    }
    else if(scores.value > 50 && scores.value <= 60){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is C5"
    }
    else if(scores.value > 60 && scores.value <= 69){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is C4"
    }
    else if(scores.value > 69 && scores.value <= 75){
        show.innerHTML = "Your Score is " + scores.value+ " and your grade is B3"
    }
    else if(scores.value > 75 && scores.value <= 79){
         show.innerHTML = "Your Score is " + scores.value+ " and your grade is B2"
    }
    else if(scores.value > 79 && scores.value <= 100){
         show.innerHTML = "Your Score is " + scores.value+ " and your grade is A1"
    }
    else{
        if (scores.value < 0 || scores.value > 100) {
              show.innerHTML = "Make sure you enter any number within the grade limits"
        }
    }
}