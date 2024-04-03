
import './Footer.css';

function Footer() {
console.dir(document);
    const canvasRef = useRef(null);
    const canvasWidth = window.innerWidth;
    const canvasHeight = 400;
    const wormSegments = [];
    const numSegments = 150;
    const segmentSize = 20;
    const wormSpeed = 8;
    
    for (let i = 0; i < numSegments; i++) {
        wormSegments.push({ x: canvasWidth / 3, y: canvasHeight / 3 + i * segmentSize });
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const drawWorm = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.fillStyle = '#770d1d';
            for (let i = 0; i < wormSegments.length; i++) {
                const { x, y } = wormSegments[i];
                ctx.beginPath();
                ctx.arc(x, y, segmentSize / 1.5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
        };

        const updateWormPosition = () => {
            for (let i = wormSegments.length - 1; i > 0; i--) {
                wormSegments[i].x = wormSegments[i - 1].x;
                wormSegments[i].y = wormSegments[i - 1].y;
            }


            const dx = Math.random() * 2 - 1;
            const dy = Math.random() * 2 - 1;
            wormSegments[0].x += dx * wormSpeed;
            wormSegments[0].y += dy * wormSpeed;


            if (wormSegments[0].x < 0) wormSegments[0].x = canvasWidth;
            if (wormSegments[0].x > canvasWidth) wormSegments[0].x = 0;
            if (wormSegments[0].y < 0) wormSegments[0].y = canvasHeight;
            if (wormSegments[0].y > canvasHeight) wormSegments[0].y = 0;
        };

        const animate = () => {
            updateWormPosition();
            drawWorm();
            requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animate);
    }, []);


    return (
        <footer>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
            <div className="flex">
                <h2>Title</h2>
                <ul>
                    <li>Item 1</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;


import React, {useRef, useEffect } from 'react';





