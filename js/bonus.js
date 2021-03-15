


function arrayRandom (min,max) {
  var lvl = prompt("Inserisci il livello di difficoltà scegliendo tra facile , medio , difficile");

  if (lvl == "facile") {


    var max = 100;
  }else if (lvl == "medio") {


    var max = 80;
  }else {


    var max = 50;
  }
  arrRnd = [];

  for (var i = 0; i < 16; i++) {

    rndNums = Math.ceil(Math.random() * max);
    if (!arrRnd.includes(rndNums)) {

      arrRnd.push(rndNums);
    }else {

      i--;
    }
  }

  console.log(arrRnd);
  var arrUser = [];

  for (var i = 0; i < (max - 16); i++) {

    var userNums = parseInt(prompt("Inserire un numero tra 1 e " + max));

    if (!arrUser.includes(userNums)) {

      arrUser.push(userNums);
      if (arrRnd.includes(userNums)) {

        console.log("Hai scelto un numero già uscito!!" , " Il tuo punteggio è di " + (arrUser.length - 1));
        break
      }
    }else {

      alert("HAI GIA' INSERITO QUESTO NUMERO");
      i--;
    }
  }
  if (arrUser.length == 84)  {
    console.log("SEI UN DRAGO, PUNTEGGIO MASSIMO")
  }

  console.log(arrUser);
}

// arrayRandom();
