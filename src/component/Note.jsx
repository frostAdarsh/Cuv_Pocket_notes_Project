const Note = ({ notes, timesdate, times }) => {
    return (
      <div className="show_notes">
        <div>{notes}</div>
        <div className="time_st">
          <div className="time_flex">
            <div className="time_show">{timesdate}</div>
            <div className="time_show">.</div>
            <div className="time_show">{times}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Note;
  