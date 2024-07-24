import NewProject from "./comp/NewProject.jsx";
import NoPjelected from "./comp/NoPJSelected.jsx";
import ProjectsSidebar from "./comp/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-1 bg-fixed bg-no-repeat bg-center bg-[url('/cy1.jpg')] flex gap-8 ">
      <ProjectsSidebar />
      {/* <NewProject /> */}
      <NoPjelected />
    </main>
  );
}

export default App;
