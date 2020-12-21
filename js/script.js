var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');

// preparo variabile totale del nostro ordine
var total = 0;

var totalHtmlElement = document.getElementById('total-div');

// evento click su pulsante
document.getElementById("button-ingredient").addEventListener("click", function() {

  total = 0;

  for(var x = 0; x < costs.length; x++) {
    if(costs[x].checked) {
      total += parseInt(costs[x].value);
    }
  }

  // popolo elemento #total con il totale del mio ordine
  totalHtmlElement.getElementsByTagName('span')[0].innerText = total;

  var discount = document.getElementsByClassName('discount');

  var couponCode = ['001','002','003','004'];

  if (couponCode.includes(discount)) {
    var sconto = (total/100 ) * 20;
    costs = total - sconto;
  }else {
    alert('Inserisci codice sconto valido!');
  }
});
