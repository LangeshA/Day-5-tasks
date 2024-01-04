var resume = {
    "name": "Langesh",
    "email": "langesh@gmail.com",
    "phone": "9514432911",
    "age": "22",
    "city": "Chennai",
    "summary": "Upcoming developer",
    "education": "BCA",
    "college": "Vels University",
    "experience": "Fresher",
    "skills": [
        "JavaScript",
        "Python",
        "HTML/CSS",
        "React",
        "Node.js"
    ],
    "languages": "English",
    "certifications": [
        "MERN stack development in GUVI"
    ]
};
// a)For loop:
for (let key in resume) {
    if (Array.isArray(resume[key])) {
        console.log(`${key}:`);
        for (let i = 0; i < resume[key].length; i++) {
            console.log(`- ${resume[key][i]}`);
        }
    } else {
        console.log(`${key}: ${resume[key]}`);
    }
}

//b) For each:

Object.entries(resume).forEach(([key, value]) => {
    if (Array.isArray(value)) {
        console.log(`${key}:`);
        value.forEach(item => console.log(`- ${item}`));
    } else {
        console.log(`${key}: ${value}`);
    }
});

// c) For of:

for (let key in resume) {
    if (Array.isArray(resume[key])) {
        console.log(`${key}:`);
        for (let item of resume[key]) {
            console.log(`- ${item}`);
        }
    } else {
        console.log(`${key}: ${resume[key]}`);
    }
}

// d) For in:

for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
}

// Output:
// name: Langesh
// email: langesh@gmail.com
// phone: 9514432911
// age: 22
// city: Chennai
// summary: Upcoming developer
// education: BCA
// college: Vels University
// experience: Fresher
// skills:
// - JavaScript
// - Python
// - HTML/CSS
// - React
// - Node.js
// languages: English
// certifications:
// - MERN stack development in GUVI