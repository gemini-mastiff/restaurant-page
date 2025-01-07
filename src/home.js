import potatoPalaceImg from "./img/potato-palace.jpg";
import petyrPotatoImg from "./img/petyr-potato.jpg";

export default function homeGen(content){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("h2");
    header.textContent = `The Home of Potato Goodness!`;

    const p1 = document.createElement("p");
    p1.textContent = `We're a simple family restaurant located in the siberian wilderness, far away from civilization. We dared to ask the question "Why isn't there any restaurants that serve exclusively potato-based products in the middle of nowhere?" and the rest is, as they say, history...`;

    const img1 = document.createElement("img");
    img1.classList.add("img1");
    img1.src = potatoPalaceImg;
    img1.alt = "Outside view of Potato Palace";

    const caption1 = document.createElement("figcaption");
    caption1.textContent = `Home Sweet Home!`;

    const p2 = document.createElement("p");
    p2.textContent = `We have been proudly serving the various animals that break into our kitchen for 87 years! We've had a few bear maulings in our time, but as our founder, Petyr Potato, said "You can't make a mash without crushing a few spuds!"`;

    const img2 = document.createElement("img");
    img2.classList.add("img1");
    img2.src = petyrPotatoImg
    img2.alt = "Petyr Potato"

    const caption2 = document.createElement("figcaption");
    caption2.textContent = `Our Founder, Petyr Potato`;

    wrapper.appendChild(header);
    wrapper.appendChild(p1);
    wrapper.appendChild(img1);
    wrapper.appendChild(caption1);
    wrapper.appendChild(p2);
    wrapper.appendChild(img2);
    wrapper.appendChild(caption2);
    content.appendChild(wrapper)
}

{/* <div class="wrapper">
        <h2>The Home of Potato Goodness!</h2>
        <p>We're a simple family restaurant located in the siberian wilderness, far away from civilization. We dared to ask the question "Why isn't there any restaurants that serve exclusively potato-based products in the middle of nowhere?" and the rest is, as they say, history...</p>
        <img class="img1" src="img/potato-palace.jpg" alt="Outside view of Potato Palace">
        <figcaption>Home Sweet Home!</figcaption>
        <p>We have been proudly serving the various animals that break into our kitchen for 87 years! We've had a few bear maulings in our time, but as our founder, Petyr Potato, said "You can't make a mash without crushing a few spuds!"</p>
        <img class="img1" src="img/petyr-potato.jpg" alt="Petyr Potato">
        <figcaption>Our Founder, Petyr Potato</figcaption>
    </div> */}