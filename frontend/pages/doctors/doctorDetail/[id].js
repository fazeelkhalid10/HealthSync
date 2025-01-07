'use client'

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Phone, Mail, MapPin, Star, Award, Stethoscope, CalendarIcon } from 'lucide-react'

export default function DoctorDetails({ doctor }) {
  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 flex items-center justify-center">
        <p>Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <div className="bg-[#1977cc] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={doctor[0].image || "/doc1.png"}
                  alt={doctor[0].Name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4 text-center md:text-left">
              <div className="bg-gray-700/20 px-4 py-2 rounded-md">
                {doctor[0].Specialization}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{doctor[0].Name}</h1>
              <p className="text-xl opacity-90">ID: {doctor[0].DID}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                  <Star className="w-4 h-4" />
                  4.9 Rating
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                  <Award className="w-4 h-4" />
                  15+ Years Experience
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
                  <Stethoscope className="w-4 h-4" />
                  2000+ Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-[#1977cc]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{doctor[0].Phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-[#1977cc]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{doctor[0].Email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#1977cc]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{doctor[0].City}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">Working Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-sm font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-sm font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. {doctor[0].Name} is a highly qualified {doctor[0].Specialization} specialist with extensive experience in the field. 
                Based in {doctor[0].City}, they have helped numerous patients with various dermatological conditions and are committed 
                to providing the highest quality of care.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold border-b pb-2 mb-6">Book Appointment</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button className="w-full py-6" variant="outline">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Visit
                </Button>
                <Button className="w-full py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4">Specializations</h2>
              <div className="flex flex-wrap gap-2">
                <div className="bg-blue-100/80 px-4 py-2 rounded-md text-[#1977cc]">Dermatology</div>
                <div className="bg-blue-100/80 px-4 py-2 rounded-md text-[#1977cc]">Skin Care</div>
                <div className="bg-blue-100/80 px-4 py-2 rounded-md text-[#1977cc]">Cosmetic Dermatology</div>
                <div className="bg-blue-100/80 px-4 py-2 rounded-md text-[#1977cc]">Laser Treatment</div>
                <div className="bg-blue-100/80 px-4 py-2 rounded-md text-[#1977cc]">Acne Treatment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://127.0.0.1:8000/getDoctorbyId/${id}/`);
    const data = await res.json();

    if (!data.result) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        doctor: data.result,
      },
    };
  } catch (error) {
    console.error('Error fetching doctor data:', error);
    return {
      props: {
        doctor: null,
      },
    };
  }
}

