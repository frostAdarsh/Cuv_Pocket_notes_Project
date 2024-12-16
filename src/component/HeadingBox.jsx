import { useState } from "react";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

const HeadingBox = ({ groupName, selectedColor }) => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((pre) => [...pre, newNote]);
  };
  const getInitials = (groupName) => {
    const words = groupName.split(" ");
    if (words.length === 1) {
      return words[0].slice(0, 1).toUpperCase();
    }
    return words.map((word) => word.slice(0, 1).toUpperCase()).join("");
  };

  const initials = getInitials(groupName);
  return (
    <div className="box">
      <div className="heading_box">
        <div
          className="heading_box_one"
          style={{
            width: "4.5rem",
            height: "4.5rem",
            backgroundColor: selectedColor,
          }}
        >
          {initials}
        </div>
        <span className="heading_group_name">{groupName}</span>
      </div>
      <div className="heading_box_two">
        <Notes notes={notes} />
      </div>
      <div className="heading_box_three">
        <NoteForm addNote={addNote} />
      </div>
    </div>
  );
};

export default HeadingBox;
