// Get all the cards
const cards = document.querySelectorAll('.card');

// Get the previous and next buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Set the initial card index
let cardIndex = 0;

// Show the active card and hide the others
const showCard = (index) => {
cards.forEach((card, i) => {
if (i === index) {
card.classList.add('active');
} else {
card.classList.remove('active');
}
});
};

// Move to the next card
const nextCard = () => {
cardIndex++;
if (cardIndex > cards.length - 1) {
cardIndex = 0;
}
showCard(cardIndex);
};

// Move to the previous card
const prevCard = () => {
cardIndex--;
if (cardIndex < 0) {
cardIndex = cards.length - 1;
}
showCard(cardIndex);
};

// Add event listeners for arrow keys and buttons
document.addEventListener('keydown', (event) => {
if (event.code === 'ArrowRight') {
nextCard();
} else if (event.code === 'ArrowLeft') {
prevCard();
}
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Show the first card initially
showCard(cardIndex);


var projectsCard = document.getElementById("aboutme");
var projectsLink = document.querySelector('a[href="#projects"]');
projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectsCard.scrollIntoView({behavior: 'smooth'});
});


var projectsCard = document.getElementById("projects");
var projectsLink = document.querySelector('a[href="#projects"]');
projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectsCard.scrollIntoView({behavior: 'smooth'});
});

var projectsCard = document.getElementById("blogs");
var projectsLink = document.querySelector('a[href="#blogs"]');
projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectsCard.scrollIntoView({behavior: 'smooth'});
});

var projectsCard = document.getElementById("timeline");
var projectsLink = document.querySelector('a[href="#timeline"]');
projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectsCard.scrollIntoView({behavior: 'smooth'});
});

var projectsCard = document.getElementById("contact");
var projectsLink = document.querySelector('a[href="#contact"]');
projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectsCard.scrollIntoView({behavior: 'smooth'});
});