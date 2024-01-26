import { InlineTool } from '@editorjs/editorjs';
import './blanktoolstyle.css';

import { v4 as uuidv4 } from 'uuid';

export default class Blank implements InlineTool {
    status: boolean;
    button: HTMLButtonElement | null;

    class: string;
    block_text: Node | null;

    api: any;

    static get isInline() {
        return true;
    }

    static get shortcut() {
        return 'CMD+H';
    }
    static get title() {
        return 'Blank';
    }

    static get sanitize() {
        return {
            input: {
                type: true,
                id: true,
                class: 'blank_button',
            },
            label: {
                class: 'blank_style',
                contenteditable: () => true,
                htmlFor: () => true,
            },
            text: true,
        };
    }

    constructor() {
        this.button = null;
        this.status = false;

        this.class = 'blank_style';
        this.block_text = null;
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer-square-dashed"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="m12 12 4 10 1.7-4.3L22 16Z"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h2"/><path d="M14 3h1"/><path d="M3 9v1"/><path d="M21 9v2"/><path d="M3 14v1"/></svg>`;
        return this.button;
    }

    surround(range: Range) {
        const uuid = uuidv4();
        const button = this.createButton(uuid);
        const label = this.createLabel(uuid);

        const clone = range.cloneRange();
        const cloneContents = clone.cloneContents().childNodes;

        const HtmlIncludeStatus = this.checkHtmlElementIsInclude(cloneContents);

        if (HtmlIncludeStatus) {
            return;
        }

        const text = range.extractContents();

        this.block_text = text;

        label.appendChild(text);
        range.insertNode(button);
        range.insertNode(label);
    }

    createButton(uuid: string) {
        const button = document.createElement('input');
        button.type = 'checkbox';
        button.id = uuid;
        this.addCssClass(button, 'blank_button');
        return button;
    }

    createLabel(uuid: string) {
        const label = document.createElement('label');
        label.htmlFor = uuid;
        label.contentEditable = 'false';
        this.addCssClass(label, this.class);

        return label;
    }

    // Check Html Element Include
    private checkHtmlElementIsInclude(nodes: NodeListOf<ChildNode>) {
        let noChange = false;
        nodes.forEach((node) => {
            if (node instanceof HTMLElement) {
                noChange = true;
            }
        });

        return noChange;
    }

    checkState() {
        return false;
    }

    // Add CSS class
    private addCssClass(element: HTMLElement, className: string) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }

    // Remove CSS class
    private removeCssClass(element: HTMLElement, className: string) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }
}
