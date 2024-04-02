
import './Footer.css';

function Footer() {

    const canvasRef = useRef(null);
    const canvasWidth = 1700;
    const canvasHeight = 400;
    const wormSegments = [];
    const numSegments = 80;
    const segmentSize = 20;
    const wormSpeed = 5;
    
    for (let i = 0; i < numSegments; i++) {
        wormSegments.push({ x: canvasWidth / 2, y: canvasHeight / 2 + i * segmentSize });
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const drawWorm = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.fillStyle = '#3d0009';
            for (let i = 0; i < wormSegments.length; i++) {
                const { x, y } = wormSegments[i];
                ctx.beginPath();
                ctx.arc(x, y, segmentSize / 2, 0, 2 * Math.PI);
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

            <h2>Title</h2>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
            <ul>
                <li>Item 1</li>
            </ul>
        </footer>
    );
}

export default Footer;


import React, {useRef, useEffect } from 'react';





