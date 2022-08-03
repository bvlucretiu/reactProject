import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { ThemeContext } from "../store/Theme/context";
import { setLightTheme, setDarkTheme } from "../store/Theme/actions";
import Button from "react-bootstrap/Button";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  // Vom accesa si modifica state-ul temei,
  //deci avem nevoie si de state si de dispatch.
  const { themeState, themeDispatch } = useContext(ThemeContext);
  //Extragem valoarea temei
  const theme = themeState.theme;
  console.log(theme);

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

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <div className={theme === "light" ? "bg-white" : "bg-dark"}>
      <header className={styles.header}>
        <nav className={`${styles.nav} bg-primary w-100`}>
          <Container className="d-flex justify-content-between align-items-center">
            <Link to="/" className="p-3">
              <img
                src="https://itschool.ro/images/logo-itschool-dark.svg"
                alt="itschool logo"
              />
            </Link>
            <Button
              variant="outline-primary"
              className="mt-3"
              // Atasam functia care va schimba state-ul global al temei.
              onClick={handleThemeChange}
            >
              Change theme
            </Button>
            <div className={styles.menuIconContainer}>
              <span
                onClick={handleMenuClick}
                className={`material-icons ${styles.menuIcon} text-light`}
              >
                {" "}
                menu{" "}
              </span>
              <ul className={dropdownMenuClasses}>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/technology"
                    className="p-3 text-uppercase text-light"
                  >
                    Tech
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/business"
                    className="p-3 text-uppercase text-light"
                  >
                    Business
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/fashion"
                    className="p-3 text-uppercase text-light"
                  >
                    Fashion
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/music"
                    className="p-3 text-uppercase text-light"
                  >
                    Musics
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/football"
                    className="p-3 text-uppercase text-light"
                  >
                    Fotbal
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/category/food"
                    className="p-3 text-uppercase text-light"
                  >
                    Foods
                  </Link>
                </li>
                <li className={isDisplayed ? "container" : null}>
                  <Link
                    to="/favorites"
                    className="p-3 text-uppercase text-light"
                  >
                    Favorite
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    </div>
  );
}

export default Header;
