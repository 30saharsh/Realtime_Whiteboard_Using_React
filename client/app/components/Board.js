"use client";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

var socket = io("http://localhost:3000");
const Board = () => {
  
  useEffect(() => {
    drawOnCanvas();
  }, []);

  const handleClearButtonClick = () => {
    socket.emit("clear");
  };

  const clearCanvas = () => {
    var canvas = document.querySelector(".board");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawOnCanvas = () => {
    var canvas = document.querySelector(".board");
    var ctx = canvas.getContext("2d");

    var sketch = document.querySelector(".sketch");
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.pageX - rect.left;
        mouse.y = e.pageY - rect.top;
      },
      false
    );

    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();

      socket.emit("draw", {
        lastX: last_mouse.x,
        lastY: last_mouse.y,
        currentX: mouse.x,
        currentY: mouse.y,
        color: "black",
      });

      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;
    };

    socket.on("draw", ({ lastX, lastY, currentX, currentY }) => {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currentX, currentY);
      ctx.closePath();
      ctx.stroke();
    });

    socket.on("clear", () => {
      clearCanvas();
    });
  };

  return (
    <div className="sketch">
      <button onClick={handleClearButtonClick}>Clear Drawing</button>
      <canvas className="board"></canvas>
    </div>
  );
};

export default Board;
