const title = document.getElementById("header-container");
title.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";

const emergencyTasksInside = document.querySelectorAll(".emergency-tasks h3");
for(let index = 0; index < emergencyTasksInside.length; index += 1) {
    emergencyTasksInside[index].style.backgroundColor = "red";
}



const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "yellow";

const noEmergencyTasksInside = document.querySelectorAll(".no-emergency-tasks h3");
for(let index = 0; index < noEmergencyTasksInside.length; index += 1) {
    noEmergencyTasksInside[index].style.backgroundColor = "black"
}
