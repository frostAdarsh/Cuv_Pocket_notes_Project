import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateFormatter = new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const currentDate = new Date();
    const formattedDate = dateFormatter.format(currentDate);
    const formattedTime = timeFormatter.format(currentDate);

    const newNote = {
      notes: notes,
      timesdate: `${formattedDate}`,
      times: `${formattedTime}`,
      
    };

    addNote(newNote);
    setNotes("");
  };

  return (
    <div className="note_form_container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="notes_input"
            type="text"
            value={notes}
            placeholder="Enter your text here..........."
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <button className="notes_btn" type="submit"></button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
