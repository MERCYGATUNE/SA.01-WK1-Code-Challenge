// TAKES INPUT AS SPEED OF THE CAR




//  DECLARING A FUNCTION
function checkSpeed() {
  let speed = document.getElementById('speed').value;
  let limit = 70;
  let demerits = 0;

  if (speed < limit) {
      document.getElementById('result').innerHTML = "Ok";
  } else {
      demerits = Math.floor((speed - limit) / 5);
      document.getElementById('result').innerHTML = "Speeding by " + (speed - limit) + " km/s. " + demerits + "demerit point" + (demerits !== 1 ? "s" : "");
  }
}