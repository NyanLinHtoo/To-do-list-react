import { useState } from "react";
import ToDoItem from "./component/ToDoList/ToDoItem";
import ToDoList from "./component/ToDoList/ToDoList";

const App = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      task: "Task1",
    },
    {
      id: 2,
      task: "Task2",
    },
  ]);

  const onDelete = (id: number) => {
    setListItems(listItems.filter((listItem) => listItem.id !== id));
  };

  return (
    <div>
      <ToDoList
        onSubmit={(listItem) =>
          setListItems([
            ...listItems,
            { ...listItem, id: listItems.length + 1 },
          ])
        }
      />
      <ToDoItem listItems={listItems} onDelete={onDelete} />
    </div>
  );
};

export default App;
