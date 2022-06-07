const cardGroup = document.getElementById('group')
const submitBtn = document.getElementById('submit')
const colourPicker = document.getElementById('colour-picker')
const schemePicker = document.getElementById('scheme-picker')
const toast = document.getElementById('toast-container')

function defaultScheme() {
    // default scheme - #BBD5FC #BFC6FD #CFC4FD #E3C8FD #F4CDFE
    const defaultColours = ['#BBD5FC', '#BFC6FD', '#CFC4FD', '#E3C8FD', '#F4CDFE']

    defaultColours.map(i => {
        cardGroup.innerHTML += `<div class="col colour d-flex justify-content-center align-items-center" style="background: ${i};">
               <h3 class="text-center">${i}</h3>
       </div>`
    })
}

defaultScheme()

async function getColours(event) {
    event.preventDefault()
    cardGroup.innerHTML = ''

    const colourChoice = colourPicker.value.slice(1,7)
    const schemeChoice = schemePicker.value

    try {
        let response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colourChoice}&mode=${schemeChoice}&count=5`)
        let data = await response.json()
        colourScheme = data.colors

        colourScheme.map(colour => {
            console.log(colour.hex.value)
            cardGroup.innerHTML += `<div class="col colour d-flex justify-content-center align-items-center" style="background: ${colour.hex.value};">
               <h3 class="text-center">${colour.hex.value}</h3>
       </div>`

        })

    }
    catch (err) {
        console.error(err)
    }
}

submitBtn.addEventListener('click', getColours)

function copyColour() {

}
