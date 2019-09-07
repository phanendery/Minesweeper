import React from "react";
import cell from "../Cell";

//this is just a holder for all of our different cells
const Row = props => {
  // console.log(props)
  let cells = props.cells.map((data, index) => {
    return <Cell key={index} data={data} />;
  });
  return <div className="row">{cells}</div>;
};

export default Row;
