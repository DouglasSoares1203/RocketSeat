"use client";
import { PlusCircle } from "phosphor-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./TaskList";
import clipboard from "@/app/assets/Clipboard.svg";

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [taskCompleteds, setTasksCompleteds] = useState(0);
  const [tasksTotal, setTasksTotal] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setTasksTotal(tasksTotal + 1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Por favor, digite a tarefa");
  }

  function handleTogleIsCompleted(id: string) {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;
    taskToToggle.isCompleted = !taskToToggle.isCompleted;
    setTasks([...tasks]);
    setTasksCompleteds(tasks.filter((task) => task.isCompleted).length);
  }

  function handleDeleteTask(taskToDelete: String) {
    const tasksWithoutDeleteOne = tasks.filter(
      (task) => task.id !== taskToDelete
    );
    setTasks(tasksWithoutDeleteOne);

    setTasksCompleteds(
      tasksWithoutDeleteOne.filter((task) => task.isCompleted).length
    );
    setTasksTotal(tasksTotal - 1);
  }

  return (
    <>
      <div className=" justify-center">
        <header className=" bg-transparent">
          <form onSubmit={handleCreateNewTask} className="gap-2 flex p-2">
            <textarea
              className=" w-full bg-slate-500 border-0 resize-none h-14 border-r-8 text-gray-100 leading-6 p-4  overflow-hidden"
              name="task"
              placeholder="Adicione uma nova tarefa"
              value={newTaskTitle}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button
              type="submit"
              className=" flex p-4 py-4 border-r-8 border-0 bg-blue-950 text-gray-100 font-bold cursor-pointer gap-2 items-center transition duration-500 ease-in-out hover:bg-blue-400  content-center"
            >
              Criar
              <PlusCircle size={24} />
            </button>
          </form>
        </header>

        <div>
          <header className=" flex m-24 mx-auto my-6 bg-transparent justify-between">
            <p className=" text-blue-500 font-bold text-sm">
              Tarefas criadas {tasksTotal}
            </p>
            <p className=" text-blue-50 font-bold text-sm">
              Concluidas{taskCompleteds} de {tasksTotal}
            </p>
          </header>
          <hr className=" border-none font-bold text-sm" />
        </div>

        <div className=" text-blue-50 font-bold text-sm ">
          {tasks.length > 0 &&
            tasks.map((task) => {
              return (
                <TaskList
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isCompleted={task.isCompleted}
                  onDeleteTask={handleDeleteTask}
                  onToggleIsCompleted={handleTogleIsCompleted}
                />
              );
            })}

          {tasks.length === 0 && (
            <div className=" flex flex-col items-center text-gray-300">
              <Image
                className=" w-14 m-16 mx-0 my-4"
                src={clipboard}
                alt="Logo do Desafio 01 -  ToDo"
              />
              <strong className=" text-blue-500">
                Você ainda não tem tarefas cadastradas
              </strong>
              <span className=" text-blue-500">
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
