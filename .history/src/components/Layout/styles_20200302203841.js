
import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  /*display: flex;*/
  min-height: calc(100vh - 70px);
  flex-flow: column;
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 1240px;
  margin: 0 auto;
  
`

export const LayoutMain = styled.main`
  width: 100%;
  padding: 120px;

  ${media.lessThan("large")`
    padding: 20px;
  `}

  body#grid & {
    grid-template-areas: 
    "posts"
    "pagination";
  }
`
