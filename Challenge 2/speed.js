// TAKES INPUT AS SPEED OF THE CAR
let speed = prompt('Enter the speed of the vehicle');
//  DECLARING A FUNCTION
  function speedDetector(speed){
const speedlimit = 70;
const kmPerdDemeritPoint= 5;
const demeritPointThreshold =12;

  if(speed < speedlimit){
   return "Ok";
  }else {
    const demeritPoints = Math.floor((speed- speedLimit) / kmPerDemeritPoint);
    if(demeritPoints > demeritPointThreshold){
      return "License suspended";
    }else{
      return ('Points: ${demeritPoints}');
    }
  }
}
// OUTPUTTING THE SPEED
console.log(speedDetector(speed));