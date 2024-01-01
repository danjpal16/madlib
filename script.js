let color = prompt('Enter a color:')
let size = prompt('Enter a size:')
let color2 = prompt('Enter another color:')
let lastname = prompt('Enter your last name:')
let lastname2 = prompt('Enter your friends last name:')

let story = `'Twas the night before Christmas, and all through the ${color} house, not a creature was stirring, not even a ${size} mouse. The ${color2} stockings were hung by the ${lastname} with care, in hopes that St. ${lastname2} soon would be there.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`