let val=12345;
let rev=0
while(val>0){
    var last=val%10;
    console.log(last,"last value")
    rev=rev*10+last;
    break;
}