import { LogoWrapper, LogoImage } from './logo.styled';

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <a href="./index.html">
          <LogoImage />
        </a>
      </LogoWrapper>
    </>
  );
};

export default Logo;