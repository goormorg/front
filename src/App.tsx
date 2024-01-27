import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Intro, MainPage, LoginPage, MyPage, SearchPage } from "pages";

import { SelectExample } from "components";

import { useGetFoodImage } from "hooks";

import { useEffect, useState } from "react";

enum PATH {
  login = "/login",
  main = "/",
  user = "/user",
  search = "/search",
  intro = "/intro",
  test = "/test",
}

function App() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetFoodImage("도넛", setState);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.login} element={<LoginPage />}></Route>
          <Route path={PATH.main} element={<MainPage />}></Route>
          <Route path={PATH.user} element={<MyPage />}></Route>
          <Route path={PATH.search} element={<SearchPage />}></Route>
          <Route path={PATH.intro} element={<Intro />}></Route>
          <Route
            path={PATH.test}
            element={<SelectExample type="maintain" />}
          ></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
