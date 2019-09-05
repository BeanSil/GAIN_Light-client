import styled, { createGlobalStyle } from "styled-components";

import HeaderContainer from "./HeaderContainer";
import oc from "open-color";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const Wrapper = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  height: 850px;
`;

const PageCount = styled.div`
  width: 100%;
  height: 100%;
  min-height: 900px;
  background-color: ${props => oc.grape[props.color]};
  
  
`

const PageTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      {/* <Wrapper>{children}</Wrapper> */}
      <div style={{marginTop: '4em'}}>
        <PageCount color="0">First Scene</PageCount>
        <PageCount color="1">Second Scene</PageCount>
        <PageCount color="2">Third Scene</PageCount>
        <PageCount color="3">Fourth Scene</PageCount>
      </div>
    </>
  );
};

export default PageTemplate;