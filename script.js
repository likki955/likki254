function generatecv() {
    var name = document.getElementById('namefield').value;
    var email = document.getElementById('Email').value;
    var contact = document.getElementById('contactfield').value;
    var address = document.getElementById('addressfield').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('educationfield').value;
    var skills = document.getElementById('skillsfield').value;
    var projects = document.getElementById('projectsfield').value;
    var certifications = document.getElementById('wefield').value;

    document.getElementById('nameT1').innerText = name;
    document.getElementById('nameT2').innerText = name;
    document.getElementById('emailT').innerText = "Email: " + email;
    document.getElementById('contactT').innerText = "Phone: " + contact;
    document.getElementById('addressT').innerText = "Address: " + address;
    document.getElementById('dobT').innerText = "Date of Birth: " + dob;

    var educationList = education.split('\n');
    var educationHtml = "";
    for (var i = 0; i < educationList.length; i++) {
        educationHtml += "<li>" + educationList[i] + "</li>";
    }
    document.getElementById('EducationT').innerHTML = educationHtml;

    var skillsList = skills.split('\n');
    var skillsHtml = "";
    for (var i = 0; i < skillsList.length; i++) {
        skillsHtml += "<li>" + skillsList[i] + "</li>";
    }
    document.getElementById('skillsT').innerHTML = skillsHtml;

    var projectsList = projects.split('\n');
    var projectsHtml = "";
    for (var i = 0; i < projectsList.length; i++) {
        projectsHtml += "<li>" + projectsList[i] + "</li>";
    }
    document.getElementById('projectsT').innerHTML = projectsHtml;

    var certificationsList = certifications.split('\n');
    var certificationsHtml = "";
    for (var i = 0; i < certificationsList.length; i++) {
        certificationsHtml += "<li>" + certificationsList[i] + "</li>";
    }
    document.getElementById('certifications').innerHTML = certificationsHtml;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printcv() {
    window.print();
}
