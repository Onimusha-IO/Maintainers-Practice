 import { BrowserRouter, Routes, Route } from "react-router-dom"

 import Main from "../components/Layouts/Main"

const MainPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} />    */}
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage