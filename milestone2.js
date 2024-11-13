"use strict";

// Functie om willekeurige vormen te tekenen op de canvas van img1, met meerdere soorten vormen
function drawRandomShapes(canvasId, imageId) {
  const canvas = document.getElementById(canvasId);
  const image = document.getElementById(imageId);

  // Wacht tot de afbeelding volledig is geladen
  image.onload = () => {
    // Zet de canvasgrootte gelijk aan de afbeelding
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");

    // Definieer de marges voor het middengebied van de T-shirt (bijv. 50% van de breedte en hoogte)
    const marginX = canvas.width * 0.25; // 25% van de breedte aan beide zijden
    const marginY = canvas.height * 0.25; // 25% van de hoogte aan boven- en onderkant

    // Teken willekeurige vormen, maar alleen binnen het middengebied
    for (let i = 0; i < 10; i++) {
      // Teken 10 willekeurige vormen
      const shapeType = Math.random(); // Willekeurige waarde om verschillende vormen te kiezen

      // Willekeurige x en y binnen het middengebied
      const x = Math.random() * (canvas.width - 2 * marginX) + marginX; // Willekeurige x-positie binnen het midden
      const y = Math.random() * (canvas.height - 2 * marginY) + marginY; // Willekeurige y-positie binnen het midden

      const size = Math.random() * 50 + 10; // Willekeurige grootte tussen 10 en 60

      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`; // Willekeurige kleur met transparantie

      if (shapeType < 0.25) {
        // Cirkel
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2); // Teken een cirkel
        ctx.fill();
      } else if (shapeType < 0.5) {
        // Vierkant
        ctx.fillRect(x, y, size, size); // Teken een vierkant
      } else if (shapeType < 0.75) {
        // Driehoek
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - size); // Maak een driehoek
        ctx.closePath();
        ctx.fill();
      } else {
        // Lijn
        ctx.beginPath();
        const x2 = Math.random() * (canvas.width - 2 * marginX) + marginX;
        const y2 = Math.random() * (canvas.height - 2 * marginY) + marginY;
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2); // Willekeurige lijn
        ctx.strokeStyle = `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.5)`; // Willekeurige lijnkleur
        ctx.lineWidth = Math.random() * 5 + 1; // Willekeurige lijndikte
        ctx.stroke();
      }
    }
  };

  // Als de afbeelding al in de cache zit, triggeren we de onload direct
  if (image.complete) {
    image.onload();
  }
}

// Wacht tot de pagina is geladen en teken de vormen alleen voor img1
window.onload = () => {
  drawRandomShapes("canvas1", "img1"); // Canvas voor img1
};
//gebruik gemaakt, ai, vorige oefeningen, forums.