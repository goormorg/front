import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { LoginPage } from "./pages/Login";
import { MyPage } from "./pages/My";

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
          <Route path={PATH.login} element={<LoginPage />}></Route>
          <Route path={PATH.main} element={<MainPage />}></Route>
          <Route path={PATH.user} element={<MyPage />}></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
