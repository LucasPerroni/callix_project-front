import styled from "styled-components"

export const HeaderComponent = styled.header`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px;

  .selected {
    color: var(--theme-light);
  }

  * {
    transition: all 0.5s;
  }
`

export const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: var(--theme-light);

  margin-bottom: 35px;
  text-align: center;
  cursor: pointer;
`

export const Navigate = styled.nav`
  width: 90%;
  margin: 0 auto 20px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid var(--theme-light);

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--not-selected);

    cursor: pointer;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
