// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",match);
var matcharr=JSON.parse(localStorage.getItem("schedule"))||[];
 function match(){
   
 event.preventDefault();
 var matchobj={
matchnum :document.querySelector("#matchNum").value,
TeamA:masaiForm.teamA.value,
Teamb:masaiForm.teamB.value,
Date:masaiForm.date.value,
Venue:masaiForm.venue.value,
 };

matcharr.push(matchobj);
console.log(matcharr)

localStorage.setItem("schedule",JSON.stringify(matcharr));




 }