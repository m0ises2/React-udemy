import { memo } from "react";

export const Small = memo(({ value }) => {
  
  console.log("Me rendericé :(");

  return (
    <>
      <small> { value } </small>
    </>
  )
});
