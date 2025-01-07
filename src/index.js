import homeGen from "./home.js";
import menuGen from "./menu.js";
import contactGen from "./contact.js";
import "./styles.css";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");


function clearPage(){
    const currentWrapper = document.querySelector(".wrapper");
    currentWrapper.remove();
};


homeBtn.addEventListener("click", () => {
    clearPage()
    homeGen(content);
});

menuBtn.addEventListener("click", () => {
    clearPage();
    menuGen(content);
});

contactBtn.addEventListener("click", () => {
    clearPage();
    contactGen(content);
});


homeGen(content);