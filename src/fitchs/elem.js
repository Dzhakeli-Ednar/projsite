
export function elem(){let div = document.createElement('div')
document.body.append(div)

div.textContent = 'Hallo world'
div.classList.add('firstEl')
div.setAttribute('id', 'firstElem')}

elem()