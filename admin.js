function saveData() {

    localStorage.setItem("liveLink",
        document.getElementById("liveLink").value);

    localStorage.setItem("dateTime",
        document.getElementById("dateTime").value);

    localStorage.setItem("slots",
        document.getElementById("slotsInput").value);

    localStorage.setItem("registration",
        document.getElementById("regInput").value);

    localStorage.setItem("selected",
        document.getElementById("selectedInput").value);

    localStorage.setItem("rejected",
        document.getElementById("rejectedInput").value);

    alert("Saved Successfully ✅");
}