import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        aliquid autem voluptatibus eum. Voluptatem nulla iusto beatae, nesciunt
        sed repellendus et id? Aliquid voluptates quisquam fugit laboriosam.
        Facilis, labore laudantium?
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${(props) => `background:${props.theme.secondaryColor}`};
  ${(props) => `color:${props.theme.primaryColor}`};
`;
