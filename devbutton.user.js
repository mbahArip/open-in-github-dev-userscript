// ==UserScript==
// @name         Github Dev Button
// @namespace    https://www.github.com/mbaharip
// @version      1.0
// @description  Add dev button on repository.
// @author       mbahArip
// @match        https://github.com/*/*
// @icon         https://github.githubassets.com/favicons/favicon-dark.png
// @grant        none
// ==/UserScript==

/*
function addButton(){
    window.addEventListener('load', ()=>{
        let openDev = document.createElement('a');
        openDev.className = 'btn-primary btn ml-2';
        openDev.href = window.location.href.replace('github.com', 'github.dev');
        openDev.innerText = 'Open dev';

        document.querySelector('.file-navigation').append(openDev);
    })
}

(function() {
    'use strict';
    addButton();
})();
*/
function addButton(){window.addEventListener("load",(()=>{let e=document.createElement("a");e.className="btn-primary btn ml-2",e.href=window.location.href.replace("github.com","github.dev"),e.innerText="Open in Github Dev",document.querySelector(".file-navigation").append(e)}))}!function(){"use strict";addButton()}();
