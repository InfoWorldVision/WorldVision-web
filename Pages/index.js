const lensBg = document.getElementById("lensBg");

const lenses = [
  "lense1.png","lense2.png","lense3.png","lense4.png","lense5.png",
  "lense6.png","lense7.png","lense8.png","lense9.png","lense10.png",
  "lense11.png","lense12.png","lense13.png","lense14.png","lense15.png",
  "lense16.png","lense17.png","lense18.png","lense19.png","lense20.png",
  "lense21.png","lense22.png"
];

const imgPath = "../Multimedia/";
const rowHeight = 120;
const duplicates = 2;

const rowsNeeded = Math.ceil(window.innerHeight / rowHeight);

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

for (let i = 0; i < rowsNeeded; i++) {
  const row = document.createElement("div");
  row.className = "lens-row";

  const shuffled = shuffle(lenses);

  for (let d = 0; d < duplicates; d++) {
    shuffled.forEach(name => {
      const img = document.createElement("img");
      img.src = imgPath + name;
      img.alt = "";
      row.appendChild(img);
    });
  }

  lensBg.appendChild(row);
}

// Navbar movement on scroll

const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      navbar.classList.add("nav-vertical");
    } else {
      navbar.classList.remove("nav-vertical");
    }
  });