export default function (content){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("h2");
    header.textContent = `Contact`;

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");

    for (let i = 0; i < 3; i++) {
        const line = document.createElement("div");
        const p = document.createElement("p")
        const span = document.createElement("span");

        switch (i) {
            case 0:
                span.textContent = `Tel:`;
                p.textContent = ` 000 111 222`;
                break;
            case 1:
                span.textContent = `Email:`;
                p.textContent = ` potato.palace@nomail.ru`;
                break;
            case 2:
                span.textContent = `Address:`;
                p.textContent = ` Hidden within the Siberian Wilderness`;
                break;
        }

        line.appendChild(span);
        line.appendChild(p);
        contactWrapper.appendChild(line);
    }

    wrapper.appendChild(header);
    wrapper.appendChild(contactWrapper);
    content.appendChild(wrapper);
}

{/* <div class="wrapper">
        <h2>Contact</h2>
        <div class="contact-wrapper">
            <div>
                <span>Tel:</span>
                <p>000 111 222</p>
            </div>
            <div>
                <span>Email:</span>
                <p>potato.palace@nomail.ru</p>
            </div>
            <div>
                <span>Address:</span>
                <p>Hidden within the Siberian Wilderness</p>
            </div>
        </div>
    </div> */}