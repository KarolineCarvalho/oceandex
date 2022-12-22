import styles from "../styles/home.module.scss";

import Heading from "@atoms/Heading";
import Button from "@atoms/Button";
import Footer from "@organisms/Footer";

export default function MainPage() {
  return (
    <div className={styles[`Home`]}>
      <main className={styles[`Home__container`]}>
        <Heading level="1" color="grey" weight="italic">
          Discover the Ocean
        </Heading>

        <section className={styles[`Home__content`]}>
          <section className={styles[`Home__content`]}>
            <Button
              href="/Oceandex"
              size="medium"
              color="blue"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              description="Animal’s List"
              img="/assets/images/icons/icon.svg"
              title="Oceandex"
            ></Button>
            <Button
              href="/OceanWorldwide"
              size="medium"
              color="purple"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              description="Ocean's Curiosities"
              img="/assets/images/icons/oceanworldwide.svg"
              title="Ocean Worldwide"
            ></Button>
            <Button
              href="/GeneralCuriosities"
              size="medium"
              color="green"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              description="Animal's Curiosities"
              img="/assets/images/icons/general.svg"
              title="Animal's Curiosities"
            ></Button>
            <Button
              href="/TrophicLevel"
              size="medium"
              color="oliveGreen"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              title="Trophic Level"
              description="Food Chain"
              img="/assets/images/icons/trophic.svg"
            ></Button>
            <Button
              href="/"
              size="medium"
              color="pink"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              title="Favorite Animals"
              description="Selected animals(by heart)"
              img="/assets/images/icons/favorite.svg"
            ></Button>
            <Button
              href="/Authors"
              size="medium"
              color="red"
              fontsize="fontsmall"
              className={styles[`Home__buttons--unit`]}
              title="Who are you in oceanDex"
              description="Who made this"
              img="/assets/images/icons/author.svg"
            ></Button>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
