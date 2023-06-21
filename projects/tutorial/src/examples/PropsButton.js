import styled from "styled-components";

export const PropsButton = styled.button`
  /* background: ${(props) => (props.color ? props.color : "green")}; */
  color: white;
  padding: ${(props) => (props.big ? "3rem" : "1rem")};
  font-size: 2rem;
  margin: 1rem;
`;

/* export const BigButton = styled(PropsButton)`
  margin: 0.5rem;
  text-transform: capitalize;
  font-size: 3rem;
`; */

export const DangerButton = styled(PropsButton)`
  background: red;
`;

export const SuccessButton = styled(PropsButton)`
  background: green;
`;
