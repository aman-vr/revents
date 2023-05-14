import React from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListAttendee({ attendee }) {
  return (
    <List.Item>
      <Image src={attendee.photoURL} size="mini" circular />
    </List.Item>
  );
}
