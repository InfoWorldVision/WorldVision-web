const lensBg = document.getElementById("lensBg");

const lenses = [
  "../Multimedia/lense1.png","../Multimedia/lense2.png","../Multimedia/lense3.png","../Multimedia/lense4.png","../Multimedia/lense5.png",
  "../Multimedia/lense6.png","../Multimedia/lense7.png","../Multimedia/lense8.png","../Multimedia/lense9.png","../Multimedia/lense10.png",
  "../Multimedia/lense11.png","../Multimedia/lense12.png","../Multimedia/lense13.png","../Multimedia/lense14.png","../Multimedia/lense15.png",
  "../Multimedia/lense16.png","../Multimedia/lense17.png","../Multimedia/lense18.png","../Multimedia/lense19.png","../Multimedia/lense20.png",
  "../Multimedia/lense21.png","../Multimedia/lense22.png"
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
