import React from "react";
import styled from "styled-components";

import { ChartsContainer } from "./containers";

function App() {
  return (
    <S.App>
      <ChartsContainer />
    </S.App>
  );
}

export default App;

const S = {
  //S == Style
  App: styled.div`
    padding: 60px;
  `,
};
