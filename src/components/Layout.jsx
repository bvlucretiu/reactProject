import React from "react";
import { useContext } from "react";
// Importam headerul si footer-ul.
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { ThemeContext } from "../store/Theme/context";
import { setLightTheme, setDarkTheme } from "../store/Theme/actions";

function Layout(props) {
  // Vom accesa si modifica state-ul temei,
  //deci avem nevoie si de state si de dispatch.
  const { themeState, themeDispatch } = useContext(ThemeContext);

  //Extragem valoarea temei
  const theme = themeState.theme;

  // Cand dam click pe butonul de schimbare a temei,
  //in functie de valoarea temei,
  //declansam actiunea corespunzatoare.

  function handleThemeChange() {
    let actionResult;
    // Daca tema este light, declansam actiunea ce seteaza tema dark.
    if (theme === "light") {
      actionResult = setDarkTheme();
      themeDispatch(actionResult);
      // Daca tema este dark, declansam actiunea ce seteaza tema light.
    } else if (theme === "dark") {
      actionResult = setLightTheme();
      themeDispatch(actionResult);
    }
  }

  return (
    <div className={theme === "dark" ? "bg-dark text-light" : "bg-white"}>
      <div className={styles.layout}>
        <Header />
        {/* Intre header si footer afisam copiii primiti de componenta Layout. */}
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
