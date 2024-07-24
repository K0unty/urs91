import Button from "./Button.jsx";

export default function NoPjelected() {
  const imageURL = "https://i.ibb.co/SQnN72Q/17943510.webp";
  return (
    <div className="mt-24 text-center w-2/3 bg-rose-900">
      <img src={imageURL} className="w-30 h-30 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my4">
        No project Selected{" "}
      </h2>
      <p className="text-stone-400 mb-4">Select project or get started</p>
      <p className="mt-8">
        <Button>Create New</Button>
      </p>
    </div>
  );
}
