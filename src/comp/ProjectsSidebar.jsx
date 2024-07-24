export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-emerald-950 text-emerald-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-strone-200">
        Your PJs
      </h2>
      <div>
        <button className="px-4 py-2 texct-xs md:text-base rounded-md bg-orange-950  text-orange-500 hover:bg-orange-600 hover:text-orange-100">
          + AddPj
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
