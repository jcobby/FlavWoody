import Image from "next/image";
import Navbarr from "../components/Navbarr";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-[60vh] bg-[url('/imagess/woodyHero.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About D&apos;Woody
          </h1>
        </div>
        <Navbarr />
      </div>

      {/* Main About Content */}
      <div className="py-16 px-6 sm:px-12 lg:px-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Crafted with Passion
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Our vision is to become the leading brand in the furniture
              industry in Accra- Ghana and also the one stop shop for furniture.
              <br />
              <br />
              Our mission is to establish a world – class furniture shop that
              will produce wooden related products from the finest of woods. A
              company whose products will not only be retailed all across Ghana,
              but also be exported to other countries of the world.
            </p>
          </div>
          <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/imagess/productImages/photo_33.jpg
"
              alt="Craftsmanship"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 py-12 px-6 sm:px-12 lg:px-32">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Quality",
              desc: "We use only the finest wood and materials, ensuring every product is durable, beautiful, and long-lasting.",
            },
            {
              title: "Sustainability",
              desc: "We source our materials responsibly and strive to minimize our environmental impact.",
            },
            {
              title: "Customer-Centric",
              desc: "We believe every client is part of our journey. We listen, craft, and deliver with your vision in mind.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <ContactUs />

      <Footer />
    </div>
  );
}
