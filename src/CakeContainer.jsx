import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./reducer";
const CakeContainer = (props) => {
  return (
    <>
      <h3>Number of Cakes - {props.cakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cakes: state.numOfCakes,
  };
};
const mapDispatchToProps = {
  buyCake,
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
