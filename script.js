(function (){
    "use strict";

    // get the list items in an array
    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    // loop through the list items when clicked
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', selectTab);
    }

    function selectTab(event) {
        event.preventDefault();
        // remove the class attribute for all the list items
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].removeAttribute('class');
        }

        // add a class (active) for the clicked list item 
        event.target.className = 'active';

        // get the href attribute of the clicked list item and give it a variable name
        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);

        // target the content with a class - visible and then add another class - visuallyvisible
        const oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyhidden';
        // add an event listener to know when the transition is over.
        // add a callback function, add a class name of hidden to the OldContent
        // add a class name of visible visuallyhidden to the content of the clicked list item 
        oldContent.addEventListener('transitionend', function () {
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';
            // remove the class name - visuallyhidden using a timer
            setTimeout(function () {
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {capture: false, once: true, passive: false});
    }
})();