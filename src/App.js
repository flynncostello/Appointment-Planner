import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  
  const [ contacts, setContacts ] = useState([]);
  /*
  [
    {
      name: "",
      phone: "",
      email: ""
    },
    ...
  ]
  */

  const [ appointments, setAppointments ] = useState([]);
  /*
  [
    {
      name: "",
      contactName: "",
      date: ""
      time: ""
    },
    ...
  ]
  */


  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const addAppointment = newAppointment => {
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  // index - used when route link exactly matches parent, e.g., / and will display that then
  // When we dont want a root page include line 23, replace is necessary as otherwise you will keep
  // going back to root and then being redirected to same page infinitely

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
