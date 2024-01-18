import { useContext, useEffect, useState } from "react";
import { SelectedListContext } from "../../Context/Selected.context";
import "./selectedList.styles.scss";
import Userchip from "../userChip/userChip.component";

const SelectedList = () => {
  const { selectedList, isHighlighted } = useContext(SelectedListContext);
  const [highlightedStatus, setHighlightedStatus] = useState(false);

  // Sets the highlighted status to true when the user clicks on the backspace button Once
  useEffect(() => {
    setHighlightedStatus(false);
    if (isHighlighted === 1) {
      setHighlightedStatus(true);
    } else {
      setHighlightedStatus(false);
    }
  }, [isHighlighted]);

  return (
    <>
      {selectedList.map((user: any, index: number) => (
        <Userchip
          user={user}
          highlightedStatus={
            index === selectedList.length - 1 && highlightedStatus
          }
        />
      ))}
    </>
  );
};

export default SelectedList;
