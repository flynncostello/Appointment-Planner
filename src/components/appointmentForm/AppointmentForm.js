import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contactName,
  setContactName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Appointment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Appointment Name"
        />
      </label>

      <label>
        <select
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="Select Contact"
        >
          <option value="" disabled>No Contact Selected</option>
          {contacts.map((contact) => (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          defaultValue={getTodayString()}
        />
      </label>

      <label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>

      <input type="submit" value="Add Appointment" />
    </form>
  );
};

