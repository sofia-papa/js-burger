
let prezzoBasePanino = 10;

let listaCoupon = ["ciccioPanino21", "Bestburger21"]

let nomePanino = document.getElementById("scegli-panino")
console.log(nomePanino);

let bottone = document.getElementById("trova-prezzo-totale")
console.log(bottone);

bottone.addEventListener("click",
 function() {
    if (nomePanino.value.length == 0){
        alert ("devi inserire un nome")
    } else {
        let prezzoBasePanino = 10;
        let ingredientiAggiuntivi = document.getElementsByClassName("ingredients-plus")
        console.log(ingredientiAggiuntivi)

        for (let i= 0; i < ingredientiAggiuntivi.length; i++){
            let ingredienteAttuale = ingredientiAggiuntivi [i];
            console.log(ingredienteAttuale);

          if  (ingredienteAttuale.checked == true) {
              prezzoBasePanino += 5;
          }
        }
        console.log(prezzoBasePanino);

      
    }
 }
);