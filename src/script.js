import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// fills page with canvas //
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// fillRect()

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}