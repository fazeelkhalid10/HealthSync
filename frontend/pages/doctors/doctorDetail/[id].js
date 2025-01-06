import Image from 'next/image';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';

export default function DoctorDetails({ doctor }) {
  if (!doctor) {
    return (
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <p>Doctor not found.</p>
      </div>
    );
  }
  const a=doctor.map((item)=>{
    console.log("chaman",item.DID)
    console.log("chaman",item.Name)
  })

  return (
    <>
      <Header />
    
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="bg-[#1977cc] text-white p-6">
            <h1 className="text-3xl font-bold">{doctor[0].Name}</h1>
            <p className="text-xl">{doctor[0].Specialization}</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src={doctor.image || "/doc1.png"} // Dynamically use the image URL
                  alt={doctor.Name}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-[#1977cc]"><span className="font-semibold">ID:</span> {doctor[0].DID}</p>
                <p className="text-[#1977cc]"><span className="font-semibold">Name:</span> {doctor[0].Name}</p>
                <p className="text-[#1977cc]"><span className="font-semibold">Experience:</span> {doctor[0].Specialization}</p>
                <p className="text-[#1977cc]"><span className="font-semibold">City:</span> {doctor[0].City}</p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#1977cc]">
                    <Phone size={18} />
                    <span>{doctor[0].Phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1977cc]">
                    <Mail size={18} />
                    <span>{doctor[0].Email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1977cc]">
                    <MapPin size={18} />
                    <span>{doctor[0].City}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Get the doctor ID from the URL
  try {
    const res = await fetch(`http://127.0.0.1:8000/getDoctorbyId/${id}/`);
    const data = await res.json();

    if (!data.result) {
      return {
        notFound: true, // Handle the case where no doctor is found
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
        doctor: null, // Return null if the fetch fails
      },
    };
  }
}
