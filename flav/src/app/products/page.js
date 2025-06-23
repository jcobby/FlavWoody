"use client";

// pages/products.js

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";

const images = [
  "/imagess/productImages/photo_1.jpg",
  "/imagess/productImages/photo_2.jpg",
  "/imagess/productImages/photo_3.jpg",
  "/imagess/productImages/photo_4.jpg",
  "/imagess/productImages/photo_5.jpg",
  "/imagess/productImages/photo_6.jpg",
  "/imagess/productImages/photo_7.jpg",
  "/imagess/productImages/photo_8.jpg",
  "/imagess/productImages/photo_9.jpg",
  "/imagess/productImages/photo_10.jpg",
  "/imagess/productImages/photo_11.jpg",
  "/imagess/productImages/photo_12.jpg",
  "/imagess/productImages/photo_13.jpg",
  "/imagess/productImages/photo_14.jpg",
  "/imagess/productImages/photo_15.jpg",
  "/imagess/productImages/photo_16.jpg",
  "/imagess/productImages/photo_17.jpg",
  "/imagess/productImages/photo_18.jpg",
  "/imagess/productImages/photo_19.jpg",
  "/imagess/productImages/photo_20.jpg",
  "/imagess/productImages/photo_21.jpg",
  "/imagess/productImages/photo_22.jpg",
  "/imagess/productImages/photo_23.jpg",
  "/imagess/productImages/photo_24.jpg",
  "/imagess/productImages/photo_25.jpg",
  "/imagess/productImages/photo_26.jpg",
  "/imagess/productImages/photo_27.jpg",
  "/imagess/productImages/photo_28.jpg",
  "/imagess/productImages/photo_29.jpg",
  "/imagess/productImages/photo_30.jpg",
  "/imagess/productImages/photo_31.jpg",
  "/imagess/productImages/photo_32.jpg",
  // "/imagess/productImages/photo_33.jpg",
  "/imagess/productImages/photo_34.jpg",
  "/imagess/productImages/photo_35.jpg",
];

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero/Intro */}
      <Navbarr />

      <div className="h-72 sm:h-96 bg-[url('/images/woodyTwo.jpg')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black " />
        <div className="relative text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Every creation tells a story — browse through our handcrafted wooden
            furniture and décor pieces made with care and tradition.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 px-6 sm:px-12 lg:px-32 bg-gray-50">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Explore Our Collection
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Click any item to view in full size.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Product ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-5xl max-h-[90vh] overflow-hidden">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Zoomed"
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl"
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      <Footer />
    </div>
  );
}
