import "./AppointmentCard.css"

const AppointmentCard = ({ title, time, doctor, icon, color }) => {
  return (
    <div className={`appointment-card appointment-card-${color}`}>

      <div className="appointment-details">
        <h4 className="appointment-title">{title}</h4>
        <div className="appointment-time">{time}</div>
        <div className="appointment-doctor">{doctor}</div>
      </div>
            <div className="appointment-icon">{icon}</div>
    </div>
  )
}

export default AppointmentCard
