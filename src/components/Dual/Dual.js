import styled from 'styled-components'

export default styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left right";
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  @media (max-width: 700px) {
    grid-template-areas: "left left" "right right";
    justify-content: center;
    align-items: center;
  }
`

export const Left = styled.div`grid-area: left;`
export const Right = styled.div`grid-area: right;`
