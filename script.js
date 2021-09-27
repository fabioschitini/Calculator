 let operator=document.querySelector("#operator")
        operator.value=""
                let decimal=document.querySelector("#decimal")
                decimal.value=""
        let btn=Array.from(document.querySelectorAll('button'))
        let container=document.querySelector("#display")
        let result=document.querySelector("#result")
        result.value=""
        let para=document.querySelector("#numbers")
        para.textContent=""
        let yep=document.querySelector("#yolo")
        let signal=document.querySelector("#signal")
        let percentage=document.querySelector("#percentage")
        let del=document.querySelector("#del")
       

        let display=function (){ btn.map(btn=>btn.addEventListener("click",function(e){
            
            let num=btn.id;

            if(num==="+"||num==="-"||num==="*"||num==="/"){  if(result.value===""){operator.value=num
     yep.value=para.textContent  
     console.log(num)
             
              }
                   else{operator.value=num;
              para.textContent=result.value
              yep.value=para.textContent
              result.value="" } }

            else if(num==="="){
              para.textContent=result.value
            }
            
            else if(num==="clear"){
              para.textContent=""
              result.value=""
              operator.value=""
              yep.value=""
            }
            else if(operator.value==="+"||operator.value==="-"||operator.value==="*"||operator.value==="/"){
                     if(result.value===""){para.textContent=""
                    para.textContent+=num
                     result.value= operate(operator.value,yep.value,para.textContent)
                     
                    }
                     else{

                    if(num==="+/-"){ 
               signal.value=para.textContent
                 para.textContent=- signal.value
               }
               else if (num==="%"){percentage.value=para.textContent
                 para.textContent=percentage.value/100
               }
               else if(num==="del"){
                 console.log(typeof para.textContent)
                 del.value=para.textContent
                para.textContent=del.value.slice(0,del.value.length-1)
               }
                    else  para.textContent+=num
                     result.value= operate(operator.value,yep.value,para.textContent)
                     console.log("yo2")
                    }
                     }

            else if(num==="."){
                     if(decimal.value==="."){return}
                     else {para.textContent+=num
                       decimal.value="."}
                 
                 
               }
               else if (num==="%"){percentage.value=para.textContent
                 para.textContent=percentage.value/100
            
               }

               else if (num==="+/-"){ 
                signal.value=para.textContent
                 para.textContent=- signal.value
            
               }
               else if(num==="del"){
                 console.log(typeof para.textContent)
                 del.value=para.textContent
                para.textContent=del.value.slice(0,del.value.length-1)
               }

            else  {para.textContent+=num
            console.log(num)}

        
         

        }))}

  display()
      
 function divide(x,y){num1=parseFloat(x);
    num2=parseFloat(y);
    if(num2===0){return "lol"}
    let result= num1/num2;
    let rounded= Math.round(result * 10) / 10;
  return rounded; }
function add (x,y) {num1=parseFloat(x);
    num2=parseFloat(y);
    let result= num1+num2;
    let rounded= Math.round(result * 10) / 10;
  return rounded; }
function subtract (x,y) {num1=parseFloat(x);
    num2=parseFloat(y);
    let result= num1-num2;
    let rounded= Math.round(result * 10) / 10;
  return rounded;} 
function multiply (x,y) {num1=parseFloat(x);
    num2=parseFloat(y);
    let result= num1*num2;
    let rounded= Math.round(result * 10) / 10;
  return rounded; }
function operate(operator,x,y){if (operator==="+"){return add(x,y)}
else if(operator==="-"){ return subtract(x,y) }
else if (operator==="*"){ return multiply(x,y) }
else if (operator==="/"){ return divide(x,y) }
}