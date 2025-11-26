document.addEventListener('DOMContentLoaded', () => {
document.querySelector('header').classList.add('fade-in');
document.querySelector('footer').classList.add('fade-in');
});


function showPet(pet) {
const content = {
"Dogs": "Dogs are loyal, playful, and loving companions.",
"Cats": "Cats are independent, graceful, and affectionate.",
"Birds": "Birds bring music, color, and joy to any home.",
"Fish": "Fish are peaceful pets that create a calming atmosphere.",
"Reptiles": "Reptiles are fascinating, unique pets for curious owners."
};


document.getElementById('mainContent').innerHTML = `
<h2>${pet}</h2>
<p>${content[pet]}</p>
`;
}


function flashHeader() {
const header = document.querySelector('header');
header.classList.add('glow-text');
setTimeout(() => header.classList.remove('glow-text'), 1500);
}
