import friesImg from "./img/french-fries.jpg"
import bakedImg from "./img/baked-potato.jpg"
import mashImg from "./img/mash.jpg"
import frenchImg from "./img/dauphinoise.jpg"
import colcannonImg from "./img/colcannon.jpg"
import cottageImg from "./img/cottage-pie.jpg"

export default function (content){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("h2");
    header.textContent = `Menu`;

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    for (let i = 0; i < 6; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const menuImg = document.createElement("img");
        const menuHead = document.createElement("h3");
        const menuP = document.createElement("p");
        switch (i) {
            case 0:
                menuImg.src = friesImg;
                menuImg.alt = `Fries`;
                menuHead.textContent = `Fries`;
                menuP.textContent = `A true classic`;
                break;
            case 1:
                menuImg.src = bakedImg;
                menuImg.alt = `Baked Potato`;
                menuHead.textContent = `Baked Potato`;
                menuP.textContent = `Couldn't be simpler!`;
                break;
            case 2:
                menuImg.src = mashImg;
                menuImg.alt = `Mash`;
                menuHead.textContent = `Mash`;
                menuP.textContent = `Squish squish!`;
                break;
            case 3:
                menuImg.src = frenchImg;
                menuImg.alt = `Daupinoise Potatoes`;
                menuHead.textContent = `Daupinoise Potatoes`;
                menuP.textContent = `How fancy!`;
                break;
            case 4:
                menuImg.src = colcannonImg;
                menuImg.alt = `Colcannon`;
                menuHead.textContent = `Colcannon`;
                menuP.textContent = `All the way from Erin's Isle`;
                break;
            case 5:
                menuImg.src = cottageImg;
                menuImg.alt = `Cottage Pie`;
                menuHead.textContent = `Cottage Pie`;
                menuP.textContent = `A wholesome winter-warmer!`;
                break;
        }
        menuItem.appendChild(menuImg);
        menuItem.appendChild(menuHead);
        menuItem.appendChild(menuP);
        menuGrid.appendChild(menuItem);
    }

    wrapper.appendChild(header);
    wrapper.appendChild(menuGrid);
    content.appendChild(wrapper);
}

{/* <div class="wrapper">
    <h2>Menu</h2>
    <div class="menu-grid">
        <div class="menu-item">
            <img src="img/french-fries.jpg" alt="Fries">
            <h3>Fries</h3>
            <p>A true classic</p>
        </div>
        <div class="menu-item">
            <img src="img/baked-potato.jpg" alt="Baked Potato">
            <h3>Baked Potato</h3>
            <p>Couldn't be simpler!</p>
        </div>
        <div class="menu-item">
            <img src="img/mash.jpg" alt="Mashed Potato">
            <h3>Mash Potato</h3>
            <p>Squish squish!</p>
        </div>
        <div class="menu-item">
            <img src="img/dauphinoise.jpg" alt="Dauphinoise Potatoes">
            <h3>Dauphinoise Potatoes</h3>
            <p>How fancy!</p>
        </div>
        <div class="menu-item">
            <img src="img/colcannon.jpg" alt="Colcannon">
            <h3>Colcannon</h3>
            <p>All the way from Erin's Isle</p>
        </div>
        <div class="menu-item">
            <img src="img/cottage-pie.jpg" alt="Cottage Pie">
            <h3>Cottage Pie</h3>
            <p>A wholesome winter-warmer!</p>
        </div>
    </div>
</div> */}