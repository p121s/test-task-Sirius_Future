import styled from "@emotion/styled";
import Link from "next/link";

export const StartGameBorderStyled = styled.div`
    width: 699px;
    height: 660px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(-135deg, #7F75F0, #101F32);
    border-radius: 40px;
`;

export const StartGameStyled = styled.div`
    width: 659px;
    height: 620px;
    margin: 20px 20px;
    border-radius: 20px;
    background: white;
    text-align: center;
    padding: 57px;
    box-sizing: border-box;
`;

export const PStyled = styled.p`
    font-size: 32px;
    font-weight: 400;
    margin: 16px;
`;

const ParagrafForRang = styled.p`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    font-weight: 700;
    font-size: 24px;
`;

export const NumberParagraf = styled(ParagrafForRang)`


`;
export const Range = styled.input`
overflow: hidden;
display: block;
appearance: none;
width: 100%;
margin: 0;
height: 21px;
cursor: pointer;

&:focus {
  outline: none;
}

&::-webkit-slider-runnable-track {
  position: relative;
  border-radius: 25px;
  width: 100%;
  height: 21;
  background: #FFD748;
}

&::-webkit-slider-thumb {
  position: relative;
  appearance: none;
  height: 23px;
  width: 23px;
  background: #104987;
  border-radius: 100%;
}
`;

export const ValueParagraf = styled(ParagrafForRang)`


`;

export const WrapperNumberRange = styled.div`
    width: 366px;
    margin: 16px auto 64px;
`;

export const WrapperValueRange = styled.div`
    width: 531px;
    margin: 16px auto 64px;
`;

export const WrapperRadioButton = styled.div`

`;

export const CustomRadioButton = styled.div`
    display: inline-block;

    & label {
        padding: 5px 15px;
        background: #FFD748;
        margin: 15px;
        font-size: 28px;
        border-radius: 20px;
        font-weight: 700;
    }

    & input[type=radio] {
        display: none;
    }
`;

export const ButtonStart = styled(Link)`
    display: block;
    background: #38DF7A;
    color: white;
    border-radius: 20px;
    font-size: 32px;
    font-weight: 700;
    padding: 12px 75px;
    max-width: 160px;
    margin: 80px auto 0;
    text-decoration: none;
`;