import styled from 'styled-components/macro'
import { theme } from '../../theme/theme'
import { ReactComponent as HeartSVG } from '../../assets/hearts.svg'

export const FooterWrapper = styled.footer`
  grid-area: footer;
  height: 8rem;
  width: 100%;
  background-color: ${theme.Blue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 1rem var(--blue);
`

export const FooterText = styled.span`
  color: ${theme.LightBlue};
  font-family: ${theme.SourceSansPro};
  font-size: 2rem;
`

export const FooterLink = styled.a`
  text-decoration: underline;
  color: ${theme.White};
`

export const Heart = styled(HeartSVG)`
  height: 3rem;
  position: relative;
  top: 0.5rem;
  margin: 0 0.2rem 0 0.5rem;
`
