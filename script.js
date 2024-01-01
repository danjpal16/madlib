let color = prompt('Enter a color:')
let size = prompt('Enter a size:')
let color2 = prompt('Enter another color:')
let lastname = prompt('Enter your last name plural:')
let lastname2 = prompt('Enter your friends last name:')
let bedsize = prompt('Enter a bedsize:')
let pluralnoun = prompt('Enter a plural noun:')
let name2 = prompt('Enter a first name:')
let adjective = prompt('Enter an adjective:')
let clothing = prompt('Enter an article of clothing:')
let noun = prompt('Enter a noun:')
let noun2 = prompt('Enter another noun:')
let verb = prompt('Enter a past-tense verb:')
let pluralnoun2 = prompt('Enter another plural noun:')
let adjective2 = prompt('Enter another adjective:')
let vehicle = prompt('Enter a vehicle *car, boat, etc*:')
let speed = prompt('Enter a speed *fast, slow, etc*:')
let names1 = prompt('Enter a pet type name:')
let names2 = prompt('Enter another pet type name:')
let names3 = prompt('Enter another pet type name:')
let names4 = prompt('Enter another pet type name:')

let story = `'Twas the night before Christmas, and all through the ${color} house, not a creature was stirring, not even a ${size} mouse. The ${color2} stockings were hung by the ${lastname} with care, in hopes that St. ${lastname2} soon would be there. The children were nestled all snug in their ${bedsize} beds, while visions of ${pluralnoun} danced in their heads, and ${name2} in his ${adjective} kerchief, and I in my ${clothing}, had just settled our brains for a long winter's nap. When out on the ${noun} there arose such a clatter, I sprang from my bed to see what was the matter. Away to the window I ${verb} like a flash, tore open the ${noun2} and threw up the ${pluralnoun2} sash. The ${adjective2} moon on the breast of the new-fallen snow, gave the lustre of midday to objects below. When, what to my wondering eyes should appear, but a miniature ${vehicle} and eight tiny reindeer. With a little old driver, so lively and quick, I knew in a moment it must be St. ${lastname2}. More rapid than ${speed} eagles, his coursers they came, and he ${verb} and shouted, and called them by name! "Now, ${names1}! now, ${names2}! now, ${names3} and ${names4}! On, ${names1}! on, ${names2}! on, ${names3} and ${names4}!" To the top of the mountain! To the very very top of the mountain! Now dash away! dash away! dash away all!"`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`