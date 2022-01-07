class Header extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = this.createWrapper();
    const container = this.createContainer();
    const figure = this.createImage();
    const lists = this.createLists();
    const buttons = this.createButton();
    const style = this.styles();

    container.appendChild(figure);
    lists.map((list) => container.appendChild(list));

    wrapper.appendChild(container);
    wrapper.appendChild(buttons);
    wrapper.appendChild(style);
    return shadow.appendChild(wrapper);
  }

  createWrapper() {
    const wrapper = document.createElement("header");

    return wrapper;
  }

  createContainer() {
    const ul = document.createElement("ul");

    return ul;
  }

  createButton() {
    const buttonsContent = ["Log-in", "Sign-up"];
    const div = document.createElement("div");
    div.className = "buttonsContainer";

    const buttons = (_, index) => {
      const button = document.createElement("button");
      button.textContent = buttonsContent[index];

      return button;
    };

    const buttonsArray = Array.from({ length: 2 }, buttons);
    buttonsArray.map((button) => div.appendChild(button));
    return div;
  }

  createImage() {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = "/assets/icon.svg";
    image.alt = "Logomarca do site";

    figure.appendChild(image);
    return figure;
  }

  createLists() {
    const listsName = ["Features", "Solutions", "Resorces", "Pricing"];
    const lists = (_, index) => {
      const list = document.createElement("li");
      list.innerHTML = listsName[index];

      return list;
    };

    return Array.from({ length: 4 }, lists);
  }

  styles() {
    const style = document.createElement("style");

    style.innerHTML = `
      * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
      }

      header {
        width: 100%;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 3rem;
      }

      header figure img {
        width: 30px;
        height: 30px;
      }

      ul {
        display: flex;
        align-items: center;

        gap: 0 1rem;
      }

      button {
        cursor: pointer;
      }
      
      ul {
        list-style: none;
      }
      
      .buttonsContainer button:first-child {
        background: transparent;
        margin-right: 7px;

        color: #fff;
        padding: 4px;
      }

      .buttonsContainer button:last-child {
        border: 1px solid green;

        background: #000;
        color: #fff;
        padding: 4px;
      }

    `;

    return style;
  }
}

customElements.define("header-component", Header);
