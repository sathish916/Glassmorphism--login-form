function saveData()
{
let name,SAPID,time;
name=document.getElementById("userName").value;
SAPID=document.getElementById("idNo").value;

time=document.getElementById("time").value;

localStorage.setItem("userName",name)
localStorage.setItem("idNo",SAPID)
localStorage.setItem("time",time)
}


function confirmInput() {
    alert("Hello " + " HCLite " + "! Your Data added successfully");
}
