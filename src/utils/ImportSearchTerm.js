import React from "react";
import { Opt } from "./searchResult";
export const ImportSearchTerm = ({ searchTerm }) => {
  return (
    <>
      <Opt searchTerm={searchTerm} />
    </>
  );
};
