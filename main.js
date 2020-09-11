function changeRange() {
  let rng = document.getElementById('range'); 
  let num = document.getElementById('number'); 
  let entnumb = document.getElementById('ent_number');
  let commission = document.getElementById('commission');
  num.value = rng.value;
  entnumb.style.height = rng.value + 'px';
  commission.style.height = parseInt(percentageCount ()) + 'px';
}

function changeNumber() {
  let rng = document.getElementById('range'); 
  let num = document.getElementById('number'); 
  let entnumb = document.getElementById('ent_number');
  let commission = document.getElementById('commission');
  rng.value = num.value;
  entnumb.style.height = rng.value + 'px';
  commission.style.height = parseInt(percentageCount ()) + 'px';
}

function percentageCount () {
  let num = document.getElementById('number'); 
  let x;
  
  if (num.value < 20) {
    x = 2;
  } else if (num.value >= 20 && num.value <= 50) {
    x = 4;
  } else if (num.value >= 50 && num.value <= 75) {
    x = 6;
  } else if (num.value >= 75 && num.value <= 100) {
    x = 8;
  }
  
  let perc = num.value / 100 * x;
  return perc;
}