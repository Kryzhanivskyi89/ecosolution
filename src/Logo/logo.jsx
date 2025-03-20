import { LogoWrapper, LogoImage } from './logo.styled';

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <a href="./index.html" aria-label="Go to the homepage">
          <LogoImage />
        </a>
      </LogoWrapper>
    </>
  );
};

export default Logo;