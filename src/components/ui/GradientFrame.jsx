import React from "react";

const GradientFrame = ({children}) => {
	return (
		<div
			className="rounded-xl flex items-center justify-center overflow-hidden min-h-48 p-3"
			style={{
				backgroundImage:
					"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
			}}
		>
			{children}
		</div>
	);
};

export default GradientFrame;
