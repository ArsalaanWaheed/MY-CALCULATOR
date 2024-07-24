// let name="ARSALAAN WAHEED";
//  let sher=name.slice(0,name.length-2);
//  console.log(sher);

let btn=document.querySelectorAll(".btn");
console.log(btn);
let string="";
for(btn of btn){
    btn.addEventListener("click",function(){
        let input=document.querySelector(".input");
        console.log(this);
   if(this.innerText=="="){
      let ans=eval(string);
      input.innerText=`Answer=${ans}`;
      var utterance=new SpeechSynthesisUtterance(input.innerText);
      speechSynthesis.speak(utterance);
      
   }
   else if(this.innerText=="C"){
    input.innerText=""
    string="";
   }
   else if(this.innerText=="del"){
    
    string=string.slice(0,string.length-1);
   input.innerText=string;
   }
   else {
    string=string+this.innerText;
    input.innerText=string;
    console.log(string.length);
    var utter=new SpeechSynthesisUtterance(string[string.length-1]);
      speechSynthesis.speak(utter);

   }
})
}