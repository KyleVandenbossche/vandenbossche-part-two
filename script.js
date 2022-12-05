/* 
Step 1: Prompt the user for their name
Step 2: Prompt the user if they want to play 3 or 6 holes of golf
Step 3: Prompt the user 3 or 6 times (depending on input for second prompt)
                for each hole of golf, asking number of putts for specific hole
Step 4: Keep track of cumulative score, at the end compare 
Step 5: After last hole, one of three messages logged into the console
            1. Nice try, (name)... Your total par was: +(par).
            2. Great job, (name)! Your total par was: -(par).
            3. Good game, (name). Your total par was: 0
*/



console.log("Welcome to golf")

// declare variables and assign values
let player = prompt("Welcome to golf, what is your name?");
let holes = prompt(`Hello ${player} would you like to play 3 or 6 holes today?`);


if(holes === "3"){

    let x1 = Number(prompt("How many putts for hole 1? (par is 3)"))

    let y1= Number(prompt("How many putts for hole 2? (par is 3)"))

    let z1 = Number(prompt("How many putts for hole 3? (par is 3)"))

    total = x1+y1+z1

}

if(total > 9){

    abovepar = total-9
    console.log(`Nice try, ${player}... Your total par was: +${abovepar}`)
    
}else if(total < 9){

    belowpar = total-9
        console.log(`Good game, ${player}. Your total par was: ${belowpar}`)

}else if(total = 9){

    console.log(`Great job, ${player}! Your total par was: even`)

}


if(holes ==="6"){
    let a = Number(prompt("How many putts for hole 1? (par is 3)"))

    let b = Number(prompt("How many putts for hole 2? (par is 3)"))

    let c = Number(prompt("How many putts for hole 3? (par is 3)"))

    let x2 = Number(prompt("How many putts for hole 4? (par is 3)"))

    let y2 = Number(prompt("How many putts for hole 5? (par is 3)"))

    let z2 = Number(prompt("How many putts for hole 6? (par is 3)"))

    othertotal = a+b+c+x2+y2+z2
    
}

if(othertotal > 18){

    abovepar1 = othertotal-18
    console.log( `Nice try, ${player} Your total par was ${abovepar}`)

}else if(othertotal <18){
    belowpar1 = othertotal-18
    console.log(`Good game, ${player} your total par was ${belowpar1}`)
}else if(othertotal = 18){
    console.log(`Great job, ${player}! Your total par was: even`)
}








