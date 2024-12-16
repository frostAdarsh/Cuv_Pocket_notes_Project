import { useEffect, useState } from "react";
import DataBox from "./DataBox";
import EnterName from "./EnterName";

const SlideBox = () => {
  const [isPop, setIsPop] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleOpenPop = () => {
    setIsPop(true);
  };

  const handleClose = () => {
    setIsPop(false);
    refreshGroups();
  };

  const refreshGroups = () => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  };

  useEffect(() => {
    refreshGroups();
  }, []);

  const handleNameBoxClick = (group) => {
    setSelectedGroup((prevSelectedGroup) =>
      prevSelectedGroup?.groupName === group.groupName ? null : group
    );
  };

  const getInitials = (groupName) => {
    const words = groupName.split(" ");
    if (words.length === 1) {
      return words[0].slice(0, 1).toUpperCase();
    }
    return words.map((word) => word.slice(0, 1).toUpperCase()).join("");
  };

  return (
    <>
      <div className="slideBox_one">
        <div className="logo">
          <p className="logo_word">Pocket Notes</p>
        </div>
        <div className="namebox">
          {groups.map((group, index) => (
            <div
              key={index}
              className="nameboxone"
              onClick={() => handleNameBoxClick(group)}
            >
              <div
                className="nameboxtwo"
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  backgroundColor: group.selectedColor,
                }}
              >
                {getInitials(group.groupName)}
              </div>
              <span className="text_group_name">{group.groupName}</span>
            </div>
          ))}
        </div>

        <div className="upper">
          <button
            className="circle"
            onClick={handleOpenPop}
            aria-label="Add Group"
          >
            <p>+</p>
          </button>
        </div>
        {isPop && <EnterName handleClose={handleClose} />}
      </div>
      <div>
        <DataBox
          isGroupSelected={!!selectedGroup}
          selectedGroup={selectedGroup}
        />
      </div>
    </>
  );
};

export default SlideBox;
