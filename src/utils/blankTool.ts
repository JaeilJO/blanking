export default class Blank {
  button: null;
  state: boolean;
  static get isInline() {
    return true;
  }

  constructor() {
    this.button = null;
    this.state = false;
  }

  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.textContent = "M";

    return this.button;
  }

  surround(range) {
    if (this.state) {
      return;
    }

    const selectedText = range.extractContents();

    // Create MARK element

    const button = document.createElement("button");

    let button_status = true;

    // Append to the MARK element selected TextNode
    button.appendChild(selectedText);

    button.style.padding = "0.2em";
    button.style.fontSize = "1.6rem";
    button.style.border = "2px dashed #2C5695";

    button.style.borderRadius = "4px";
    button.style.marginLeft = "0.2em";
    button.style.marginRight = "0.2em";
    button.style.textAlign = "left";

    button.addEventListener("click", (e) => {
      if (button_status) {
        button.style.border = "2px dashed #2C5695";
        button.style.borderRadius = "4px";
        button_status = false;
      } else {
        button.style.border = "none";
        button.style.borderBottom = "2px dashed #2C5695";
        button.style.borderRadius = "0px";

        button_status = true;
      }
    });

    button.addEventListener("mouseover", (e) => {
      button.style.backgroundColor = "#3867AE";
      button.style.color = "#3867AE";
    });

    button.addEventListener("mouseout", (e) => {
      button.style.backgroundColor = "white";
      button.style.color = "white";
    });

    // Insert new element
    range.insertNode(button);
  }

  checkState(selection) {
    const text = selection.anchorNode;

    if (!text) {
      return;
    }

    const anchorElement = text instanceof Element ? text : text.parentElement;

    this.state = !!anchorElement.closest("MARK");
  }
}
