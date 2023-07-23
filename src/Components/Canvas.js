import { useEffect, useRef, useState } from "react";
import arrow from "../Images/arrow.png"

export default function Canvas() {
    const [mouseData, setMouseData] = useState({  });
    const canvasRef = useRef(null);
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [color, setColor] = useState("#30BFBF");
    const [size, setSize] = useState(10);
    const [showControls, setShowControls] = useState({
        width: 0,
        opacity: 0
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 320;
        canvas.height = 320;
        setCanvasCTX(ctx);
    }, [canvasRef]);

    const showDraw = () => {
        setShowControls(prev => {
            return prev.width === 0 ? {width: 320, opacity: 1} : {width: 0, opacity: 0} 
        })
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
      
    };



    return (
            <div className="canvas-wrapper" style={{position: "relative" }}>
                <canvas
                className="canvas"
                ref={canvasRef}
                onMouseMove={(e) => SetPos(e)}
                onMouseDown={(e) => SetPos(e)}
            >
                
            </canvas>
            <div 
            className="draw-text flex " 
            style={{
                    position: "absolute",
                    top: "-230px",
                    left: "100px",
                    width: "320px", 
                }}>
                    <p>Make me smile!</p>
                    <i class="fa-solid fa-pencil" onClick={showDraw}></i>
            </div>
            
            <div 
            className="controls-wrapper flex justify-center"
            style={{
                position: "absolute",
                bottom: "-225px",
                left: "30px",
                width: "320px", 
                height: "50px",
            }}
            >


            <div
                className="controlpanel flex justify-space-around"
                style={{
                    width: `${showControls.width}px`, 
                    opacity: `${showControls.opacity}`
                }}
            >   
                    <input
                    type="range"
                    value={size}
                    max={40}
                    onChange={(e) => {
                    setSize(e.target.value);
                    }}
                    
                />
                <small className="control-text">{size}</small>
                <input
                    type="color"
                    className="color-picker"
                    style={{backgroundColor: `${color}`}}
                    value={color}
                    onChange={(e) => {
                    setColor(e.target.value);
                    }}
                />
                <small className="control-text">{color}</small> 
                <button
                    onClick={() => {
                        const ctx = canvasCTX;
                        ctx.clearRect(
                            0,
                            0,
                            canvasRef.current.width,
                            canvasRef.current.height
                        );
                    }}
                >
                
                <i className="fa-solid fa-rotate-left highlight"></i>
                </button>
                </div>
                  
                
                
            </div>
            
            </div>
    );
}