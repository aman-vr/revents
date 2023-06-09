import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description> Hosted by {event.hostedBy} </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div> {event.description}</div>
        <br></br>
        <Button
          color="teal"
          floated="left"
          content="View"
          as = {Link} to={`/events/${event.id}`}
        />
        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => deleteEvent(event.id)}
        />
      </Segment>
    </Segment.Group>
  );
}
