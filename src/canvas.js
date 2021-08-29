import React, { Component, useContext, useEffect, useState } from 'react';
// import { useCanvas } from './script'
// import './canvas.css';
// import './script.js'

// class Canvas extends Component {
  const CanvasContext = React.createContext();

  export const CanvasProvider = ({ children }) => {
      const [isDrawing, setIsDrawing] = useState(false)
      const canvasRef = useRef(null);
      const contextRef = useRef(null);
      
  }

        const prepareCanvas = () => {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth * 2;
            canvas.height = window.innerHeight * 2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            const context = canvas.getContext('2d')
            context.scale(2, 2);
            context.lineCap = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 5;
            context.current = context;
        };

        const startDrawing = ({ nativeEvent }) => {
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath();
            contextRef.current.moveTo(offsetX, offsetY)
            setIsDrawing(true);

        }

        const finishDrawing = () => {
            contextRef.current.closePath()
            setIsDrawing(false)
        }

        const draw = ({ nativeEvent }) => {
            if(!isDrawing){
                return;
            }
            const {offsetX, offsetY} = nativeEvent;
            contextRef.current.lineTo(offsetX, offsetY)
            contextRef.current.stroke();
        };
        const clearCanvas = () => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            context.fillStyle = 'white'
            context.fillRect(0, 0, canvas.width, canvas.height)
        }
    return(
        
        <CanvasContext.Provider

        value= {{
            canvasRef,
            contextRef,
            prepareCanvas,
            startDrawing,
            finishDrawing,
            clearCanvas,
            draw,
        }}
        >
            {children}
        </CanvasContext.Provider>
        

    );  
};
export const useCanvas = () => useContext(CanvasContext);
// }
// export default Canvas
{/* <div>
    <canvas 
        id='canvas' 
        width='600' 
        height='600' 
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        ref={canvasRef}
    >

    </canvas>
</div> */}