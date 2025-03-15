document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get section ID
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle Section Animations
const sections = document.querySelectorAll('section');

function checkSectionInView() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollTop + windowHeight > sectionTop + sectionHeight / 4) {
            section.classList.add('visible');
        }
    });
}

// Listen to the Scroll Event
window.addEventListener('scroll', checkSectionInView);

// Initial check when the page loads
checkSectionInView();
// Get all the card elements

const cards = document.querySelectorAll('.card');
const tooltip = document.getElementById('fun-fact-tooltip');

// Function to show the tooltip with fun fact
cards.forEach(card => {
  card.addEventListener('click', function() {
    const funFact = card.getAttribute('data-funfact');
    
    // Set the content of the tooltip to the fun fact
    tooltip.textContent = funFact;

    // Get card's position to show the tooltip at the right place
    const cardRect = card.getBoundingClientRect();

    // Position the tooltip above the card
    tooltip.style.left = `${cardRect.left + window.scrollX + (cardRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
    tooltip.style.top = `${cardRect.top + window.scrollY - tooltip.offsetHeight - 10}px`;

    // Show the tooltip with transition effect
    tooltip.style.display = 'block';
    tooltip.style.opacity = '1';
  });
});

// Hide the tooltip when clicked anywhere else
document.addEventListener('click', function(e) {
  if (!e.target.closest('.card')) {
    tooltip.style.display = 'none';
    tooltip.style.opacity = '0';
  }
});
