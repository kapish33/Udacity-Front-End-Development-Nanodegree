/**

 * 

 * Manipulating the DOM exercise.

 * Exercise programmatically builds navigation,

 * scrolls to anchors from navigation,

 * and highlights section in viewport upon scrolling.

 * 

 * Dependencies: None

 * 

 * JS Version: ES2015/ES6

 * 

 * JS Standard: ESlint

 * 

*/



/**

 * Define Global Variables

 * 

*/

// Navigation For Global Variable
const navigation = document.getElementById('navbar__list');
// Sections Of Global Variable
const sections = document.querySelectorAll('section');



/**

 * End Global Variables

 * Start Helper Functions

 * 

*/


const navBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;


};

navBuilder();


// Add class 'active' to section when near top of viewport

// To Get The Largest Value That's Less than  or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// removeing active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding  active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: grey;";
    };
};

//implementation of the Actual Function

const section = () => {
    sections.forEach(section => {
        const newvar = offset(section);

        inviewport = () => newvar < 150 && newvar >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,section);

// Scroll to anchor ID using scroll TO event

const scroll = () => {

    const Klinks = document.querySelectorAll('.navbar__menu a');
    Klinks.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scroll();

/**

 * End Helper Functions

 * Begin Main Functions

 * 

*/



// build the nav





// Add class 'active' to section when near top of viewport





// Scroll to anchor ID using scrollTO event





/**

 * End Main Functions

 * Begin Events

 * 

*/
// Build menu 
// Scroll to section on link click
// Set sections as active
