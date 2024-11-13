"use strict"

function randomvorm(canvasId, imageId) {
    const canvas = document.getElementById(canvasId);
    const image = document.getElementById(imageId);
image.onload = ()=>{
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');

    for ( let i = 0; i < 10; i++) {
        const vormType = Math.random() > 0.5 ? 'cirkel' : 'vierkant';
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

ctx.fillStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`;    } 
}}
