// write js code here corresponding to matches.html
var matcharr=JSON.parse(localStorage.getItem("schedule"))||[];
displayData(matcharr);
var favouritearr=JSON.parse(localStorage.getItem("favourites"))||[];

function displayData(data){

    data.forEach(function(ele){
var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.innerText=ele.matchnum ;

var td2=document.createElement("td");
td2.innerText=ele.TeamA;

var td3=document.createElement("td");
td3.innerText=ele.Teamb ;

var td4=document.createElement("td");
td4.innerText=ele.Date ;

var td5=document.createElement("td");
td5.innerText=ele.Venue ;

var td6=document.createElement("td");
td6.innerText="Favourites";
td6.style.color="green";
td6.addEventListener("click",function()
{
    favourites(ele);
});


tr.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr);

    });



}

function  favourites(ele){
   favouritearr.push(ele);
   localStorage.setItem("favourites",JSON.stringify(favouritearr)); 
}






