import { useEffect, useRef, useState } from "react";

export default function Canvas() {
    const [mouseData, setMouseData] = useState({ });
    const canvasRef = useRef(null);
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [color, setColor] = useState("#30BFBF");
    const [size, setSize] = useState(10);
    const [showControls, setShowControls] = useState(0)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 320;
        canvas.height = 320;
        setCanvasCTX(ctx);
    }, [canvasRef]);

    const showDraw = () => {
        setShowControls(prev => !prev ? 1 : 0)
    }

    const SetPos = (e) => {
        const canvas = canvasRef.current;
        var bounding = canvas.getBoundingClientRect();
        var x = e.clientX - bounding.left;
        var y = e.clientY - bounding.top;
        setMouseData({ x, y });

        if (e.buttons !== 1) return;

        const ctx = canvasCTX;
        ctx.beginPath();
        ctx.moveTo(x, y);

        ctx.lineTo(mouseData.x, mouseData.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
 
        ctx.lineCap = "round";
        ctx.stroke();  

        const replicaCanvas = document.querySelector(".replica-canvas");
        const replicaCtx = replicaCanvas.getContext("2d");
        replicaCtx.clearRect(0, 0, replicaCanvas.width, replicaCanvas.height);
        replicaCtx.drawImage(canvasRef.current, 0, 0, replicaCanvas.width, replicaCanvas.height);
    };

    
  const clearCanvas = () => {
    const ctx = canvasCTX;

    // Clear the main canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Clear the replica canvas
    const replicaCanvas = document.querySelector(".replica-canvas");
    const replicaCtx = replicaCanvas.getContext("2d");
    replicaCtx.clearRect(0, 0, replicaCanvas.width, replicaCanvas.height);
  };



    return (
            <div className="canvas-wrapper" style={{ position: "relative" }}>
                <canvas
                    className="canvas"
                    ref={canvasRef}
                    onMouseMove={(e) => SetPos(e)}
                    onMouseDown={(e) => SetPos(e)}
                ></canvas>

                <div className="draw-text flex justify-center">
                    <p>Make me smile!</p>
                    <i class="fa-solid fa-pencil" onClick={showDraw}></i>
                </div>
            
                <div
                    className="controlpanel flex justify-space-around"
                    style={{ opacity: `${showControls}`}}
                >   
                    <input
                        type="range"
                        value={size}
                        max={40}
                        onChange={(e) => setSize(e.target.value)}
                    />
                    <small className="control-text">{size}</small>

                    <input
                        type="color"
                        className="color-picker"
                        style={{backgroundColor: `${color}`}}
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <small className="control-text">{color}</small> 

                    <button
                        onClick={clearCanvas}
                    >
                
                    <i className="fa-solid fa-rotate-left highlight"></i>
                    </button>
                </div>  
            </div>    
    );
}