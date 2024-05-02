//lodash--npm---
//minfikacija! js ili css, html nono!!!!!!!!!
// Load the full build.
var _ = require('lodash');
//1.
var dobro="1234567890";
var lose="123456";
var jedinstveniZnakovi =function (password){
    var mojNiz=[];
    for(let i = 0; i<password.length; i++){
      //console.log(pasword.charAt(i));
      var numToCheck= pasword.charAt(i);
     //console.log("blalba" + _.isInteger(numToCheck)); --samo za brojeve jeovo od lodasha
      if (!isBroj(numToCheck)){
        console.log(numToCheck + "nije broj");
        return false;
      }
      if(mojNiz.includes(numToCheck)){
        //console.log(numToCheck+ "vec postoji u nasem nizu")_;
        return false;
      }
      else {
        console.log(numToCheck+ "ne postoji u nasem nizu");
        mojNiz.push(numToCheck);//dodaje u niz
      }

    }

return true;
};

function isBroj(broj){
    return !isNaN(broj);
}

function isMoreThanTen(password){
   if(password.length>10){
    return true;
   }

return false;
}

function skratiNaTen(password){
    var tmpPassword="";
    for(let i = 0; i<10; i++){
        var chrAtIndex= pasword.charAt(i);
        
        tmpPassword+=chrAtIndex;
    }
return tmpPassword;
}
console.log("Password je ispravan: "+ jedinstveniZnakovi(dobro));
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
console.log("Password ima vise od 10 znakova!"+ isMoreThanTen(dobro));
//Number()