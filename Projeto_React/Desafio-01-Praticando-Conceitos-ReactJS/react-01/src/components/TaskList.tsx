import { Trash } from 'phosphor-react'


interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onToggleIsCompleted: (id: string) => void;
}

export function TaskList({
  id,
  title,
  isCompleted,
  onDeleteTask,
  onToggleIsCompleted,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTogleIsCompleted() {
    onToggleIsCompleted(id);
  }

  return (
    <>
      <div
        key={id}
        className=" grid columns-sm justify-between bg-gray-500 mb-3 p-4 border-r-8 "
      >
        <div className=" content-normal block">
          <input
            type="checkbox"
            checked={isCompleted}
            readOnly
            onClick={handleTogleIsCompleted}
            className=' content-normal absolute bg-gray-500'
          />
        </div>
        <p
          className={`${
            isCompleted
              ? " leading-6 text-sm font-normal m-0 my-2 text-gray-300 line-through"
              : "leading-6 text-sm font-normal m-0 my-2 text-gray-100"
          }`}
        >
          {title}
        </p>
        <button
          type="button"
          className=" bg-transparent border-0 text-gray-300 cursor-pointer leading-0 border-r-4 p-1 hover:text-red-700 bg-gray-400"
          onClick={handleDeleteTask}
          title="Deletar comentário"
        >
          <Trash size={30}/>
        </button>
      </div>
    </>
  );
}
