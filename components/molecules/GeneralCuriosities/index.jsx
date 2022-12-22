import Text from "@atoms/Text";
import { useState } from "react";
import oceananimals from "json/generalCuriosities.json";
import AnimalsTag from "@molecules/AnimalsTag";
import Arrow from "@atoms/Arrow";
import styles from "./styles.module.scss";

function GeneralCuriosities() {
  const animals = oceananimals;
  const [animalsID, setanimalsID] = useState(0);

  //construindo a quantidade de IDs

  function handleClickSum(id) {
    if (animalsID <= 27) {
      setanimalsID((previous) => {
        return previous + 1;
      });
      console.log(animalsID);
    }
  }
  function handleClickSub(id) {
    if (animalsID >= 1) {
      setanimalsID((previous) => {
        return previous - 1;
      });
      console.log(animalsID);
    }
  }
  console.log(animals);

  return (
    <>
      <section className={styles[`GeneralCuriosities`]}>
        <Text
          size="large"
          style="bold"
          className={styles[`GeneralCuriosities--Name`]}
        >
          {animals[animalsID].name}
        </Text>
        <div className={styles[`GeneralCuriosities--Tag`]}>
          <AnimalsTag label={animals[animalsID].kingdom} mt="mt" />
          <AnimalsTag label={animals[animalsID].order} mt="mt" />
        </div>
        <Text
          className={styles[`GeneralCuriosities--Text`]}
          color="black"
          size="small"
        >
          {animals[animalsID].tabs[0].curiosities[0].curiositiesText}
        </Text>

        <img
          className={styles[`GeneralCuriosities--Img`]}
          src={animals[animalsID].tabs[0].curiosities[0].curiositiesImage}
          key={animals[animalsID].id}
        />
      </section>
      <div className={styles[`GeneralCuriosities--Arrow`]}>
        <Arrow direction="left" onClick={handleClickSub} />

        <Arrow direction="right" onClick={handleClickSum} />
      </div>
    </>
  );
}

export default GeneralCuriosities;
