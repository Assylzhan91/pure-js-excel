import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = ['formula', 'excel__formula']
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
        })
    }

    toHTML() {
        return `
          <div class="info formula__info">fx</div>
          <div class="input formula__input" contenteditable spellcheck></div>
        `
    }

    onInput(event) {
        console.log(event.target.textContent.trim())
    }
    onClick(event) {

    }
}
