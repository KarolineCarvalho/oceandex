import styles from "./styles.module.scss";
import Link from "next/link";
import GlobalSvg from "@atoms/GlobalSvg";
import React, { useState, useEffect } from "react";

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
  innerWidth,
}) {
  return (
    <>
      <div className={styles[`Navbar`]}>
        <button
          className={styles[`Navbar__openMenu`]}
          onClick={() => setMenuIsVisible(true)}
        >
          <GlobalSvg
            iconPath="/assets/images/svg/Hamburger.svg"
            alt="Open menu"
          />
        </button>
        <nav
          className={`${menuIsVisible ? "" : styles[`Navbar__invisible`]}`}
          role="navigation"
          aria-label="main navigation"
        >
          <button
            className={styles[`Navbar__closeMenu`]}
            onClick={() => setMenuIsVisible(false)}
          >
            <GlobalSvg
              iconPath="/assets/images/svg/Close.svg"
              alt="Close Menu"
            />
          </button>
          <ul className={styles[`Navbar__list`]}>
            <li className={styles[`Navbar__li`]}>
              <Link href="/Oceandex">
                <a className={styles[`Navbar__item`]}>OceanDex</a>
              </Link>
            </li>
            <li className={styles[`Navbar__li`]}>
              <Link href="/GeneralCuriosities">
                <a className={styles[`Navbar__item`]}>Animal's Curiosities</a>
              </Link>
            </li>
            <li className={styles[`Navbar__li`]}>
              <Link href="/ocean-curiosities">
                <a className={styles[`Navbar__item`]}>Ocean Curiosities</a>
              </Link>
            </li>
            <li className={styles[`Navbar__li`]}>
              <Link href="/TrophicLevel">
                <a className={styles[`Navbar__item`]}>Trophic Level</a>
              </Link>
            </li>
            <li className={styles[`Navbar__li`]}>
              <Link href="/Oceandex">
                <a className={styles[`Navbar__item`]}>Favorite Animals</a>
              </Link>
            </li>
            <li className={styles[`Navbar__li`]}>
              <Link href="/Authors">
                <a className={styles[`Navbar__item`]}>Authors</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* <nav
        className={styles[`NavbarDesktop`]}
        role="navigation"
        aria-label="main navigation"
      >
        <ul className={styles[`NavbarDesktop__list`]}>
          <li className={styles[`NavbarDesktop__li`]}>
            <Link href="/Oceandex">
              <a className={styles[`NavbarDesktop__item`]}>OceanDex</a>
            </Link>
          </li>
          <li className={styles[`Navbar__li`]}>
            <Link href="/GeneralCuriosities">
              <a className={styles[`Navbar__item`]}>Animal's Curiosities</a>
            </Link>
          </li>
          <li className={styles[`NavbarDesktop__li`]}>
            <Link href="/ocean-curiosities">
              <a className={styles[`NavbarDesktop__item`]}>Ocean Curiosities</a>
            </Link>
          </li>
          <li className={styles[`NavbarDesktop__li`]}>
            <Link href="/TrophicLevel">
              <a className={styles[`NavbarDesktop__item`]}>Trophic Level</a>
            </Link>
          </li>
          <li className={styles[`NavbarDesktop__li`]}>
            <Link href="/FavoriteAnimals">
              <a className={styles[`NavbarDesktop__item`]}>Favorite Animals</a>
            </Link>
          </li>
          <li className={styles[`NavbarDesktop__li`]}>
            <Link href="/Authors">
              <a className={styles[`NavbarDesktop__item`]}>Authors</a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
}
