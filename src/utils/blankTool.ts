export default class Blank {
    button: any;
    state: boolean;

    //Inline tool 설정
    static get isInline() {
        return true;
    }

    // Tool 이름설정
    constructor() {
        this.button;
        this.state = false;
    }

    //button의 Create UI설정
    render() {
        this.button = document.createElement('button');
        this.button.type = 'blank';
        this.button.textContent = 'Blank';

        return this.button;
    }

    //선택된 범위에서의 동작 설정
    //range: 선택된 범위가 fragment안에 들어있음
    surround(range: Range) {
        if (this.state) {
            return;
        }

        let button_status = false;

        const selectedText = range.extractContents();

        const span = document.createElement('span');
        const button = document.createElement('button');
        const text = document.createElement('span');

        text.appendChild(selectedText);
        span.appendChild(button);
        span.appendChild(text);

        span.style.position = 'relative';
        span.style.padding = '2px 1px';
        span.style.margin = '3px';
        span.style.whiteSpace = 'nowrap';

        button.style.width = '100%';
        button.style.height = '100%';
        button.style.position = 'absolute';
        button.style.top = '0';
        button.style.backgroundColor = '#FBFBFB';
        button.style.zIndex = '1';
        button.style.border = '2px dashed #2C5695';
        button.style.borderRadius = '4px';
        button.style.whiteSpace = 'nowrap';
        button.style.cursor = 'pointer';

        text.style.position = 'relative';
        text.style.zIndex = '0';

        button.addEventListener('click', () => {
            if (!button_status) {
                button.style.backgroundColor = '#FBFBFB';
                button.style.borderRadius = '4px';
                button.style.borderBottom = 'none';
                button.style.border = '2px dashed #2C5695';
                button_status = true;
            } else {
                button.style.backgroundColor = 'transparent';
                button.style.border = '0';
                button.style.borderBottom = '3px dashed #2C5695';
                button.style.borderRadius = '0';
                button.style.bottom = '-2px';
                button_status = false;
            }
        });

        button.addEventListener('mouseover', () => {
            button.style.borderColor = '#E2E2E2';
        });

        button.addEventListener('mouseleave', () => {
            button.style.borderColor = '#2C5695';
        });

        range.insertNode(span);
    }

    //선택할때 선택할 수 있는 UI가 열리는데 그때 호출되는 메서드
    //selection: 현재 선택된 fragment
    checkState(selection: Selection) {
        const text = selection.anchorNode;

        if (!text) {
            return;
        }

        const anchorElement = text instanceof Element ? text : text.parentElement;

        this.state = !!anchorElement?.closest('button');
    }
}
