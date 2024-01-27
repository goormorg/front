import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Intro, MainPage, LoginPage, MyPage, SearchPage } from "pages";

enum PATH {
  login = "/login",
  main = "/",
  user = "/user",
  search = "/search",
  intro = "/intro",
  test = "/test",
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.login} element={<LoginPage />}></Route>
          <Route path={PATH.main} element={<MainPage />}></Route>
          <Route path={PATH.user} element={<MyPage />}></Route>
          <Route path={PATH.search} element={<SearchPage />}></Route>
          <Route path={PATH.intro} element={<Intro />}></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
