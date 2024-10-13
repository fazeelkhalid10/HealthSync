import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white">
      <header className="bg-blue-600 text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Oripio</h1>
        </div>
      </header>

      {/* Static Hero Section with Image */}
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('/slider3.jpg')", backgroundSize: "cover", backgroundPosition: "center -50px", minHeight: '80vh' }}>
        <div className="container mx-auto flex items-center h-full py-16"> {/* Reduced padding for slight upward movement */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Doctor<span className="text-blue-600"> Appointment</span> Online 
            </h1>
            <p className="text-lg mb-6 text-blue-600">
              A healthier tomorrow starts today
            </p>
            {/* Buttons Section */}
            <a 
              href="#" 
              className="relative inline-block bg-blue-600 text-white px-4 py-2 rounded overflow-hidden transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              <span className="absolute inset-0 bg-black transform translate-x-full transition duration-300 ease-in-out"></span>
              <span className="relative z-10">Get Appointment</span>
            </a>
            <a 
              href="#" 
              className="relative inline-block bg-blue-600 text-white px-4 py-2 rounded overflow-hidden transition duration-300 ease-in-out ml-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
            >
              <span className="absolute inset-0 bg-black transform translate-x-full transition duration-300 ease-in-out"></span>
              <span className="relative z-10">About Us</span>
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto p-5">
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Search for a Doctor</h2>
          <div className="bg-gray-100 p-5 rounded-lg shadow-md my-5">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <label htmlFor="date" className="block text-gray-700">Select Date & Time</label>
                <input 
                  type="date" 
                  id="date" 
                  className="mt-1 block w-full border-gray-300 rounded-md" 
                />
              </div>
              <div className="md:w-1/3 mb-4 md:mb-0 relative">
                <label htmlFor="search" className="block text-gray-700">Search Doctors</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <div className="p-2">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="search"
                    placeholder="Enter doctor’s name or specialty"
                    className="mt-1 block w-full rounded-md p-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How It Works!</h2>
          <div className="flex flex-col md:flex-row justify-around mt-5">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center">
              <h3 className="font-bold">1. Find A Doctor</h3>
              <p>Discover skilled doctors based on specialization and location.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center">
              <h3 className="font-bold">2. Book Appointment</h3>
              <p>Effortlessly book appointments at your convenience.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md text-center">
              <h3 className="font-bold">3. Get Services</h3>
              <p>Receive personalized healthcare services tailored to your needs.</p>
            </div>
          </div>
        </section>

        {/* New Features Section */}
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Features</h2>
          <div className="flex flex-col md:flex-row justify-around mt-5">
            <div className="single-features text-center bg-gray-100 p-5 rounded-lg shadow-md">
              <div className="single-icon mb-2">
                <i className="icofont icofont-ambulance-cross text-3xl text-blue-600"></i>
              </div>
              <h3>Emergency Help</h3>
              <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
            </div>
            {/* You can add more features similarly here */}
          </div>
        </section>
      </main>
    </div>
  )
}
