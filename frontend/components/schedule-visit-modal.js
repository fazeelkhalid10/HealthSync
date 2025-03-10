import { useState, useEffect, useRef } from 'react'
import { Calendar, X } from 'lucide-react'

export function ScheduleVisitModal({ isOpen, onClose, doctorId, doctorName }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [appointmentType, setAppointmentType] = useState("")
  const [time, setTime] = useState("")
  const [comment, setComment] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Custom date formatting functions
  const formatMonthYear = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const formatFullDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    
    const day = date.getDate()
    let suffix = 'th'
    if (day === 1 || day === 21 || day === 31) suffix = 'st'
    else if (day === 2 || day === 22) suffix = 'nd'
    else if (day === 3 || day === 23) suffix = 'rd'
    
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${day}${suffix}, ${date.getFullYear()}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Here you would typically send this data to your API
    const appointmentData = {
      doctorId,
      date: selectedDate,
      appointmentType,
      time,
      comment
    }
    
    console.log('Appointment data:', appointmentData)
    
    // Reset form and close modal
    setSelectedDate(null)
    setAppointmentType("")
    setTime("")
    setComment("")
    onClose()
    
    // You could show a success message here
    alert('Appointment scheduled successfully!')
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
    return date1.getFullYear() === date2.getFullYear() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getDate() === date2.getDate()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#1977cc]">
            Schedule Visit with Dr. {doctorName}
          </h2>
          <button 
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Select Date</label>
            
            {/* Custom Calendar */}
            <div className="border rounded-md p-3">
              <div className="flex justify-between items-center mb-4">
                <button 
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  &lt;
                </button>
                <div className="font-medium">
                  {formatMonthYear(currentMonth)}
                </div>
                <button 
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  &gt;
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-xs font-medium text-gray-500 p-1">
                    {day}
                  </div>
                ))}
                
                {generateCalendarDays().map((date, index) => (
                  <div 
                    key={index}
                    className={`
                      p-1 text-center text-sm rounded-md
                      ${!date ? 'invisible' : ''}
                      ${isDateDisabled(date) ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'}
                      ${selectedDate && date && areDatesEqual(selectedDate, date) ? 'bg-[#1977cc] text-white hover:bg-[#1977cc]' : ''}
                    `}
                    onClick={() => handleDateClick(date)}
                  >
                    {date ? date.getDate() : ''}
                  </div>
                ))}
              </div>
            </div>
            
            {selectedDate && (
              <div className="text-sm text-gray-600 mt-2">
                Selected: {formatFullDate(selectedDate)}
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1977cc]"
            >
              <option value="" disabled>Select appointment type</option>
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
              <option value="" disabled>Select time slot</option>
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
              onClick={onClose}
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
  )
}
