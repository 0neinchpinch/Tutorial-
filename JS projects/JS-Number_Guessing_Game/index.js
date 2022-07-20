const answer = Math.ceil(Math.random()*10);
let guesses=0;

document.getElementById("submit").onclick = function () {

    let guess =  document.getElementById("guessfield").value
    guesses+=1;

    if(answer==guess){

        alert(`${answer} is the number, it took you ${guesses} guesses`)
    }

    else if(guess<answer ){alert("Too small!");}

    else{alert("Too big!");}
}
