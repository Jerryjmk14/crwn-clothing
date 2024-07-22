import React from "react";
import SHOP_DATA from "../../shop-data.json";

export default function Shop() {
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}
