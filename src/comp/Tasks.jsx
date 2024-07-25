import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-box text-green-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      <p className="text-green-700 my-4">No Tasks</p>
      <ul></ul>
    </section>
  );
}
