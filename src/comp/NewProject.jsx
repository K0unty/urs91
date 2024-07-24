import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 bg-cyan-950">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="bg-cyan-500 p-2 text-cyan-800 hover:text-cyan-950">
            Cancel
          </button>
        </li>
        <li>
          <button className=" px-6 py-2 rounded -md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="DueDate" />
      </div>
    </div>
  );
}
