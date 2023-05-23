import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

export default function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
      </Routes>
      <NavBar />
      <Container className="main">
        <Routes>
          <Route exact path="/events" Component={EventDashboard} />
          <Route path="/events/:id" Component={EventDetailedPage} />
          <Route path="/createEvent" Component={EventForm} />
          {/* <Route path={["/createEvent", "/manage/:id"]} Component={EventForm} /> */}
        </Routes>
      </Container>
    </>
  );
}
