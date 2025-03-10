"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Mail, MapPin, Star, Award, Stethoscope, X } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DoctorDetails({ doctor }) {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [appointmentType, setAppointmentType] = useState("")
  const [time, setTime] = useState("")
  const [comment, setComment] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target) && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Custom date formatting functions
  const formatMonthYear = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const formatFullDate = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const day = date.getDate()
    let suffix = "th"
    if (day === 1 || day === 21 || day === 31) suffix = "st"
    else if (day === 2 || day === 22) suffix = "nd"
    else if (day === 3 || day === 23) suffix = "rd"

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${day}${suffix}, ${date.getFullYear()}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Here you would typically send this data to your API
    const appointmentData = {
      doctorId: doctor[0].DID,
      date: selectedDate,
      appointmentType,
      time,
      comment,
    }

    console.log("Appointment data:", appointmentData)

    // Reset form and close modal
    setSelectedDate(null)
    setAppointmentType("")
    setTime("")
    setComment("")
    setIsModalOpen(false)

    // You could show a success message here
    alert("Appointment scheduled successfully!")
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // Get first day of month and last day of month
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)

    // Get day of week for first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay()

    // Create array of days
    const days = []

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i)
      days.push(date)
    }

    return days
  }

  const isDateDisabled = (date) => {
    if (!date) return true

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Disable past dates and Sundays
    return date < today || date.getDay() === 0
  }

  const handleDateClick = (date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date)
    }
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const areDatesEqual = (date1, date2) => {
    if (!date1 || !date2) return false
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 flex items-center justify-center">
        <p>Doctor not found.</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {/* Hero Section */}
          <div className="bg-[#1977cc] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image src={doctor[0].image || "/doc1.png"} alt={doctor[0].Name} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-center md:text-left">
                  <div className="bg-gray-700/20 px-4 py-2 rounded-md">{doctor[0].Specialization}</div>
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
                    Dr. {doctor[0].Name} is a highly qualified {doctor[0].Specialization} specialist with extensive
                    experience in the field. Based in {doctor[0].City}, they have helped numerous patients with various
                    dermatological conditions and are committed to providing the highest quality of care.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold border-b pb-2 mb-6">Book Appointment</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button className="w-full py-6" variant="outline" onClick={() => setIsModalOpen(true)}>
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
      </main>
      <Footer />

      {/* Schedule Visit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-[#1977cc]">Schedule Visit with Dr. {doctor[0].Name}</h2>
              <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Select Date</label>

                {/* Custom Calendar */}
                <div className="border rounded-md p-3">
                  <div className="flex justify-between items-center mb-4">
                    <button type="button" onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded">
                      &lt;
                    </button>
                    <div className="font-medium">{formatMonthYear(currentMonth)}</div>
                    <button type="button" onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded">
                      &gt;
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div key={day} className="text-xs font-medium text-gray-500 p-1">
                        {day}
                      </div>
                    ))}

                    {generateCalendarDays().map((date, index) => (
                      <div
                        key={index}
                        className={`
                          p-1 text-center text-sm rounded-md
                          ${!date ? "invisible" : ""}
                          ${isDateDisabled(date) ? "text-gray-300 cursor-not-allowed" : "cursor-pointer hover:bg-gray-100"}
                          ${selectedDate && date && areDatesEqual(selectedDate, date) ? "bg-[#1977cc] text-white hover:bg-[#1977cc]" : ""}
                        `}
                        onClick={() => handleDateClick(date)}
                      >
                        {date ? date.getDate() : ""}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="text-sm text-gray-600 mt-2">Selected: {formatFullDate(selectedDate)}</div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1977cc]"
                >
                  <option value="" disabled>
                    Select appointment type
                  </option>
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="treatment">Treatment</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1977cc]"
                >
                  <option value="" disabled>
                    Select time slot
                  </option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
                <textarea
                  placeholder="Please describe your symptoms or reason for visit"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1977cc]"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1977cc] text-white rounded-md hover:bg-[#166bb9] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedDate || !appointmentType || !time}
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params

  try {
    const res = await fetch(`http://127.0.0.1:8000/getDoctorbyId/${id}/`)
    const data = await res.json()

    if (!data.result) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        doctor: data.result,
      },
    }
  } catch (error) {
    console.error("Error fetching doctor data:", error)
    return {
      props: {
        doctor: null,
      },
    }
  }
}

