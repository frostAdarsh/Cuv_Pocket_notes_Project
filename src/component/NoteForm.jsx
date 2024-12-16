import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedNoteText = noteText.trim();

    if (trimmedNoteText) {
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
        notes: trimmedNoteText,
        timesdate: formattedDate,
        times: formattedTime,
      };

      addNote(newNote);
      setNoteText("");
    } else {
      alert("Please enter some text.");
    }
  };

  return (
    <div className="note_form_container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="notes_input"
            type="text"
            value={noteText}
            placeholder="Enter your text here..."
            onChange={(e) => setNoteText(e.target.value.trimStart())}
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
