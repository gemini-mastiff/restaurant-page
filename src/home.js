import potatoPalaceImg from "./img/potato-palace.jpg";
import petyrPotatoImg from "./img/petyr-potato.jpg";

export default function(content){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("h2");
    header.textContent = `The Home of Potato Goodness!`;

    wrapper.appendChild(header)

    for (let i = 0; i < 2; i++){
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.classList.add("img1");
        const caption = document.createElement("figcaption");
        switch (i){
            case 0:
                p.textContent = `We're a simple family restaurant located in the siberian wilderness, far away from civilization. We dared to ask the question "Why isn't there any restaurants that serve exclusively potato-based products in the middle of nowhere?" and the rest is, as they say, history...`;
                img.src = potatoPalaceImg;
                img.alt = `Outside view of Potato Palace`;
                caption.textContent = `Home Sweet Home!`;
                break;
            case 1:
                p.textContent = `We have been proudly serving the various animals that break into our kitchen for 87 years! We've had a few bear maulings in our time, but as our founder, Petyr Potato, said "You can't make a mash without crushing a few spuds!"`;
                img.src = petyrPotatoImg;
                img.alt = `Petyr Potato`;
                caption.textContent = `Our Founder, Petyr Potato`;
                break;
        }
        wrapper.appendChild(p);
        wrapper.appendChild(img);
        wrapper.appendChild(caption);
    }

    content.appendChild(wrapper);
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