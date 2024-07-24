import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      decription: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-rose-500 mt-4 my4">
          ❌❌Bastard NoInput❌❌
        </h2>
        <p className="text-rose-400 mb-4">😡Fucker No Value Entered..😡</p>
        <p className="text-rose-400 mb-4">
          Put Value in all field, BastardFukr
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 bg-cyan-950">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="bg-cyan-500 p-2 text-cyan-800 hover:text-cyan-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded -md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="DueDate" />
        </div>
      </div>
    </>
  );
}
