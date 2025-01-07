import homeGen from "./home.js"
import "./styles.css";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");

function clearPage(){
    const currentWrapper = document.querySelector(".wrapper");
    currentWrapper.remove()
}

homeGen(content);

homeBtn.addEventListener("click", ()  => {
    console.log("HOME TEST");
    clearPage()
    homeGen(content);
});

menuBtn.addEventListener("click", ()  => {
    console.log("MENU TEST")
});

contactBtn.addEventListener("click", ()  => {
    console.log("CONTACT TEST")
});