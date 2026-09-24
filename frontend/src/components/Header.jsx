import styled from "styled-components";
import backIcon from "../assets/back.png";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: ${props => props.$height};
    background-color:${props => props.$background_color || "#87A64E"};
    color: ${props => props.$color || "white"};
    border-radius: 10px;
    min-height: 7vh;
    margin-bottom: 6vh;
`
const BackButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #87A64E;
    height: 100%;
    width: 7vh;
    margin-top: 0vh;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid #52692a;

    &:hover {
        background-color: #6E8A3D; 
    }

`
const Icon = styled.img`
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1);
`;

const SpaceDiv = styled.div`
    display: flex;
    width: 7vh;
    height: 1px;
`

export default function Header ({height, background_color, color, children}){
    
    const navigate = useNavigate();

    return(
        <HeaderDiv $background_color={background_color} $color={color} $height={height}>
            <BackButton onClick={() => navigate(-1)}>
                <Icon src={backIcon} alt="Voltar" />
            </BackButton>
            {children}
            <SpaceDiv></SpaceDiv>
        </HeaderDiv>
    );

}