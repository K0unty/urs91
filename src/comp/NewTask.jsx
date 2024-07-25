export default function NewTask() {
  return (
    <div className="flex items center gap-4">
      <input type="text" className="w-64 px-2 py-2 rounded-sm bg-green-950" />
      <button className="text-green-300 hover:text-green-800 bg-orange-900 p-2">
        AddTask
      </button>
    </div>
  );
}
