"use strict";

alert("Look at my space invader here");

function drawBox() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    
    // background
    
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(50, 50, 300, 300);
    context.strokeRect(50, 50, 300, 300);

    context.lineWidth = 2;
    
    // top

    // L

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(125, 75, 50, 50);

    // R

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(225, 75, 50, 50);

    // horizontal top

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(75, 125, 250, 50);

    // mid mid

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(175, 175, 50, 50);

    // mid left and right
    // L

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(75, 125, 50, 200);

    // R

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(275, 125, 50, 200);

    //bottom 

    // L

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(75, 275, 100, 50);

    // R

    context.fillStyle = "#10ed00";
    context.beginPath();
    context.fillRect(225, 275, 100, 50);
    
    }
    
    drawBox();  