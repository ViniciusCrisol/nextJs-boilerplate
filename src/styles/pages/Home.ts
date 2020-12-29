import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 24px;
    margin-top: 8px;
  }
`
