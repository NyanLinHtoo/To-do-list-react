import { useForm } from "react-hook-form";

interface formData {
  id: number;
  task: string;
}

interface Props {
  onSubmit: (data: formData) => void;
}

const ToDoList = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  return (
    <div className="mx-auto max-w-80 mt-32 border border-black p-3 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task", { required: true, minLength: 3 })}
          type="text"
          id="task"
          className=" border border-gray-300 text-sm rounded-lg  w-70 p-2.5 "
          placeholder="Enter Task"
        />
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm mx-6 px-5 py-2.5 mb-2">
          Add
        </button>
        {errors.task?.type === "required" && (
          <p className="text-red-500 text-sm">Task is required!</p>
        )}
      </form>
    </div>
  );
};

export default ToDoList;
