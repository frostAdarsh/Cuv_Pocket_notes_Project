import Note from "./Note";

const Notes = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note {...note} key={index} />
      ))}
    </div>
  );
};

export default Notes;
