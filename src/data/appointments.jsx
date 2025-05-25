export const appointmentsData = {
  calendar: {
    month: "October 2021",
    days: [
      { day: "Mon", date: 25 },
      { day: "Tues", date: 26 },
      { day: "Wed", date: 27 },
      { day: "Thurs", date: 28 },
      { day: "Fri", date: 29 },
      { day: "Sat", date: 30 },
      { day: "Sun", date: 31 },
    ],
    timeSlots: [
      ["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"],
      ["11:00", "09:00", "—", "11:00", "14:00", "14:00", "10:00"],
      ["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"],
    ],
    appointments: [
      {
        title: "Dentist",
        time: "09:00-11:00",
        doctor: "Dr. Cameron Williamson",
        icon: "🦷",
        color: "primary",
      },
      {
        title: "Physiotherapy Appointment",
        time: "11:00-12:00",
        doctor: "Dr. Kevin Djones",
        icon: "🧠",
        color: "secondary",
      },
    ],
  },
  upcoming: {
    thursday: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "💉",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
    saturday: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
      },
    ],
  },
}
