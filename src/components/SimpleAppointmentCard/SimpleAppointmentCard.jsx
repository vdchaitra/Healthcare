import "./SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">

      <div className="simple-appointment-details">
        <h4 className="simple-appointment-title">{title}</h4>
        <div className="simple-appointment-time">{time}</div>
      </div>
            <div className="simple-appointment-icon">{icon}</div>
    </div>
  )
}

export default SimpleAppointmentCard
