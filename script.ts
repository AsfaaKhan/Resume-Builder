
//form reperater
declare var $: any;
$(document).ready(function (): void {
    ($('.repeater') as any).repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ""
        },
        show: function (this: HTMLElement) {
            $(this).slideDown();
        },
        hide: function (deleteElements: () => void) {
            $(this).slideUp(deleteElements)
            setTimeout(() => {
                // CVgereate();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})


// Generate Resume 





// function previewImage() {
//     const imageInput = document.querySelector('.image') as HTMLInputElement;
//     const imageDisplay = document.getElementById('image-display') as HTMLImageElement;
//     if (imageInput.files && imageInput.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e: any) {
//             imageDisplay.src = e.target.result as string;
//         }
//         reader.readAsDataURL(imageInput.files[0]);
//     }
// }




//  Generate CV
document.getElementById('generateCV')?.addEventListener('click', generateCV);

function generateCV() {
    // Get form values
    const firstName = (document.querySelector('.firstname') as HTMLInputElement).value;
    const lastName = (document.querySelector('.lastname') as HTMLInputElement).value;
    const image = (document.querySelector('.image') as HTMLInputElement).files?.[0];
    const designation = (document.querySelector('.designation') as HTMLInputElement).value;
    const address = (document.querySelector('.address') as HTMLInputElement).value;
    const email = (document.querySelector('.email') as HTMLInputElement).value;
    const contactNo = (document.querySelector('.contactno') as HTMLInputElement).value;
    const linkedin = (document.querySelector('.linkdlin') as HTMLInputElement).value;
    const summary = (document.querySelector('.summary') as HTMLInputElement).value;


    // Get Experience values
    const experiences = document.querySelectorAll('.cv-form-experience');
    const experienceList: any[] = [];
    experiences.forEach((expElement: Element) => {
        const title = (expElement.querySelector('.experience-title') as HTMLInputElement).value;
        const company = (expElement.querySelector('.experience-company') as HTMLInputElement).value;
        const location = (expElement.querySelector('.experience-location') as HTMLInputElement).value;
        const startDate = (expElement.querySelector('.experience-start-date') as HTMLInputElement).value;
        const endDate = (expElement.querySelector('.experience-end-date') as HTMLInputElement).value;
        const description = (expElement.querySelector('.experience-description') as HTMLInputElement).value;

        experienceList.push({ title, company, location, startDate, endDate, description });
    });

    // Get Education values
    const educations = document.querySelectorAll('.cv-form-education');
    const educationList: any[] = [];
    educations.forEach((eduElement: Element) => {
        const title = (eduElement.querySelector('.education-title') as HTMLInputElement).value;
        const degree = (eduElement.querySelector('.education-degree') as HTMLInputElement).value;
        const city = (eduElement.querySelector('.education-city') as HTMLInputElement).value;
        const startDate = (eduElement.querySelector('.education-start-date') as HTMLInputElement).value;
        const endDate = (eduElement.querySelector('.education-end-date') as HTMLInputElement).value;
        const description = (eduElement.querySelector('.education-description') as HTMLInputElement).value;

        educationList.push({ title, degree, city, startDate, endDate, description });
    });

    // Get Skills values
    const skills = document.querySelectorAll('.cv-form-skill');
    const skillList: string[] = [];
    skills.forEach((skillElement: Element) => {
        const skill = (skillElement.querySelector('.skills') as HTMLInputElement).value;
        skillList.push(skill);
    });

    // Update the CV section
    updateCVSection(firstName, lastName, image, designation, address, email, contactNo, linkedin, summary, experienceList, educationList, skillList);
}

function updateCVSection(firstName: string, lastName: string, image: File | undefined, designation: string, address: string, email: string, contactNo: string, linkedin: string, summary: string, experiences: any[], educations: any[], skills: string[]) {
    // Update Profile Section
    const profileFirstName = document.querySelector('.profile-firstName') as HTMLElement;
    const profileLastName = document.querySelector('.profile-lastName') as HTMLElement;
    const profileDesignation = document.querySelector('.title') as HTMLElement;
    const profileDescription = document.querySelector('.description') as HTMLElement;
    profileFirstName.textContent = firstName;
    profileLastName.textContent = lastName;
    profileDesignation.textContent = designation;
    profileDescription.textContent = summary;

    // Update Profile Image
    if (image) {
        const profileImage = document.querySelector('.profile-img img') as HTMLImageElement;
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target?.result as string;
        };
        reader.readAsDataURL(image);
    }

    // Update Skills Section
    const skillsList = document.querySelector('.skills-list') as HTMLElement;
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');

    // Update Education Section
    const educationSection = document.querySelector('.edu-items') as HTMLElement;
    educationSection.innerHTML = educations.map(edu => `
        <div class="edu-items">
            <p class="item-preTitle">${edu.startDate} - ${edu.endDate}</p>
            <h4 class="item-title">${edu.title}</h4>
            <p class="item-subTitle">${edu.degree} - ${edu.city}</p>
        </div>
    `).join('');

    // Update Experience Section
    const experienceSection = document.querySelector('.exp-item') as HTMLElement;
    experienceSection.innerHTML = experiences.map(exp => `
        <div class="exp-item">
            <p class="item-preTitle">${exp.startDate} - ${exp.endDate}</p>
            <p class="item-title">${exp.title}</p>
            <p class="item-subTitle">${exp.company} - ${exp.location}</p>
            <p class="description">${exp.description}</p>
        </div>
    `).join('');

    // Update Contact Section
    const contactInfo = document.querySelector('.contact-info') as HTMLElement;
    contactInfo.innerHTML = `
        <p class="description">${address}</p>
        <p class="description">${contactNo}</p>
        <p class="description">${email}</p>
    `;
}





//Print CV 
function printCV(){
    window.print();
}






