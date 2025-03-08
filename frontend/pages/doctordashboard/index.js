"use client"

import { useState } from "react"
import { useSession, getSession, signOut } from "next-auth/react"
import styles from "/styles/DashboardDoctor.module.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DataTable from "react-data-table-component"
import Image from "next/image"
import { Edit, LogOut, Calendar, Users, FileText, Settings, Clock, Plus, Trash2 } from "lucide-react"
import RoundClock from "@/components/round-clock"

// Define the component as a proper React functional component
const DoctorDashboard = ({ doctorData, appointments, patients }) => {
  const [activeTab, setActiveTab] = useState("home")
  const { data: session, status } = useSession()
  const [doctorInfo, setDoctorInfo] = useState(doctorData[0])

  const handleTabClick = (tab) => setActiveTab(tab)

  // Sample activity log data for doctor
  const activityLog = [
    { date: "2023-05-15", activity: "Patient appointment completed", details: "John Smith - Annual checkup" },
    { date: "2023-05-14", activity: "New patient registered", details: "Sarah Johnson" },
    { date: "2023-05-12", activity: "Treatment plan updated", details: "For patient: Michael Brown" },
    { date: "2023-05-10", activity: "Lab results reviewed", details: "Blood work for 3 patients" },
    { date: "2023-05-08", activity: "Schedule updated", details: "Added availability for next month" },
  ]

  const appointmentColumns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Patient",
      selector: (row) => row.patientName,
    },
    {
      name: "Type",
      selector: (row) => row.appointmentType,
    },
    {
      name: "Action",
      cell: () => (
        <button className={styles.actionButton} onClick={() => handleViewAppointment()}>
          View
        </button>
      ),
    },
  ]

  const patientColumns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Last Visit",
      selector: (row) => row.lastVisit,
    },
    {
      name: "Condition",
      selector: (row) => row.condition,
    },
    {
      name: "Action",
      cell: () => (
        <button className={styles.actionButton} onClick={() => handleViewPatient()}>
          View Profile
        </button>
      ),
    },
  ]

  const [startTime, setStartTime] = useState("09:00")
  const [dayOfWeek, setDayOfWeek] = useState("Monday")
  const [isAvailable, setIsAvailable] = useState(true)

  // Sample schedule data
  const [scheduleData, setScheduleData] = useState([
    { id: 1, day: "Monday", startTime: "09:00", endTime: "17:00", isAvailable: true },
    { id: 2, day: "Tuesday", startTime: "10:00", endTime: "18:00", isAvailable: true },
    { id: 3, day: "Wednesday", startTime: "09:00", endTime: "17:00", isAvailable: false },
    { id: 4, day: "Thursday", startTime: "08:00", endTime: "16:00", isAvailable: true },
    { id: 5, day: "Friday", startTime: "09:00", endTime: "15:00", isAvailable: true },
  ])

  function handleViewAppointment() {
    alert("Appointment Details")
  }

  function handleViewPatient() {
    alert("Patient Details")
  }

  function handleEditProfile() {
    alert("Edit Profile")
  }

  function handleEditPhoto() {
    alert("Edit Photo")
  }

  function handleSignOut() {
    signOut()
  }

  async function handleScheduleSubmit(e) {
    e.preventDefault()
  
    // Calculate end time (30 minutes after start time)
    const calculateEndTime = (startTimeStr) => {
      const [hours, minutes] = startTimeStr.split(":").map(Number)
      let endHours = hours
      let endMinutes = minutes + 30
  
      if (endMinutes >= 60) {
        endHours = (endHours + 1) % 24
        endMinutes = endMinutes - 60
      }
  
      return `${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}`
    }
  
    const endTime = calculateEndTime(startTime)
  
    // Create schedule data object
    const newScheduleItem = {
      doctorid: session.user.id,
      day: dayOfWeek,
      startTime,
      endTime,
      isAvailable,
    }
  
    console.log("Schedule data to be sent:", newScheduleItem)
  
    try {
      const response = await fetch("http://127.0.0.1:8000/insetschedule/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newScheduleItem),
      })
  
      const data = await response.json()
  
      if (response.ok) {
        setScheduleData([...scheduleData, newScheduleItem])
        alert("Schedule updated successfully! Time slot added for 30 minutes.")
        console.log("Server response:", data)
  
        // Reset form (optional)
        setStartTime("09:00")
        setDayOfWeek("Monday")
        setIsAvailable(true)
      } else {
        throw new Error(data.error || "Failed to update schedule")
      }
    } catch (error) {
      console.error("Error submitting schedule:", error)
      alert("Failed to update schedule. Please try again.")
    }
  }
  

  function handleDeleteSchedule(id) {
    // Filter out the item with the given id
    const updatedSchedule = scheduleData.filter((item) => item.id !== id)
    setScheduleData(updatedSchedule)
    alert("Schedule item deleted successfully!")
  }

  // Sample data for today's appointments
  const todaysAppointments = appointments
    ? appointments.filter((app) => new Date(app.date).toDateString() === new Date().toDateString())
    : []

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 style={{ color: "#1977cc", marginBottom: "20px" }}>Doctor Dashboard</h2>
          <ul className={styles.menu}>
            <li className={activeTab === "home" ? styles.active : ""} onClick={() => handleTabClick("home")}>
              <span className={styles.menuIcon}>
                <FileText size={18} />
              </span>
              Overview
            </li>
            <li
              className={activeTab === "appointments" ? styles.active : ""}
              onClick={() => handleTabClick("appointments")}
            >
              <span className={styles.menuIcon}>
                <Calendar size={18} />
              </span>
              Appointments
            </li>
            <li className={activeTab === "schedule" ? styles.active : ""} onClick={() => handleTabClick("schedule")}>
              <span className={styles.menuIcon}>
                <Clock size={18} />
              </span>
              Manage Schedule
            </li>
            <li className={activeTab === "patients" ? styles.active : ""} onClick={() => handleTabClick("patients")}>
              <span className={styles.menuIcon}>
                <Users size={18} />
              </span>
              Patients
            </li>
            <li className={activeTab === "treatment" ? styles.active : ""} onClick={() => handleTabClick("treatment")}>
              <span className={styles.menuIcon}>
                <FileText size={18} />
              </span>
              Treatment Plans
            </li>
            <li className={activeTab === "profile" ? styles.active : ""} onClick={() => handleTabClick("profile")}>
              <span className={styles.menuIcon}>
                <Settings size={18} />
              </span>
              Profile
            </li>
          </ul>
        </div>

        <div className={styles.content}>
          {activeTab === "home" && (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Welcome, Dr. {doctorInfo.name}</h3>
                <p>Here's a quick overview of your schedule and patient information.</p>

                <div className={styles.statsContainer}>
                  <div className={styles.statCard}>
                    <h4>Today's Appointments</h4>
                    <p className={styles.statNumber}>{todaysAppointments.length}</p>
                  </div>
                  <div className={styles.statCard}>
                    <h4>Total Patients</h4>
                    <p className={styles.statNumber}>{patients ? patients.length : 0}</p>
                  </div>
                  <div className={styles.statCard}>
                    <h4>Pending Reports</h4>
                    <p className={styles.statNumber}>5</p>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Today's Schedule</h3>
                {todaysAppointments.length > 0 ? (
                  <DataTable
                    columns={appointmentColumns}
                    data={todaysAppointments}
                    pagination
                    highlightOnHover
                    responsive
                    paginationPerPage={5}
                  />
                ) : (
                  <p>No appointments scheduled for today.</p>
                )}
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Recent Activity</h3>
                <ul className={styles.activityLog}>
                  {activityLog.map((activity, index) => (
                    <li key={index} className={styles.activityItem}>
                      <div className={styles.activityDate}>{activity.date}</div>
                      <div className={styles.activityContent}>
                        <strong>{activity.activity}</strong>
                        <p>{activity.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {activeTab === "appointments" && (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Upcoming Appointments</h3>
                {appointments ? (
                  <DataTable
                    columns={appointmentColumns}
                    data={appointments}
                    pagination
                    highlightOnHover
                    responsive
                    paginationPerPage={10}
                  />
                ) : (
                  <p>No appointments scheduled.</p>
                )}
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Schedule Management</h3>
                <div className={styles.scheduleActions}>
                  <button className={styles.actionButton}>Set Availability</button>
                  <button className={styles.actionButton}>Block Time Off</button>
                  <button className={styles.actionButton}>View Calendar</button>
                </div>
              </div>
            </>
          )}

          {activeTab === "schedule" && (
            <div className={styles.schedulePageContainer}>
              <div className={styles.scheduleColumn}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>
                    <Clock className={styles.cardTitleIcon} />
                    Manage Your Schedule
                  </h3>
                  <p className={styles.cardDescription}>Set your availability for patient appointments.</p>

                  <form onSubmit={handleScheduleSubmit} className={styles.scheduleForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="dayOfWeek">Day of Week:</label>
                      <select
                        id="dayOfWeek"
                        value={dayOfWeek}
                        onChange={(e) => setDayOfWeek(e.target.value)}
                        className={styles.formSelect}
                      >
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="startTime">Start Time:</label>
                      <input
                        type="time"
                        id="startTime"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className={styles.formInput}
                      />
                      <small className={styles.helpText}>Appointments are scheduled in 30-minute slots</small>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={isAvailable}
                          onChange={(e) => setIsAvailable(e.target.checked)}
                        />
                        Available for appointments
                      </label>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      <Plus size={16} />
                      Add Schedule
                    </button>
                  </form>
                </div>

                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Current Schedule</h3>
                  <div className={styles.tableContainer}>
                    <table className={styles.scheduleTable}>
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleData.map((item) => (
                          <tr key={item.id} className={!item.isAvailable ? styles.unavailableRow : ""}>
                            <td>{item.day}</td>
                            <td>{item.startTime}</td>
                            <td>{item.endTime}</td>
                            <td>
                              <span className={item.isAvailable ? styles.availableBadge : styles.unavailableBadge}>
                                {item.isAvailable ? "Available" : "Unavailable"}
                              </span>
                            </td>
                            <td>
                              <div className={styles.actionButtons}>
                                <button className={styles.editButton}>
                                  <Edit size={14} />
                                </button>
                                <button className={styles.deleteButton} onClick={() => handleDeleteSchedule(item.id)}>
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className={styles.clockColumn}>
                <div className={styles.card}>
                  <RoundClock timeSlots={scheduleData} selectedDay={dayOfWeek} />
                </div>

                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Schedule Tips</h3>
                  <ul className={styles.tipsList}>
                    <li>Set consistent hours to help patients remember your availability</li>
                    <li>Block off time for administrative tasks and breaks</li>
                    <li>Consider offering early morning or evening slots for working patients</li>
                    <li>Reserve specific days for certain types of appointments</li>
                    <li>Update your schedule at least one month in advance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Your Patients</h3>
                {patients ? (
                  <DataTable
                    columns={patientColumns}
                    data={patients}
                    pagination
                    highlightOnHover
                    responsive
                    paginationPerPage={10}
                    subHeader
                    subHeaderComponent={
                      <input type="text" placeholder="Search patients..." className={styles.searchInput} />
                    }
                  />
                ) : (
                  <p>No patients assigned.</p>
                )}
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Patient Management</h3>
                <div className={styles.scheduleActions}>
                  <button className={styles.actionButton}>Add New Patient</button>
                  <button className={styles.actionButton}>Import Patient Records</button>
                  <button className={styles.actionButton}>Generate Reports</button>
                </div>
              </div>
            </>
          )}

          {activeTab === "treatment" && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Treatment Plans</h3>
              <div className={styles.treatmentPlans}>
                <div className={styles.appointmentCard}>
                  <h4>John Smith - Hypertension Management</h4>
                  <p>Started: May 10, 2023</p>
                  <p>Duration: 6 months</p>
                  <p>Status: In Progress</p>
                  <button className={styles.actionButton}>View Details</button>
                </div>

                <div className={styles.appointmentCard}>
                  <h4>Sarah Johnson - Diabetes Management</h4>
                  <p>Started: April 15, 2023</p>
                  <p>Duration: 12 months</p>
                  <p>Status: In Progress</p>
                  <button className={styles.actionButton}>View Details</button>
                </div>

                <div className={styles.appointmentCard}>
                  <h4>Michael Brown - Post-Surgery Recovery</h4>
                  <p>Started: June 1, 2023</p>
                  <p>Duration: 3 months</p>
                  <p>Status: In Progress</p>
                  <button className={styles.actionButton}>View Details</button>
                </div>
              </div>

              <div className={styles.scheduleActions} style={{ marginTop: "20px" }}>
                <button className={styles.actionButton}>Create New Plan</button>
                <button className={styles.actionButton}>View Templates</button>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className={styles.profileContainer}>
              <div className={styles.profileCard}>
                <div className={styles.profileImageContainer}>
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className={styles.profileImage}
                  />
                  <button className={styles.editPhotoButton} onClick={handleEditPhoto}>
                    <Edit size={16} />
                  </button>
                </div>
                <h3>Dr. {doctorInfo.name}</h3>
                <p>{doctorInfo.specialty}</p>
                <p>{doctorInfo.email}</p>
              </div>
              <div className={styles.profileDetails}>
                <h3 className={styles.cardTitle}>Your Profile</h3>
                <div className={styles.profileInfo}>
                  <p>
                    <strong>Name:</strong> Dr. {doctorInfo.name}
                  </p>
                  <p>
                    <strong>Specialty:</strong> {doctorInfo.specialty}
                  </p>
                  <p>
                    <strong>Email:</strong> {doctorInfo.email}
                  </p>
                  <p>
                    <strong>License Number:</strong> {doctorInfo.licenseNumber}
                  </p>
                  <p>
                    <strong>Phone:</strong> {doctorInfo.phone}
                  </p>
                  <p>
                    <strong>Office Address:</strong> {doctorInfo.address}
                  </p>
                </div>
                <button className={styles.actionButton} onClick={handleEditProfile}>
                  Edit Profile
                </button>
              </div>

              <div className={styles.profileDetails}>
                <h3 className={styles.cardTitle}>Professional Information</h3>
                <div className={styles.profileInfo}>
                  <p>
                    <strong>Education:</strong> {doctorInfo.education}
                  </p>
                  <p>
                    <strong>Experience:</strong> {doctorInfo.experience} years
                  </p>
                  <p>
                    <strong>Languages:</strong> {doctorInfo.languages}
                  </p>
                  <p>
                    <strong>Certifications:</strong> {doctorInfo.certifications}
                  </p>
                </div>
                <button className={styles.actionButton}>Update Information</button>
              </div>

              <button className={styles.signOutButton} onClick={handleSignOut}>
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

// Server-side props with hardcoded data
export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session || !session.user || session.user.role !== "doctor") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  // Hardcoded sample data
  const doctorData = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Cardiologist",
      email: "dr.johnson@example.com",
      licenseNumber: "MD12345678",
      phone: "(555) 123-4567",
      address: "123 Medical Center Blvd, Suite 400",
      education: "Harvard Medical School",
      experience: 12,
      languages: "English, Spanish",
      certifications: "American Board of Internal Medicine, Cardiovascular Disease",
    },
  ]

  // Create dates relative to current date for realistic data
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfterTomorrow = new Date(today)
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  const nextWeek = new Date(today)
  nextWeek.setDate(nextWeek.getDate() + 7)

  // Format dates as strings
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]
  }

  const appointments = [
    {
      id: 1,
      date: formatDate(today),
      time: "09:00 AM",
      patientName: "John Smith",
      patientId: 101,
      appointmentType: "Follow-up",
      notes: "Blood pressure check",
    },
    {
      id: 2,
      date: formatDate(today),
      time: "11:30 AM",
      patientName: "Emily Davis",
      patientId: 102,
      appointmentType: "New Patient",
      notes: "Initial consultation",
    },
    {
      id: 3,
      date: formatDate(tomorrow),
      time: "10:15 AM",
      patientName: "Michael Brown",
      patientId: 103,
      appointmentType: "Follow-up",
      notes: "Post-surgery check",
    },
    {
      id: 4,
      date: formatDate(tomorrow),
      time: "02:00 PM",
      patientName: "Lisa Wilson",
      patientId: 104,
      appointmentType: "Urgent",
      notes: "Chest pain evaluation",
    },
    {
      id: 5,
      date: formatDate(dayAfterTomorrow),
      time: "09:30 AM",
      patientName: "Robert Taylor",
      patientId: 105,
      appointmentType: "Follow-up",
      notes: "Medication review",
    },
    {
      id: 6,
      date: formatDate(nextWeek),
      time: "11:00 AM",
      patientName: "Jennifer Martinez",
      patientId: 106,
      appointmentType: "Annual",
      notes: "Yearly physical",
    },
  ]

  const patients = [
    {
      id: 101,
      name: "John Smith",
      age: 45,
      gender: "Male",
      lastVisit: "2023-05-10",
      condition: "Hypertension",
      email: "john.smith@example.com",
      phone: "(555) 111-2222",
    },
    {
      id: 102,
      name: "Emily Davis",
      age: 32,
      gender: "Female",
      lastVisit: "2023-05-15",
      condition: "Pregnancy",
      email: "emily.davis@example.com",
      phone: "(555) 222-3333",
    },
    {
      id: 103,
      name: "Michael Brown",
      age: 58,
      gender: "Male",
      lastVisit: "2023-05-05",
      condition: "Post-surgery",
      email: "michael.brown@example.com",
      phone: "(555) 333-4444",
    },
    {
      id: 104,
      name: "Lisa Wilson",
      age: 50,
      gender: "Female",
      lastVisit: "2023-05-12",
      condition: "Chest pain",
      email: "lisa.wilson@example.com",
      phone: "(555) 444-5555",
    },
    {
      id: 105,
      name: "Robert Taylor",
      age: 67,
      gender: "Male",
      lastVisit: "2023-04-28",
      condition: "Diabetes",
      email: "robert.taylor@example.com",
      phone: "(555) 555-6666",
    },
    {
      id: 106,
      name: "Jennifer Martinez",
      age: 29,
      gender: "Female",
      lastVisit: "2023-03-15",
      condition: "Annual checkup",
      email: "jennifer.martinez@example.com",
      phone: "(555) 666-7777",
    },
    {
      id: 107,
      name: "David Anderson",
      age: 41,
      gender: "Male",
      lastVisit: "2023-04-10",
      condition: "Allergies",
      email: "david.anderson@example.com",
      phone: "(555) 777-8888",
    },
    {
      id: 108,
      name: "Sarah Thompson",
      age: 35,
      gender: "Female",
      lastVisit: "2023-05-01",
      condition: "Migraines",
      email: "sarah.thompson@example.com",
      phone: "(555) 888-9999",
    },
  ]

  return {
    props: {
      doctorData,
      appointments,
      patients,
    },
  }
}

// Make sure to export the component as default
export default DoctorDashboard

