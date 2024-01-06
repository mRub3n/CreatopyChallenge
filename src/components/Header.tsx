import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Logo>
          <h3>Dummy Logo</h3>
        </Logo>
      </StyledLink>
      <NavMenu>
        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/product">
          <span>Product</span>
        </Link>

        <Link to="/solutions">
          <span>Solutions</span>
        </Link>
      </NavMenu>
    </Container>
  );
};

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Container = styled.div`
  position: fixed;
  background-color: #000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
  color: white;
`;

const Logo = styled.a`
  text-decoration: none;
  width: 80px;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.08;
      padding: 1px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

`;

export default Header;
