import styled from "@emotion/styled";
import startBackground from "../public/4882066 1.png";

console.log(startBackground);

export const Main = styled.main`
  position: relative;
  width: 980px;
  height: 810px;
  background: url("./${startBackground.src}") center / contain no-repeat;
  font-family: sans-serif
`;
