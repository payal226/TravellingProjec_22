function displaydiv(){

    var data=document.querySelector(".ExService")
    data.style.display=(data.style.display=="block")?"none":"block";
     

    var data1=document.querySelector(".cross-icon").addEventListener("click",
        function(){
            document.querySelector(".ExService").style.display="none";
        }
    )
}

function closePage() {

    window.location.href = 'index.html';  
}

function ProcesSubmit(){
     var Uname=document.getElementById("Uname").value;
     var MailAddress=document.getElementById("MailAddress").value;
     var PNumber=document.getElementById("PNumber").value;
     var Message=document.getElementById("Message").value;

     if(!Uname || !PNumber || !Message){
        console.log("All Feilds are Require");
     }
     else if(Uname=="" && MailAddress=="" && PNumber=="" && Message=="")
     {
        console.log("Submit Succesfully Your replay in 24 hours");
        alert("please give correct credentials");
     }
     else{
         console.log("Submit Succesfully Your replay in 24 hours");
         alert("Submit Succesfully Your replay in 24 hours")
     }
}

function displaydiv1(){

    var data=document.querySelector(".ExReviews")
    data.style.display=(data.style.display=="block")?"none":"block";
     

     var data1=document.querySelector(".cross-icon").addEventListener("click",
        function(){
            document.querySelector(".ExReviews").style.display="none";
         }
     )
}


function displaydiv2(){

    var data=document.querySelector(".ExSubmit")
    data.style.display=(data.style.display=="block")?"none":"block";
     

    var data1=document.querySelector(".cross-icon").addEventListener("click",
        function(){
            document.querySelector(".ExSubmit").style.display="none";
        }
    )
}
  




















