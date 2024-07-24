import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-emerald-950 text-emerald-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-strone-200">
        Your PJs
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ AddPj</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-cyan-200 hover:bg-cyan-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-cyan-800 text-cyan-200";
          } else {
            cssClasses += " text-cyan-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
