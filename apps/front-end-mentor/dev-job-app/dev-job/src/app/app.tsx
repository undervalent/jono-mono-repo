import { Route, Routes } from "react-router-dom";

import { Header } from "./shared-components";
import { MainContent } from "./app.styles";
import { JobsList } from "./views";
import { SelectedJob } from "./views/selected-job";

export function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<JobsList />} />
          <Route path="/selected-job/:id" element={<SelectedJob />} />
        </Routes>
      </MainContent>
    </>
  );
}

export default App;
