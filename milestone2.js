"use strict"

function randomvorm(canvasId, imageId) {
    const canvas = document.getElementById(canvasId);
    const image = document.getElementById(imageId);
image.onload = ()=>{
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
}}
