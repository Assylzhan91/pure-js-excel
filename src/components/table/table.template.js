const charCodeAt = {
    A: 65,
    Z: 90,
}

function toChar(_, index) {
    return String.fromCharCode(charCodeAt.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = charCodeAt.Z - charCodeAt.A + 1
    const rows = []
    const columns = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(columns))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}

function createRow(content, num = '') {
    const colResize = num ? `<div class="row-resize" data-resize="row"></div>` : ''
    return `<div class="row" data-type="resizable">
        <div class="row-info">${num} ${colResize}</div>
        <div class="row-data">${content}</div>
      </div>`
}

const toColumn = (col, index) =>
    `<div class="column" data-type="resizable" data-col="${index}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
</div>`

const toCell = (_, col)=> `<div class="cell" contenteditable data-col="${col}"></div>`
