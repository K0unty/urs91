import { useState } from "react";
import NewProject from "./comp/NewProject.jsx";
import NoProjectSelected from "./comp/NoPJSelected.jsx";
import ProjectsSidebar from "./comp/ProjectsSidebar.jsx";

function App() {
  const [projectState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-1 bg-fixed bg-no-repeat bg-center bg-[url('/cy1.jpg')] flex gap-8 ">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
