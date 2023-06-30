import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {

const {deleteTask} = useContext(TaskContext)

  const valor = useContext(TaskContext)
  console.log(valor);
  return (
      <div className="bg-gray-700 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-500 rounded-lg px-2 py-1 mt-4"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar Tarea
        </button>
      </div>
  );
}

export default TaskCard;
