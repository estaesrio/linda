
function questionfunc() 
{

  
  var num1 = Math.floor(Math.random()*201)
  var num2 = Math.floor(Math.random()*201)
  var total = num1 + num2
  var question = prompt ("What is the answer of " + num1 + " +" + num2 + " ? ")

  if (question == total) {
    alert ("사랑해요 🫣..")
  }

  else if (question == "")
  alert ("야!!!")

  else { alert ("너 바보예요? 🙄! " + "The correct answer is " + total ) }

}



questionfunc() 
