var ch=document.getElementById("ch");
var word=document.getElementById("word");
var textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
  //code for count character in character we count space also so we did not trim

  var text=this.value;
  let char=text.length;
  ch.innerHTML=char;

  //code for count word
   text=text.trim();                              //trim remove the space of starting or ending
  var words=text.split(" ");
  var cleanlist=words.filter(function(elm){      //if we give space between words then it count so to remove that space we use filter it take anonmous function  
     return elm !="";                             //and every word send to elm if elm is empty string then it is not return 
  });
  word.innerHTML=cleanlist.length;
});
