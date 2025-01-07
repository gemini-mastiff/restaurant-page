import homeGen from "./home.js";
import menuGen from "./menu.js";
import contactGen from "./contact.js";
import "./styles.css";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");


function clearPage(){
    const activeBtn = document.querySelector(".active");
    activeBtn.classList.remove("active");

    const currentWrapper = document.querySelector(".wrapper");
    currentWrapper.remove();
};


homeBtn.addEventListener("click", () => {
    clearPage();
    homeBtn.classList.add("active");
    homeGen(content);
});

menuBtn.addEventListener("click", () => {
    clearPage();
    menuBtn.classList.add("active");
    menuGen(content);
});

contactBtn.addEventListener("click", () => {
    clearPage();
    contactBtn.classList.add("active");
    contactGen(content);
});


window.addEventListener("load", () => {
    homeBtn.classList.add("active");
    homeGen(content);
})