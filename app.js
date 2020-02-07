let gun1="SEHER: AZN,EUR,USD"+" AXSAM:EUR,AZN,USD";
let gun2="SEHER: EURO,USD,AZN"+" AXSAM:USD,EURO,AZN";
let gun3="SEHER: USD,AZN,EURO"+" AXSAM:AZN,USD,EURO";


function gun(value){
    if(value>31){
        console.log("bele bir gun yoxdu")
    }
    switch(value){
        case 1:
        case 4:
        case 7:
        case 10:
        case 13:
        case 16:
        case 19:
        case 22:
        case 25:
        case 28:
        case 31:
            console.log(gun1);
            break;
        case 2:
        case 5:
        case 8:
        case 11:
        case 14:
        case 17:
        case 20:
        case 23:
        case 26:
        case 29:
            console.log(gun2);
            break;
        default:
            console.log(gun3)
    }
}
gun();