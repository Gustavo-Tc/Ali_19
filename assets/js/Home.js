// Set the date we're counting down to
var countDownDate = new Date("Oct 11, 2024 10:00:00").getTime();

var btn = document.getElementById("Acesso");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "Restam " + days + " dia(s) " + hours + " horas "
  + minutes + " minutos e " + seconds + " segundos! ";
    
btn.classList.add("disabled");

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Espera concluída!";
      
  btn.classList.remove("disabled");
  }
}, 1000);