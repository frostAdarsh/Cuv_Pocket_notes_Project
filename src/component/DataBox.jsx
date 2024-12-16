import HeadingBox from "./HeadingBox";

const DataBox = ({ isGroupSelected, selectedGroup }) => {
  return (
    <div>
      {isGroupSelected && selectedGroup ? (
        <HeadingBox
          groupName={selectedGroup.groupName}
          selectedColor={selectedGroup.selectedColor}
        />
      ) : (
        <div className="DataBox_one">
          <div className="imageone"></div>
          <div className="usedetails">
            <p className="usedetails_one">Pocket Notes</p>
            <p className="usedetails_two">
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
          </div>
          <div className="ene">
            <div className="lock"></div>
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataBox;
