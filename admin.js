function saveData(){

    const status = document.getElementById("status").value;
    const date = document.getElementById("endDate").value;
    const link = document.getElementById("liveLink").value;

    localStorage.setItem("status", status);
    if(date) localStorage.setItem("endDate", date);
    if(link) localStorage.setItem("liveLink", link);

    alert("Settings Saved Successfully");
}