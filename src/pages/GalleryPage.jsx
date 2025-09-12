import { useState, useEffect } from "react";
import { contentfulClient } from "../utils/contentful";
import Masonry from "../components/ui/Masonry";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    contentfulClient
      .getAssets({
        "metadata.tags.sys.id[in]": "gallery",
      })
      .then((response) => {
        const items = response.items.map((item) => ({
          id: item.sys.id,
          img: item.fields.file.url,
          height: item.fields.file.details.image.height,
          width: item.fields.file.details.image.width,
          url: item.fields.file.url,
        }));
        setImages(items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-['TT Norms Pro']">
      <Header />
      <main className="pt-16 w-screen overflow-hidden">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-center my-8">Gallery</h1>
          <Masonry items={images} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
