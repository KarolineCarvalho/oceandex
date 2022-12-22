import styles from "./styles.module.scss";

import { useState } from "react";
import GlobalSvg from "@atoms/GlobalSvg";

export default function Input({ placeholder, page, value, onChange }) {
  const [search, setSearch] = useState("");

  return (
    <form className={styles.inputContainer}>
      <GlobalSvg filePath="public/assets/images/svg/SearchIcon.svg" />
      <input
        className={styles.inputContainer__box}
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        value={search}
        onChange={onChange}
      />
    </form>
  );
}
