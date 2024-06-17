interface ListItem {
  id: number;
  task: string;
}

interface Props {
  listItems: ListItem[];
  onDelete: (id: number) => void;
}

const ToDoItem = ({ listItems, onDelete }: Props) => {
  return (
    <>
      {listItems.map((item) => {
        return (
          <ul
            key={item.id}
            className="flex justify-between mx-auto max-w-80 mt-1 border border-black p-3 rounded-lg bg-emerald-600">
            <li className="inline-block   ">{item.task}</li>
            <button
              onClick={() => onDelete(item.id)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5  py-2.5 ">
              Delete
            </button>
          </ul>
        );
      })}
    </>
  );
};

export default ToDoItem;
