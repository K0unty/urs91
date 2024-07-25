import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-box text-green-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p className="text-rose-700 my-4">No Tasks</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-green-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="transition-all text-green-700 hover:text-rose-500 ">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
