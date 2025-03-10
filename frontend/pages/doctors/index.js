import Header from "@/components/Header";
import Footer from '../../components/Footer';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function DoctorsPage({doctors}) {
  const r=useRouter()
  

  return (
    <>
    <main className="min-h-screen bg-white">
        <Header/>
      {/* Hero Section - 60vh height */}
      <section className="relative h-[60vh] bg-gradient-to-br from-white to-sky-100 overflow-hidden">
        <div className="container mx-auto px-4 h-full">
        

          <div className="flex items-center justify-between h-full pb-20">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0066cc] mb-6">
                Our Doctors
              </h1>
              <p className="text-gray-600 text-lg max-w-xl">
                Meet our team of experienced healthcare professionals dedicated to providing you with the best medical care.
              </p>
            </div>

            <div className="hidden md:block w-1/2">
              <Image
                src="/doctors.png"
                alt="Medical Team"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors List Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] relative bg-[#EBF5FF]">
                  <Image
                     src="/doc1.png"
                alt="Medical Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
                    {doctor.Name}
                   
                  </h3>
                  <p className="text-gray-500 mb-3 text-sm">{doctor.Specialization}</p>
                  <button onClick={()=>{r.push(`/doctors/doctorDetail/${doctor.DID}`)}} className="w-full bg-[#1977cc;] text-white py-2 px-6 rounded-full font-medium hover:bg-[#2DA8F0] transition-colors duration-300">
                    View Profile
                    
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}
export async function getStaticProps() {
  const result=await fetch('http://127.0.0.1:8000/getDoctor/')
  const data=await result.json()
  console.log(data);
 
return{
 props:{
      doctors:data.result
 }
}    
}

