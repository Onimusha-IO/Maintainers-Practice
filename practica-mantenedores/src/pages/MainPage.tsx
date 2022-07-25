import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../components/functional/Error";

import Main from "../components/Layouts/Main";

const MainPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainPage;
