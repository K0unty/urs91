import Button from "./Button.jsx";

export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-emerald-950 text-emerald-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-strone-200">
        Your PJs
      </h2>
      <div>
        <Button>+ AddPj</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
