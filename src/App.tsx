import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
