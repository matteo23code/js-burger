



var costs = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');

// preparo variabile totale del nostro ordine
var total = 50;

var totalHtmlElement = document.getElementById('total-div');

// evento click su pulsante
document.getElementById("button-ingredient").addEventListener("click", function() {
  total = 50;
  for(var x = 0; x < costs.length; x++) {
    if(costs[x].checked) {
      total += parseInt(costs[x].value);
    }
  }

  totalHtmlElement.getElementsByTagName('span')[0].innerText = total;
  var scriviNome = document.getElementsByClassName('scrivi-nome');
  if (scriviNome = '') {
    
  }else {
    alert('inserisci nome')
  }

  var discount = document.getElementById('discount').value;

  var couponCode = ['001','002','003','004'];

  if (couponCode.includes(discount)) {
   var sconto = (total/100 ) * 20;
    costs = total - sconto;
    console.log('costs' + costs);
    console.log('sconto' + sconto);
    console.log('total' + total);
  }else {
    alert('Inserisci codice sconto valido!');
  }
});
