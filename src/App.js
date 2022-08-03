import { Route, Routes } from "react-router-dom";

import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";

import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { initialState, favoritesReducer } from "./store/Favorites/reducer";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";
import {
  initialState as themeInitialState,
  themeReducer,
} from "./store/Theme/reducer";
import { ThemeContext } from "./store/Theme/context";

function App() {
  const [initialStateLocalStorage] = useLocalStorage("favorites", initialState);
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialStateLocalStorage
  );
  // Initiem reducerul ptr tema
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };
  // Cream o singura valoarea din cele doua valori ale arrayului din ce am extras din useReducer
  // pe care le transformam intr-un obiect care vor contine cele doua valori ale respectivului array
  // si o vom pasa lui ThemeContext.Provider
  const themeContextValue = {
    themeState,
    themeDispatch,
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={themeContextValue}>
        <FavoritesContext.Provider value={favoritesContextValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/:categoryId" element={<NewsCategory />} />
            <Route path="/news/:newsId" element={<NewsDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </FavoritesContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
