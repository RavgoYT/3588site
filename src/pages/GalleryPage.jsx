import { useState, useEffect } from "react";
import { contentfulClient } from "../utils/contentful";
import Masonry from "../components/ui/Masonry";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function GalleryPage() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		contentfulClient
			.getEntries({
				content_type: "galleryEntry",
				order: "-fields.date",
			})
			.then((response) => {
        console.log(response);
				const items = response.items.map((item) => ({
					id: item.sys.id,
					height: item.fields.image.fields.file.details.image.height,
					width: item.fields.image.fields.file.details.image.width,
					url: item.fields.image.fields.file.url,
					img: item.fields.image.fields.file.url,
          description: item.fields.description || "",
          title: item.fields.title || ""
				}));
				setImages(items);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="p-4 pt-16">
			<h1 className="text-4xl font-bold text-center my-8 pb-8">Gallery</h1>
			<Masonry
				items={images}
				ease="power3.out"
				duration={0.6}
				stagger={0.05}
				animateFrom="bottom"
				scaleOnHover={true}
				hoverScale={0.95}
				blurToFocus={true}
				colorShiftOnHover={true}
			/>
		</div>
	);
}
