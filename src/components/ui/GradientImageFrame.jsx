import React from "react";
import GradientFrame from "./gradientFrame";

const GradientImageFrame = ({ src, alt }) => {
	return (
		<GradientFrame>
			<img
				src={src}
				alt={alt}
				className="h-full object-cover rounded-md"
			/>
		</GradientFrame>
	);
};

export default GradientImageFrame;
