import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

enum PATH {
  login = "/login",
  main = "/",
  user = "/user",
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.login} element={<div>로그인 페이지</div>}></Route>
          <Route path={PATH.main} element={<div>메인 페이지</div>}></Route>
          <Route path={PATH.user} element={<div>마이 페이지</div>}></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
