'use client'

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Wooden Creations</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => setSelectedImage(img.url)}
          >
            <div className="aspect-square overflow-hidden rounded-xl border shadow hover:shadow-lg transition">
              <img
                src={img.url}
                alt={img.title || "Wooden product"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {img.title && <p className="text-sm text-center mt-2">{img.title}</p>}
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
