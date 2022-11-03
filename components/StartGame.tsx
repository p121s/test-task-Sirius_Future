import { useState } from "react";
import {
  CustomRadioButton,
  StartGameBorderStyled,
  StartGameStyled,
  WrapperRadioButton,
  PStyled,
  NumberParagraf,
  WrapperNumberRange,
  Range,
  ValueParagraf,
  WrapperValueRange,
  ButtonStart,
} from "../styles/StartGame.styled";

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function StartGame() {
  const [numberOfItems, setNumberOfItems] = useState<number>(2);
  const [value, setValue] = useState<number | string>(0);
  const [destination, setDestination] = useState<number>(0);

  const numberOfItemsHandler = (e: any) => {
    setNumberOfItems(e.target.value);
  };

  const valueHandler = (e: any) => {
    setValue(e.target.value);
  };

  const destinationHandler = (e: any) => {
    setDestination(e.target.value);
  };

  console.log(destination);

  return (
    <StartGameBorderStyled>
      <StartGameStyled>
        <PStyled>Количество предметов</PStyled>
        <WrapperNumberRange>
          <NumberParagraf>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </NumberParagraf>
          <Range
            type="range"
            min="2"
            max="5"
            value={numberOfItems}
            onChange={numberOfItemsHandler}
          />
        </WrapperNumberRange>

        <PStyled>Значения</PStyled>
        <WrapperValueRange>
          <ValueParagraf>
            <div>A</div>
            <div>9</div>
            <div>19</div>
            <div>50</div>
            <div>99</div>
            <div>999</div>
          </ValueParagraf>
          <Range type="range" min="0" max="5" onChange={valueHandler} />
          <br></br>
        </WrapperValueRange>

        <WrapperRadioButton>
          <CustomRadioButton>
            <label htmlFor="increase">По возрастанию</label>
            <input
              id="increase"
              type="radio"
              name="choose"
              value={0}
              onChange={destinationHandler}
            />
          </CustomRadioButton>
          <CustomRadioButton>
            <label htmlFor="descending">По убыванию</label>
            <input
              id="descending"
              type="radio"
              name="choose"
              value={1}
              onChange={destinationHandler}
            />
            <br></br>
          </CustomRadioButton>
        </WrapperRadioButton>

        <ButtonStart href="/game">Играть</ButtonStart>
      </StartGameStyled>
    </StartGameBorderStyled>
  );
}
