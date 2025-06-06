import React from "react";
import GradientImageFrame from "./GradientImageFrame";

const BiographyCard = ({ name, description, imageUrl }) => {
	return (
		<div
			className="rounded-3xl p-1.5 inline-block"
			style={{
				backgroundImage:
					"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
			}}
		>
			<div className="rounded-2xl">
				<div className="flex flex-col md:flex-row items-center p-3 bg-gray-800 rounded-2xl overflow-hidden">
					<div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white">
						<img
							src={imageUrl}
							alt={`${name}'s profile`}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="mt-2 flex flex-col justify-center md:mt-0 md:ml-4 md:items-start">
						<h3 className="sm:text-center text-md text-center font-semibold text-gray-600 md:text-left">{name}</h3>
						<p className="text-center text-sm text-white-600">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BiographyCard;
