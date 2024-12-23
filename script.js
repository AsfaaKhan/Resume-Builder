var _a;
$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ""
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElements) {
            $(this).slideUp(deleteElements);
            setTimeout(function () {
                // CVgereate();
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});
//  Generate CV
(_a = document.getElementById('generateCV')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateCV);
function generateCV() {
    var _a;
    // Get form values
    var firstName = document.querySelector('.firstname').value;
    var lastName = document.querySelector('.lastname').value;
    var image = (_a = document.querySelector('.image').files) === null || _a === void 0 ? void 0 : _a[0];
    var designation = document.querySelector('.designation').value;
    var address = document.querySelector('.address').value;
    var email = document.querySelector('.email').value;
    var contactNo = document.querySelector('.contactno').value;
    var summary = document.querySelector('.summary').value;
    // Get Experience values
    var experiences = document.querySelectorAll('.cv-form-experience');
    var experienceList = [];
    experiences.forEach(function (expElement) {
        var title = expElement.querySelector('.experience-title').value;
        var company = expElement.querySelector('.experience-company').value;
        var location = expElement.querySelector('.experience-location').value;
        var startDate = expElement.querySelector('.experience-start-date').value;
        var endDate = expElement.querySelector('.experience-end-date').value;
        var description = expElement.querySelector('.experience-description').value;
        experienceList.push({ title: title, company: company, location: location, startDate: startDate, endDate: endDate, description: description });
    });
    // Get Education values
    var educations = document.querySelectorAll('.cv-form-education');
    var educationList = [];
    educations.forEach(function (eduElement) {
        var title = eduElement.querySelector('.education-title').value;
        var degree = eduElement.querySelector('.education-degree').value;
        var city = eduElement.querySelector('.education-city').value;
        var startDate = eduElement.querySelector('.education-start-date').value;
        var endDate = eduElement.querySelector('.education-end-date').value;
        var description = eduElement.querySelector('.education-description').value;
        educationList.push({ title: title, degree: degree, city: city, startDate: startDate, endDate: endDate, description: description });
    });
    // Get Skills values
    var skills = document.querySelectorAll('.cv-form-skill');
    var skillList = [];
    skills.forEach(function (skillElement) {
        var skill = skillElement.querySelector('.skills').value;
        skillList.push(skill);
    });
    // Update the CV section
    updateCVSection(firstName, lastName, image, designation, address, email, contactNo, summary, experienceList, educationList, skillList);
}
function updateCVSection(firstName, lastName, image, designation, address, email, contactNo, summary, experiences, educations, skills) {
    // Update Profile Section
    var profileFirstName = document.querySelector('.profile-firstName');
    var profileLastName = document.querySelector('.profile-lastName');
    var profileDesignation = document.querySelector('.title');
    var profileDescription = document.querySelector('.description');
    profileFirstName.textContent = firstName;
    profileLastName.textContent = lastName;
    profileDesignation.textContent = designation;
    profileDescription.textContent = summary;
    // Update Profile Image
    if (image) {
        var profileImage_1 = document.querySelector('.profile-img img');
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImage_1.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(image);
    }
    // Update Skills Section
    var skillsList = document.querySelector('.skills-list');
    skillsList.innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    // Update Education Section
    var educationSection = document.querySelector('.edu-items');
    educationSection.innerHTML = educations.map(function (edu) { return "\n        <div class=\"edu-items\">\n            <p class=\"item-preTitle\">".concat(edu.startDate, " - ").concat(edu.endDate, "</p>\n            <h4 class=\"item-title\">").concat(edu.title, "</h4>\n            <p class=\"item-subTitle\">").concat(edu.degree, " - ").concat(edu.city, "</p>\n            <p class= \"description\">").concat(edu.description, "</p>\n        </div>\n    "); }).join('');
    // Update Experience Section
    var experienceSection = document.querySelector('.exp-item');
    experienceSection.innerHTML = experiences.map(function (exp) { return "\n        <div class=\"exp-item\">\n            <p class=\"item-preTitle\">".concat(exp.startDate, " - ").concat(exp.endDate, "</p>\n            <p class=\"item-title\">").concat(exp.title, "</p>\n            <p class=\"item-subTitle\">").concat(exp.company, " - ").concat(exp.location, "</p>\n            <p class=\"description\">").concat(exp.description, "</p>\n        </div>\n    "); }).join('');
    // Update Contact Section
    var contactInfo = document.querySelector('.contact-info');
    contactInfo.innerHTML = "\n        <p class=\"description\">".concat(address, "</p>\n        <p class=\"description\">").concat(contactNo, "</p>\n        <p class=\"description\">").concat(email, "</p>\n    ");
}
//Print CV 
function printCV() {
    window.print();
}
