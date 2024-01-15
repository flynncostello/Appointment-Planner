import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [ name, setName ] = useState("");
  const [ contactName, setContactName ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = {
      name: name,
      contactName: contactName,
      date: date,
      time: time
    };
    addAppointment(newAppointment);
    setName("");
    setContactName("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} name={name} setName={setName} contactName={contactName} setContactName={setContactName} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList content={appointments} />
      </section>
    </div>
  );
};