
// DATA STRUCTURE FOR CHALLENGE (4=ARRAYS; 5=STRINGS/NUMBERS)
// CHALLENGE 1---PRINT ALL INFO TO THE DOM
// CHALLENGE 2 NEED TO HAVE AT LEAST 9 FUNCTIONS
let elizabethSanger = {
    congressionalDistrict: 5, // P TAG
    statements: [
        { statement: "Pie for everyone", category: "Jobs" },
        { statement: "No taxes on pie", category: "Taxes" },
        { statement: "No working on friday", category: "Jobs" }
    ],
    donationFormUrl: 'www.google.com',  
    events: [
        { date: '08/27/2018', title: "Zoe's birthday", description: "eat all the pie at the party" },
        { date: '08/28/2018', title: "Arrays", description: "all the looping" },
        { date: '09/4/2018', title: "Some important event", description: "SUPER important" },
        { date: '09/4/2018', title: "Running", description: "from the police" },
        { date: '03/14/2019', title: "Pi Day", description: "Eat it all???" }
    ],
    volunteers: [
        {
            name: 'Callan',
            address: '500 interstate blvd S',
            email: 'callan@yomamma.com',
            phone: '1234567890',
            availability: '9-5',
            activities: 'phone calls only'
        },
        {
            name: 'Lauren',
            address: '1 main street',
            email: 'lauren@comcast.net',
            phone: '1134567890',
            availability: 'never',
            activities: 'collecting money'
        },
        {
            name: 'Bernard',
            address: '1 Bernard Way',
            email: 'Bernard@thebear.net',
            phone: '1134567890',
            availability: 'all day',
            activities: 'everything'
        }
    ],
    biography: "I'm so cool!  please elect me", 
    images: [
        {
            imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
            description: "The Crew",
            type: "constituents"
        },
        {
            imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
            description: "Elizabeth at the fair",
            type: "headshot"
        },
        {
            imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
            description: "Elizabeth and her homies",
            type: "constituents"
        },
        {
            imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
            description: "All the people of district 5",
            type: "constituents"
        },
    ],
    missionStatement: "Do good stuff",  
    voterRegistrationUrl: 'www.google.com'  
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;  
};

const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
    printToDom(newString, 'voterRegistration');
};

const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate Here</a>`;
    printToDom(newString, 'donationForm')
};

const congressionalDistrictStringBuilder = () => {
    const newString = `<h3 class="congressionalTitle">Congressional District: ${elizabethSanger.congressionalDistrict}</h3>`;
    printToDom(newString, 'congressionalDistrict');
};


const biographyStringBuilder = () => {
    const newString = `<p>Biography: ${elizabethSanger.biography}</p>`;
    printToDom(newString, 'biography');
};


const missionStatementStringBuilder = () => {
    const newString = `<p>Mission Statement: ${elizabethSanger.missionStatement}</p>`;
    printToDom(newString, 'missionStatement');
};


const statementsStringBuilder = () => {
    let newString = '';                               
    for(let i = 0; i < elizabethSanger.statements.length; i++) {
        newString +=`<div class="statement">`;
        newString +=    `<h4>${elizabethSanger.statements[i].category}: ${elizabethSanger.statements[i].statement}</h4>`;
        newString +=`</div>`;
    }
    printToDom(newString, 'statements');
};

const eventsStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.events.length; i++) {
        newString +=`<div class="events">`;
        newString +=    `<h4 class="eventsDate">Date: ${elizabethSanger.events[i].date}</h4>`;
        newString +=    `<p class="eventsTitle">Title: ${elizabethSanger.events[i].title}</p>`;
        newString +=    `<p class="eventsDescription">Description: ${elizabethSanger.events[i].description}</p>`;
        newString +=`</div>`;
    }
    printToDom(newString, 'events');
};

const volunteersStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
        newString += `<div class="volunteers">`;
        newString +=    `<h4 class="volunteers-name">${elizabethSanger.volunteers[i].name}</h4>`;
        newString +=    `<p>Address: ${elizabethSanger.volunteers[i].address}</p>`;
        newString +=    `<p>Email: ${elizabethSanger.volunteers[i].email}</p>`;
        newString +=    `<p>Phone: ${elizabethSanger.volunteers[i].phone}</p>`;
        newString +=    `<p>Availability: ${elizabethSanger.volunteers[i].availability}</p>`;
        newString +=    `<p>Activities: ${elizabethSanger.volunteers[i].activities}</p>`;
        newString += `</div>`;
    }
    printToDom(newString, 'volunteers');
};

const imagesStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < elizabethSanger.images.length; i++) {
        newString += `<div class="images">`;
        newString +=    `<img src="${elizabethSanger.images[i].imageUrl}" alt="image"></img>`;
        newString +=    `<h4>${elizabethSanger.images[i].type}</h4>`;
        newString +=    `<p>${elizabethSanger.images[i].description}</p>`;
        newString += `</div>`;
    }
    printToDom(newString, 'images');
};




voterRegistrationStringBuilder(); 
donationFormStringBuilder();
congressionalDistrictStringBuilder();
biographyStringBuilder();
missionStatementStringBuilder();
statementsStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
imagesStringBuilder();



const updateVoterRegistrationStringBuilder = (newUrl) => {
    elizabethSanger.voterRegistrationUrl = newUrl;
    voterRegistrationStringBuilder();
};


const updateDonationFormStringBuilder = (newUrl) => {
    elizabethSanger.donationFormUrl = newUrl;
    donationFormStringBuilder();
};

const updateCongressionalDistrictStringBuilder = (newDistrict) => {
    elizabethSanger.congressionalDistrict = newDistrict;
    congressionalDistrictStringBuilder();
};

const updateBiographyStringBuilder = (updateString) => {
    elizabethSanger.biography = updateString;
    biographyStringBuilder();
};


const updateMissionStatementStringBuilder = (updateString) => {
    elizabethSanger.missionStatement = updateString;
    missionStatementStringBuilder();
};

const addStatements = (newStatement, newCategory) => {
    let newObject = {statement: newStatement, category: newCategory};
    elizabethSanger.statements.push(newObject);
    statementsStringBuilder();
};


const removeFirstStatement = (removeStatement, removeCategory) => {
    let removeObject = {statement: removeStatement, category: removeCategory};
    elizabethSanger.statements.shift(removeObject);
    statementsStringBuilder();
};


const addDate = (newDate, newTitle, newDescription) => {
    let newEvent = {date: newDate, title: newTitle, description: newDescription};
    elizabethSanger.events.unshift(newEvent);
    eventsStringBuilder();
};

const addVolunteer = (newName, newAddress, newEmail, newPhone, newAvail, newActivities) => {
    let newVolunteer = {name: newName, address: newAddress, email: newEmail, phone: newPhone, availability: newAvail, activities: newActivities};
    elizabethSanger.volunteers.push(newVolunteer);
    volunteersStringBuilder();
};


const addImage = (newImage, newImageDesc, newType) => {
    let newImageCard = {imageUrl: newImage, description: newImageDesc, type: newType};
    elizabethSanger.images.unshift(newImageCard);
    imagesStringBuilder();
};


const removeLastImage = (removeImage, removeDesc, removeType) => {
    let removeImageCard = {imageUrl: removeImage, description: removeDesc, type: removeType};
    elizabethSanger.images.pop(removeImageCard);
    imagesStringBuilder();

};

const editValue = (functionName, property, subProperty, newVal, index) => {
    let newVal = elizabethSanger[property][index][subProperty];
   functionName();
};


const removeItem = (functionName, property, index) => {
    let remove = elizabethSanger[property][index];
    functionName.removeChild(remove);
};

updateVoterRegistrationStringBuilder();
updateDonationFormStringBuilder();
updateCongressionalDistrictStringBuilder();
updateBiographyStringBuilder();
updateMissionStatementStringBuilder();
addStatements();
removeFirstStatement();
addDate();
addVolunteer();
addImage();
removeLastImage();




