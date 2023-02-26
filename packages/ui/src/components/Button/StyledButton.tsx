import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s all ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export default StyledButton;
