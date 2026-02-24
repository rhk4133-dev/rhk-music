function saveData(){
    const date=document.getElementById("endDate").value;
    localStorage.setItem("endDate",date);
    alert("Saved Successfully!");
}