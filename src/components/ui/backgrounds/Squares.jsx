import { useRef, useEffect, memo } from "react";

const Squares = ({
	direction = "right",
	speed = 1,
	borderColor = "#999",
	squareSize = 40,
	hoverFillColor = "#222",
}) => {
	const canvasRef = useRef(null);
	const requestRef = useRef(null);
	const numSquaresX = useRef(0);
	const numSquaresY = useRef(0);
	const gridOffset = useRef({ x: 0, y: 0 });
	const hoveredSquareRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
			numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
		};

		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();

		const drawGrid = () => {
			if (!ctx) return;

			// clear canvas first
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const offsetX = gridOffset.current.x % squareSize;
			const offsetY = gridOffset.current.y % squareSize;

			for (let i = -1; i <= numSquaresX.current; i++) {
				for (let j = -1; j <= numSquaresY.current; j++) {
					const x = i * squareSize - offsetX;
					const y = j * squareSize - offsetY;

					// draw hover fill
					if (
						hoveredSquareRef.current &&
						hoveredSquareRef.current.x === i &&
						hoveredSquareRef.current.y === j
					) {
						ctx.fillStyle = hoverFillColor;
						ctx.fillRect(Math.round(x), Math.round(y), squareSize, squareSize);
					}

					// draw square border
					ctx.strokeStyle = borderColor;
					ctx.strokeRect(Math.round(x), Math.round(y), squareSize, squareSize);
				}
			}

			// draw subtle radial gradient on top
			const gradient = ctx.createRadialGradient(
				canvas.width / 2,
				canvas.height / 2,
				0,
				canvas.width / 2,
				canvas.height / 2,
				Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
			);
			gradient.addColorStop(0, "rgba(0,0,0,0)");
			gradient.addColorStop(1, "rgba(6,0,16,0.3)");

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		};

		const updateAnimation = () => {
			const effectiveSpeed = Math.max(speed, 0.1);
			switch (direction) {
				case "right":
					gridOffset.current.x =
						(gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
					break;
				case "left":
					gridOffset.current.x =
						(gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
					break;
				case "up":
					gridOffset.current.y =
						(gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
					break;
				case "down":
					gridOffset.current.y =
						(gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
					break;
				case "diagonal":
					gridOffset.current.x =
						(gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
					gridOffset.current.y =
						(gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
					break;
				default:
					break;
			}

			drawGrid();
			requestRef.current = requestAnimationFrame(updateAnimation);
		};

		const handleMouseMove = (event) => {
			const rect = canvas.getBoundingClientRect();
			const mouseX = event.clientX - rect.left;
			const mouseY = event.clientY - rect.top;

			const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
			const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

			const hoveredSquareX = Math.floor(
				(mouseX + gridOffset.current.x - startX) / squareSize
			);
			const hoveredSquareY = Math.floor(
				(mouseY + gridOffset.current.y - startY) / squareSize
			);

			if (
				!hoveredSquareRef.current ||
				hoveredSquareRef.current.x !== hoveredSquareX ||
				hoveredSquareRef.current.y !== hoveredSquareY
			) {
				hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
			}
		};

		const handleMouseLeave = () => {
			hoveredSquareRef.current = null;
		};

		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);
		requestRef.current = requestAnimationFrame(updateAnimation);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			if (requestRef.current) cancelAnimationFrame(requestRef.current);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [direction, speed, borderColor, hoverFillColor, squareSize]);

	return (
		<canvas
			ref={canvasRef}
			className="w-full h-full border-none block"
		></canvas>
	);
};

export default memo(Squares);
