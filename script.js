/* =====================================================
   IYUNGA SECONDARY SCHOOL WEBSITE
   JAVASCRIPT FILE
===================================================== */


/* =====================================================
   1. TESTING JAVASCRIPT
===================================================== */

/*
   console.log() displays a message in the
   browser's Console.

   It is useful for checking whether
   JavaScript is working correctly.
*/

console.log("IYUNGA Secondary School website is working!");



/* =====================================================
   2. LEARN MORE BUTTON
===================================================== */

/*
   First, we find the Learn More button
   from our HTML.

   The HTML button has:

   id="learnMoreButton"

   getElementById() means:
   "Find the HTML element with this ID."
*/

const learnMoreButton =
    document.getElementById("learnMoreButton");


/*
   We use "if" to check whether the button
   actually exists on the current page.

   This prevents JavaScript from producing
   an error on pages where the button
   does not exist.
*/

if (learnMoreButton) {


    /*
       addEventListener() tells JavaScript
       to wait for something to happen.

       "click" means we are waiting for
       the user to click the button.
    */

    learnMoreButton.addEventListener("click", function () {


        /*
           When the button is clicked,
           the browser goes to the About page.

           window.location.href means:
           "Go to this webpage."
        */

        window.location.href = "pages/About.html";

    });

}



/* =====================================================
   3. MOBILE NAVIGATION MENU
===================================================== */

/*
   Our mobile menu has a button such as:

   ☰

   We first find that button.

   The HTML button should have:

   id="menuButton"
*/

const menuButton =
    document.getElementById("menuButton");


/*
   Now we find the navigation links.

   In our HTML we have:

   <div class="nav-links">

   querySelector() finds an HTML element
   using its CSS selector.

   ".nav-links" means:
   Find the element with class "nav-links".
*/

const navLinks =
    document.querySelector(".nav-links");



/* =====================================================
   4. CHECK THAT THE MENU ELEMENTS EXIST
===================================================== */

/*
   We check that BOTH the menu button
   and navigation links exist.

   && means "AND".

   So this means:

   If the menu button exists AND
   the navigation links exist,
   then run the code.
*/

if (menuButton && navLinks) {


    /*
       Wait for the user to click
       the mobile menu button.
    */

    menuButton.addEventListener("click", function () {


        /*
           classList allows JavaScript
           to work with CSS classes.

           toggle() does two things:

           If "active" is NOT there:
           → add "active"

           If "active" is already there:
           → remove "active"

           This allows us to open and close
           the navigation menu.
        */

        navLinks.classList.toggle("active");

    });

}



/* =====================================================
   5. CLOSE THE MOBILE MENU
      WHEN A LINK IS CLICKED
===================================================== */

/*
   querySelectorAll() finds ALL elements
   that match the selector.

   Here we find all navigation links:

   .nav-links a

   This means:
   "Find all <a> elements inside
   the .nav-links container."
*/

const navigationLinks =
    document.querySelectorAll(".nav-links a");


/*
   forEach() allows us to perform
   the same action on every navigation link.
*/

navigationLinks.forEach(function (link) {


    /*
       Wait for the user to click
       a navigation link.
    */

    link.addEventListener("click", function () {


        /*
           Remove the "active" class.

           This closes the mobile menu
           after the user selects a page.
        */

        navLinks.classList.remove("active");

    });

});



/* =====================================================
   6. SIMPLE WELCOME MESSAGE
===================================================== */

/*
   We can use an alert() to display
   a message to the visitor.

   IMPORTANT:
   We don't want this message to appear
   every time the page loads, because
   that can become annoying.

   So we will use a button for it later.

   Example:

   alert("Welcome to IYUNGA Secondary School!");

   alert() creates a small message box.
*/



/* =====================================================
   7. BACK TO TOP FUNCTION
===================================================== */

/*
   First, we create a button in HTML
   with:

   id="backToTop"

   JavaScript will find that button.
*/

const backToTop =
    document.getElementById("backToTop");


/*
   Check whether the button exists
   before using it.
*/

if (backToTop) {


    /*
       Wait for the user to click
       the Back to Top button.
    */

    backToTop.addEventListener("click", function () {


        /*
           window.scrollTo() moves the
           webpage to a specific position.

           top: 0
           means the very top of the page.

           behavior: "smooth"
           makes the movement smooth
           instead of jumping immediately.
        */

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =====================================================
   8. SIMPLE SCROLL ANIMATION
===================================================== */

/*
   We find all elements that have
   the class:

   .section

   These are the main sections
   of our school website.
*/

const sections =
    document.querySelectorAll(".section");


/*
   forEach() allows us to work with
   every section on the page.
*/

sections.forEach(function (section) {


    /*
       When the page loads, we add
       the class "hidden-section".

       CSS can then make the section
       slightly hidden.
    */

    section.classList.add("hidden-section");

});



/* =====================================================
   9. DETECT PAGE SCROLLING
===================================================== */

/*
   "scroll" is an event.

   It happens whenever the visitor
   scrolls the webpage.
*/

window.addEventListener("scroll", function () {


    /*
       window.scrollY tells us how far
       the user has scrolled down.

       For example:

       0    = top of page
       100  = 100 pixels down
       500  = 500 pixels down
    */

    const scrollPosition =
        window.scrollY;


    /*
       If the visitor scrolls more than
       300 pixels, show the Back to Top
       button.

       This only works if the button
       exists.
    */

    if (backToTop) {

        if (scrollPosition > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

});