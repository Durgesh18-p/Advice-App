/* eslint-disable react/prop-types */
import styled from "styled-components";

const ButtonsContainer = ({ previous, showAdvice, saveAdvice, showSaved }) => {
  return (
    <ButtonContainer>
      <button onClick={previous}>Previous</button>
      <button onClick={showAdvice}>Advice Me</button>
      <SaveButton onClick={saveAdvice}>Save</SaveButton>
      <button onClick={showSaved}>Show Saved</button>
    </ButtonContainer>
  );
};

export default ButtonsContainer;

const ButtonContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const SaveButton = styled.button`
  background-color: white;
  color: black;
  padding: 0.8rem;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 15px;
  letter-spacing: 0.1rem;
  position: relative;
  background-color: transparent;

  &:hover::after {
    content: "Double click to save";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    opacity: 0.8;
    z-index: 1;
    white-space: nowrap;
  }
`;
