let display=function (){ btn.map(btn=>btn.addEventListener("click",function(e){
            
  let num=btn.id
  if(num==="+"||num==="-"||num==="*"||num==="/"){  operator.value=num
yep.value=para.textContent  
   
    para.textContent=""
  
   
  }
  else if(operator.value==="+"||operator.value==="-"||operator.value==="*"||operator.value==="/"){


    console.log("yolo")
    para.textContent+=num
    console.log(yep.value)
   result.value= operate(operator.value,yep.value,para.textContent)
    console.log(result.value)
  }

  else  {para.textContent+=num}



}))

}


  }