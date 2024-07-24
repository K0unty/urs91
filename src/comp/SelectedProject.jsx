export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[35] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-cyan-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-lime-700 mb-2">
            {project.title}
          </h1>
          <button className="text=stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-lime-400">{formattedDate}</p>
        <p className="text-lime-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}
