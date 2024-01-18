import { createContext, useEffect, useState } from "react";

export const SelectedListContext = createContext<{
  selectedList: IUser[];
  setSelectedList: (selectedList: IUser[]) => void;
  isHighlighted: number;
  setHighlighted: (isHighlighted: number) => void;
}>({
  selectedList: [],
  setSelectedList: (selectedList: IUser[]) => {},
  isHighlighted: 0,
  setHighlighted: (isHighlighted: number) => {},
});

interface IuseListProps {
  children: React.ReactNode;
}

interface IUser {
  id: number;
}

export const SelectedListProvider = ({ children }: IuseListProps) => {
  const [selectedList, setSelectedList] = useState<IUser[]>([]); // Explicitly type the state
  const [isHighlighted, setHighlighted] = useState(0);

  // When the isHighlighted state is 2, it means that the user has pressed the backspace button twice and
  //   the last user in the selectedList should be removed
  useEffect(() => {
    if (isHighlighted === 2) {
      let userid = selectedList[selectedList.length - 1];
      const newlist = selectedList.filter(
        (user: IUser) => user.id !== userid.id,
      );
      setSelectedList(newlist);
      setHighlighted(0);
    }
  }, [isHighlighted, selectedList]);

  const values = {
    selectedList,
    setSelectedList: (selectedList: IUser[]) => setSelectedList(selectedList),
    isHighlighted,
    setHighlighted: (isHighlighted: number) => setHighlighted(isHighlighted),
  };

  return (
    <SelectedListContext.Provider value={values}>
      {children}
    </SelectedListContext.Provider>
  );
};
