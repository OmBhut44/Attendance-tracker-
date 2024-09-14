var subjectData = {
    "Subject_1": {
        "CE": {
            "1": "1: CE_Student_1",
            "2": "2: CE_Student_2",
            "3": "3: CE_Student_3",
            "4": "4: CE_Student_4",
            "5": "5: CE_Student_5",
            "6": "6: CE_Student_6"
        },
        "IT": {
            "1": "1: IT_Student_1",
            "2": "2: IT_Student_2",
            "3": "3: IT_Student_3",
            "4": "4: IT_Student_4",
            "5": "5: IT_Student_5",
            "6": "6: IT_Student_6"
        }
    },
    "Subject_2": {
        "CE": {
            "1": "1: CE_Student_1",
            "2": "2: CE_Student_2",
            "3": "3: CE_Student_3",
            "4": "4: CE_Student_4",
            "5": "5: CE_Student_5",
            "6": "6: CE_Student_6"
        },
        "IT": {
            "1": "1: IT_Student_1",
            "2": "2: IT_Student_2",
            "3": "3: IT_Student_3",
            "4": "4: IT_Student_4",
            "5": "5: IT_Student_5",
            "6": "6: IT_Student_6"
        }
    },
    "Subject_3": {
        "CE": {
            "1": "1: CE_Student_1",
            "2": "2: CE_Student_2",
            "3": "3: CE_Student_3",
            "4": "4: CE_Student_4",
            "5": "5: CE_Student_5",
            "6": "6: CE_Student_6"
        },
        "IT": {
            "1": "1: IT_Student_1",
            "2": "2: IT_Student_2",
            "3": "3: IT_Student_3",
            "4": "4: IT_Student_4",
            "5": "5: IT_Student_5",
            "6": "6: IT_Student_6"
        }
    },
    "Subject_4": {
        "CE": {
            "1": "1: CE_Student_1",
            "2": "2: CE_Student_2",
            "3": "3: CE_Student_3",
            "4": "4: CE_Student_4",
            "5": "5: CE_Student_5",
            "6": "6: CE_Student_6"
        },
        "IT": {
            "1": "1: IT_Student_1",
            "2": "2: IT_Student_2",
            "3": "3: IT_Student_3",
            "4": "4: IT_Student_4",
            "5": "5: IT_Student_5",
            "6": "6: IT_Student_6"
        }
    }
};

function displayAttendanceSection() {
    var subject = document.getElementById("selectSubject").value;
    var attendanceSections = document.getElementById("attendanceSections");

    // Clear existing sections
    attendanceSections.innerHTML = "";

    // Show selected subject section
    if (subject && subjectData[subject]) {
        var ceStudents = subjectData[subject]["CE"];
        var itStudents = subjectData[subject]["IT"];

        var section = document.createElement("div");
        section.classList.add("subject-section");

        var html = `
        <label for="${subject}CEOption">Select option for CE:</label>
        <select id="${subject}CEOption">
            <option value="absent">Absent</option>
            <option value="present">Present</option>
        </select>
        <label for="${subject}CERollNos">Enter CE roll numbers (comma-separated):</label>
        <input type="text" id="${subject}CERollNos">
        <button onclick="checkCEAttendance('${subject}')">Check CE Attendance</button>
        <div id="${subject}CEOutput" class="output"></div>

        <label for="${subject}ITOption">Select option for IT:</label>
        <select id="${subject}ITOption">
            <option value="absent">Absent</option>
            <option value="present">Present</option>
        </select>
        <label for="${subject}ITRollNos">Enter IT roll numbers (comma-separated):</label>
        <input type="text" id="${subject}ITRollNos">
        <button onclick="checkITAttendance('${subject}')">Check IT Attendance</button>
        <div id="${subject}ITOutput" class="output"></div>
    `;

        section.innerHTML = html;
        attendanceSections.appendChild(section);
    }
}

function checkCEAttendance(subject) {
    var option = document.getElementById(subject + "CEOption").value;
    var rollNos = document.getElementById(subject + "CERollNos").value.split(',').map(rollNo => rollNo.trim());
    var output = document.getElementById(subject + "CEOutput");
    var absentNames = [];
    var presentNames = [];
    var allRollNos = Object.keys(subjectData[subject]["CE"]);

    if (option === "absent") {
        rollNos.forEach(rollNo => {
            if (subjectData[subject]["CE"][rollNo]) {
                absentNames.push(subjectData[subject]["CE"][rollNo]);
            }
        });
        output.innerHTML = "<strong>Absent students in " + subject + " CE:<br></strong> " + (absentNames.length > 0 ? absentNames.join("<br>") : "No absentees found");
    } else {
        allRollNos.forEach(rollNo => {
            if (!rollNos.includes(rollNo)) {
                presentNames.push(subjectData[subject]["CE"][rollNo]);
            }
        });
        output.innerHTML = "<strong>Present students in " + subject + " CE:<br></strong> " + (presentNames.length > 0 ? presentNames.join("<br>") : "No present students found");
    }
}

function checkITAttendance(subject) {
    var option = document.getElementById(subject + "ITOption").value;
    var rollNos = document.getElementById(subject + "ITRollNos").value.split(',').map(rollNo => rollNo.trim());
    var output = document.getElementById(subject + "ITOutput");
    var absentNames = [];
    var presentNames = [];
    var allRollNos = Object.keys(subjectData[subject]["IT"]);

    if (option === "absent") {
        rollNos.forEach(rollNo => {
            if (subjectData[subject]["IT"][rollNo]) {
                absentNames.push(subjectData[subject]["IT"][rollNo]);
            }
        });
        output.innerHTML = "<strong>Absent students in " + subject + " IT:<br></strong> " + (absentNames.length > 0 ? absentNames.join("<br>") : "No absentees found");
    } else {
        allRollNos.forEach(rollNo => {
            if (!rollNos.includes(rollNo)) {
                presentNames.push(subjectData[subject]["IT"][rollNo]);
            }
        });
        output.innerHTML = "<strong>Present students in " + subject + " IT:<br></strong> " + (presentNames.length > 0 ? presentNames.join("<br>") : "No present students found");
    }
}
