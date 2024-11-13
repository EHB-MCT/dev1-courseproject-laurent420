"use strict";

// Functie om willekeurige vormen te tekenen op de canvas van img1, alleen in het midden
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
      const shapeType = Math.random() > 0.5 ? "circle" : "square"; // Willekeurig kiezen tussen cirkel of vierkant

      // Willekeurige x en y binnen het middengebied
      const x = Math.random() * (canvas.width - 2 * marginX) + marginX; // Willekeurige x-positie binnen het midden
      const y = Math.random() * (canvas.height - 2 * marginY) + marginY; // Willekeurige y-positie binnen het midden

      const size = Math.random() * 50 + 10; // Willekeurige grootte tussen 10 en 60

      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`; // Willekeurige kleur met transparantie

      if (shapeType === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2); // Teken een cirkel
        ctx.fill();
      } else {
        ctx.fillRect(x, y, size, size); // Teken een vierkant
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
