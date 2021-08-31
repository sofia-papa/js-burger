
let nomePanino = document.getElementById("scegli-panino")
console.log(nomePanino);

let bottone = document.getElementById("trova-prezzo-totale")
console.log(bottone);

bottone.addEventListener("click",
 function() {
    if (nomePanino.value.length === 0){
        alert ("devi inserire un nome")
    } else {
        let prezzoBasePanino = 10;
        let ingredientiAggiuntivi = document.getElementsByClassName("ingredients-plus")
        console.log(ingredientiAggiuntivi);

        for (let i= 0; i < ingredientiAggiuntivi.length; i++){
            let ingredienteAttuale = ingredientiAggiuntivi [i];
            console.log(ingredienteAttuale);

          if  (ingredienteAttuale.checked == true) {
              prezzoBasePanino += 5;
          }
        }
        console.log(prezzoBasePanino);

        //COUPON

        let listaCoupon = ["ciccioPanino21", "Bestburger21"];
        let coupon = document.getElementById("coupon");

        if (coupon.value.length > 0){ // se ho scritto qualcosa
           if (listaCoupon.includes(coupon.value)){ // se c'è dentro la lista allora sconto del 20%
               prezzoBasePanino = prezzoBasePanino * 0.8;
           } else {
               console.log ("ti stai inventando un coupon");
           }
        }

        let totale = document.getElementById("somma");
        totale.innerHTML = "IL costo è " + prezzoBasePanino + "&euro"
    }
 }
);
