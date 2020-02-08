let gun1="SEHER: AZN,EUR,USD"+" AXSAM:EUR,AZN,USD";
let gun2="SEHER: EURO,USD,AZN"+" AXSAM:USD,EURO,AZN";
let gun3="SEHER: USD,AZN,EURO"+" AXSAM:AZN,USD,EURO";

function day(num){
function day1(i){
    for(var i=1;i<=31;i+=3){
        if(num===i){
            console.log(gun1)
        }
    }
}
day1();
function day2(j){
    for(var j=2;j<=31;j+=3){
        if(num===j){
            console.log(gun2)
        }
    }

}
day2();
function day3(r){
    for(var r=3;r<=31;r+=3){
       if(num===r){
           console.log(gun3)
       }
    }

}
day3();

   
}
day();