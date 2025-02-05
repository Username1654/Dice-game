let objects = {
    dice:{
        d1:0,
        d2:0,
    },
    money:100,
    rolls:0,
    evenGuess:null,
    oddGuess:null
}
document.getElementById("backgroundMusic").volume = 0.2
document.getElementById("backgroundMusic").loop = true
document.getElementById("backgroundMusic").play()

function odd(){
    objects.evenGuess = false
    objects.oddGuess = true
    document.getElementById("odd").style.backgroundColor = "greenyellow";
    document.getElementById("even").style.backgroundColor = "";

}
function even(){
    objects.evenGuess = true
    objects.oddGuess = false
    document.getElementById("even").style.backgroundColor = "greenyellow";
    document.getElementById("odd").style.backgroundColor = "";
}

const interval = setInterval(() =>{
    if(objects.money >2000){
        objects.money -=100
    }
    else if(objects.money > 600){
        objects.money -=15
    }
    else if(objects.money > 200){
        objects.money -=5
    }
   else if(objects.money <=200 && objects.money >5){
    objects.money-=1
    }
    
    else if(objects.money <= 4){
        objects.money +=1
    }
    else if(objects.money <= -500){
        objects.money -=10
    }else if(objects.money <= -2000){
        objects.money -=30
    }
    display()
},500)

function roll(){
   
    let dice1 = Math.floor(Math.random()*6+1)
console.log(dice1)
let dice2 = Math.floor(Math.random()*6+1)
console.log(dice2)

let random = Math.floor(Math.random()*20 +1)
let screaming = document.getElementById("sceam")
console.log("random",random)
if(random ===3){
    objects.money -= objects.money*0.5
    document.getElementById("bad").innerHTML = `Bad luck! you just lost 50% of your hard earned cash`
    screaming.play()
}else if(random !==3){
    document.getElementById("bad").innerHTML=' '
}

let total = dice1 + dice2
let number = document.getElementById("number")
number.innerHTML = `You Rolled: ${total}`

let isEven = total % 2===0
let isOdd = total % 2 ===1
console.log(isEven)
console.log(isOdd)
let yay =document.getElementById("yay")
let fail = document.getElementById("fail")

if(isOdd &&  objects.oddGuess === true){
    objects.money *= 1.4
    yay.play()
   
}else if(isEven &&  objects.oddGuess === true){
    objects.money -= objects.money*0.2
    fail.play()
    
}
else if(isEven &&  objects.evenGuess === true){
    objects.money *= 1.4
    yay.play()
}else if(isOdd &&  objects.evenGuess=== true){
    objects.money -= objects.money*0.2
    fail.play()
    
}

//below 0 dollars
if(Math.floor(objects.money) <=0){
if(isOdd &&  objects.oddGuess === true){
    yay.play()
    objects.money +=10

}else if(isEven &&  objects.oddGuess === true){
    fail.play()
    objects.money -= 20
}
else if(isEven &&  objects.evenGuess === true ){
    objects.money +=10
    yay.play()
}else if(isOdd &&  objects.evenGuess=== true ){
    objects.money -= 20
    fail.play()
    
}
}

objects.rolls++
display()
}

function display(){
    document.getElementById("money").innerHTML = `Money: $${Math.floor(objects.money)}`
    document.getElementById("rolls").innerHTML=`Rolls: ${Math.floor(objects.rolls)}`
}
display()