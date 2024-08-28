import ContactUs from "./components/ContactUs";
import Navbarr from "./components/Navbarr";
import Image from 'next/image';


export default function Home() {
  const images = [
    '/imagess/homepage/home1.jpg',
    '/imagess/homepage/home2.jpg',
    '/imagess/homepage/home3.jpg',
    '/imagess/homepage/home4.jpg',
    '/imagess/homepage/home5.jpg',
    '/imagess/homepage/home6.jpg',
    '/imagess/homepage/home7.jpg',
    '/imagess/homepage/home8.jpg',
    '/imagess/homepage/home9.jpg',
    '/imagess/homepage/home10.jpg',
    '/imagess/homepage/home11.jpg',
    '/imagess/homepage/home12.jpg',
  ];

  return (
    <div>
      <div className="h-screen bg-[url('/imagess/woodyOne.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <Navbarr />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Craftsmanship Meets Nature
          </h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mb-6">
            At D&apos;Woody, we craft unique, handcrafted wood products that bring warmth and character to your home.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
            Contact Us
          </button>
        </div>
      </div>

      <div className="bg-blue-50 py-12 px-6 sm:px-12 lg:px-32">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center">
            <span className="h-1 w-8 bg-green-500 mr-4 rounded"></span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Our Finest Wood Creations</h2>
            <span className="h-1 w-8 bg-green-500 ml-4 rounded"></span>
          </div>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
            Discover the beauty and craftsmanship of our finest wood creations. Each piece is meticulously handcrafted, showcasing the natural elegance and timeless quality of wood. Explore our collection and find the perfect addition to your home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, 12).map((imgSrc, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={imgSrc}
                alt={`Image ${index + 1}`}
                width={350}  // Set appropriate width
                height={350} // Set appropriate height
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
