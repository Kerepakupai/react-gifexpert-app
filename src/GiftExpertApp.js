import { Fragment, React, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  /*
  const handleAdd = () => {
    // setCategories([...categories, "Spiderman"]);

    // Callback: Recibe el estado anterior
    setCategories((c) => [...c, "HunterXHunter"]);
  };
  */

  return (
    <Fragment>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};
