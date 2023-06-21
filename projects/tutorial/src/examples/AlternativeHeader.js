import React from "react";
import styled from "styled-components";

const StyledHeader = ({ title, className }) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2 className="random">another header</h2>
    </section>
  );
};

// const StyledWrapper = styled(StyledHeader)`
//   /* background: red; */
//   background: ${(props) => (props.background ? props.background : "red")};
//   transition: all 2s ease-in-out;
//   h1 {
//     color: blue;
//   }
//   .random {
//     color: green;
//   }
//   &:hover {
//     background: black;
//   }
// `;

// export default StyledWrapper;

export default styled(StyledHeader)`
  /* background: red; */
  background: ${(props) => (props.background ? props.background : "red")};
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
    background: black;
  }
`;
