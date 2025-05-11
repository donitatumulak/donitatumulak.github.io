//SCRIPT TO LINK BUTTONS TO DESIGNATED SECTIONS OR PAGES
document.getElementById("ctaButton").addEventListener("click", function () {
  document.getElementById("ctaSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("ctaAdoptButton").addEventListener("click", function() {
  window.location.href = "adopt.html"; 
});

//An array meant to store all animal information, they are treated as objects
const animals = [
  {
    name: "Juan",
    age: "7 years old",
    type: "Cat",
    description: "A senior cat who loves to eat! Loves loafing!",
    image: "pawkalinga-photos/juan.jpg",
  },
  {
    name: "Luna",
    age: "3 years old",
    type: "Dog",
    description: "She loves treats and zoomies. Likes to make friends!",
    image: "pawkalinga-photos/luna.jpg",
  },
  {
    name: "Jose",
    age: "1 year old",
    type:"Dog",
    description:"A very timid dog who loves to be petted!",
    image: "pawkalinga-photos/jose.jpg"
  },
  {
    name: "Caesar",
    age: "5 years old",
    type:"Cat",
    description:"He's very naughty but also a good boy at the same time.",
    image: "pawkalinga-photos/caesar.jpg"
  },
  {
    name: "Bubbles",
    age: "4 years old",
    type:"Dog",
    description:"Very sweet and loves kisses",
    image: "pawkalinga-photos/bubbles.jpg"
  },
  {
    name: "Luke",
    age: "1 year old",
    type:"Cat",
    description:"Purrs a lot! and loves to cuddle.",
    image: "pawkalinga-photos/luke.jpg"
  },
  {
    name: "Pixie",
    age: "5 years old",
    type:"Dog",
    description:"Loves walking and playing.",
    image: "pawkalinga-photos/pixie.jpg"
  },
  {
    name: "Buttercup",
    age: "3 years old",
    type:"Cat",
    description:"Likes stealing treats but is cute.",
    image: "pawkalinga-photos/buttercup.jpg"
  },
  {
    name: "Blossom",
    age: "7 months",
    type:"Dog",
    description:"Likes to drink milk a lot!",
    image: "pawkalinga-photos/blossom.jpg"
  },
  {
    name: "Whiskers",
    age: "2 years old",
    type:"Cat",
    description:"Loves sunbathing and chasing feathers.",
    image: "pawkalinga-photos/whiskers.jpg"
  },
  {
    name: "Chirpy",
    age: "1 year old",
    type:"Dog",
    description:"Likes to eat and loves attention!",
    image: "pawkalinga-photos/chirpy.jpg"
  },
  {
    name: "Rex",
    age: "2 years old",
    type:"Dog",
    description:"Loyal and playful, loves fetch and belly rubs!",
    image: "pawkalinga-photos/rex.jpg"
  },
  {
    name: "Tanjiro",
    age: "4 years old",
    type:"Dog",
    description:"A very, very good boy! He's a happy dog!",
    image: "pawkalinga-photos/tanjiro.jpg"
  },
  {
    name: "Inosuke",
    age: "3 years old",
    type:"Cat",
    description:"True definition of a feral cat but still, he's a pretty-looking cat.",
    image: "pawkalinga-photos/inosuke.jpg"
  },
  {
    name: "Zenitsu",
    age: "6 years old",
    type:"Cat",
    description:"He's afraid of people in general but is sweet to those he likes the most.",
    image: "pawkalinga-photos/zenitsu.jpg"
  },
];

//Function to Display the animals cards on the page
function renderCards(data) {
  const container = document.getElementById("animalCards");
  container.innerHTML = ""; 

  data.forEach((animal) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class = "animal-detail">
       <img src="${animal.image}" alt="${animal.name}" />
      </div>
      <p><strong>Name:</strong> ${animal.name}</p>
      <p><strong>Age:</strong> ${animal.age}</p>
      <p><strong>Type:</strong> ${animal.type}</p>
      <p><strong>Description:</strong> ${animal.description}</p>
    `;
    container.appendChild(card);
  });
}

renderCards(animals);

// Script to allow searching in the browsing page
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const backButton = document.getElementById("backButton");
const noResultsGif = document.getElementById("noResultsGif");
const ctaButton = document.getElementById("ctaButton");
const animalCards = document.getElementById("animalCards");
const browseIntro = document.getElementById("browseIntro");
const ctaSection = document.getElementById("ctaSection"); 

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backButton");
  const searchInput = document.getElementById("searchInput");
  const noResultsGif = document.getElementById("noResultsGif");
  const animalCards = document.getElementById("animalCards");
  const animalIcons = document.getElementById("animalIcons");
  const ctaSection = document.getElementById("ctaSection");
  const ctaButton = document.getElementById("ctaButton");

  backButton.style.display = "none";

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    const words = query.split(" ");

    const filtered = animals.filter((animal) =>
      words.some(word =>
        animal.description.toLowerCase().includes(word) ||
        animal.name.toLowerCase().includes(word) ||
        animal.type.toLowerCase().includes(word) ||
        animal.age.toLowerCase().includes(word)
      )
    );

    renderCards(filtered);

    if (filtered.length === 0) {
      noResultsGif.style.display = "block";
      animalCards.style.display = "none"; 
      ctaSection.style.display = "none"; 
    } else {
      noResultsGif.style.display = "none"; 
      animalCards.style.display = "grid"; 
      ctaSection.style.display = "flex"; 
    }

    backButton.style.display = "inline-block";
    ctaButton.style.display = "none"; 
    animalIcons.style.display = "none"; 
  });

  // Handle pressing Enter inside the input field
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });

  // Handle back button click
  backButton.addEventListener("click", () => {
    
    renderCards(animals); 
    searchInput.value = ""; 

    noResultsGif.style.display = "none"; 
    animalCards.style.display = "grid";
    animalIcons.style.display = "flex"; 

    ctaButton.style.display = "inline-block"; 
    backButton.style.display = "none"; 
  });
});

//An array meant to store the animal icon photos
const animalIconData = [
  { src: "pawkalinga-photos/juan.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/luna.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/jose.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/caesar.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/bubbles.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/luke.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/pixie.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/buttercup.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/blossom.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/whiskers.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/chirpy.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/rex.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/tanjiro.jpg", alt: "Dog" },
  { src: "pawkalinga-photos/inosuke.jpg", alt: "Cat" },
  { src: "pawkalinga-photos/zenitsu.jpg", alt: "Cat" }
];

const iconContainer = document.getElementById("animalIcons");

animalIconData.forEach((icon) => {
  const img = document.createElement("img");
  img.src = icon.src;
  img.alt = icon.alt;
  img.classList.add("animal-icon"); 
  iconContainer.appendChild(img);
});

const animalIcons = document.querySelectorAll(".animal-icon");

animalIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(0.95)' },
      { transform: 'scale(1)' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });
  });
});