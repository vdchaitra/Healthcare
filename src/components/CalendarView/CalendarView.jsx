import { appointmentsData } from "../../data/appointments";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import "./CalendarView.css";

const CalendarView = () => {
  const { calendar } = appointmentsData;

  // Let's assume Tuesday (index 1) is selected
  const selectedDayIndex = 1;

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3 className="calendar-title">{calendar.month}</h3>
        <div className="calendar-nav">
          <button className="nav-button">‹</button>
          <button className="nav-button">›</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days">
          {calendar.days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                index === selectedDayIndex ? "active-day" : ""
              }`}
            >
              <div className="day-name">{day.day}</div>
              <div className="day-number">{day.date}</div>
            </div>
          ))}
        </div>

        <div className="calendar-times">
          {calendar.timeSlots.map((row, rowIndex) => (
            <div key={rowIndex} className="time-row">
              {row.map((time, colIndex) => {
                const isActive =
                  (rowIndex === 1 && colIndex === 1) ||(rowIndex === 1 && colIndex === 3) ||
                  (rowIndex === 0 && colIndex === 5) ||(rowIndex === 0 && colIndex === 6);

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`time-slot ${isActive ? "time-slot-active" : ""}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {calendar.appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            title={appointment.title}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
