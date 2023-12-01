import styled from 'styled-components';
import Image from '../images/logo_dark.png';
import ImageHover from '../images/logo_green.png';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
        &:hover {
            cursor: pointer; 
        }
`;

export const LogoImage = styled.img`
    width: 270px;
    height: 40px;
    content: url(${Image});
        &:hover {   
            content: url(${ImageHover});    
        }
`;
