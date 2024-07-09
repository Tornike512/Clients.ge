import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PublicLayout />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
