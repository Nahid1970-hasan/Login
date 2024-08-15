import styled, { css } from "styled-components";

export const StyledIconButton = styled.div`
  display:  ${({display})=> display ??'inline-flex'} ;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  text-align: ${({alignment})=> alignment ??'center'};
  text-decoration: none;
  position: relative;
  box-sizing: border-box;
  background-color: ${({bgColor, theme})=> !!bgColor? theme.colors[bgColor]:"transparent"};
  padding: ${({padding})=> padding ??'8px'} ;
  width:  ${({width})=> width ??'auto'} ;
  border-radius: 50%;
  font-size: ${({theme})=> theme.fontSize[localStorage.i18nextLng=='en'?'font':'fontBn']} ;
  background-position: center;
  transition: background 1s;
  ${({color, theme})=> `color:${theme.colors[color]};`}

  ${({nothover})=> nothover ?? `&:hover {
    background: #dfdfdf radial-gradient(circle, transparent 1%, #dfdfdf 1%) center/15000%;
  }`}
  

  &:active {
    background-color: #c7c4c4;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const ColorIcon = styled.i` 
  display: inline-flex;
  margin: ${({margin})=> !!margin? margin: "0px"};
  padding: 8px; 
  height: ${({size})=> !!size? size+"px": "24px"};
  width: ${({size})=> !!size? size+"px": "24px"};
  border-radius: ${({size})=> !!size? (size/2)+"px": "12px"}; 
  color:  ${({theme, color})=> !!color? color :theme.colors.bg};
  background:  ${({theme, background})=> !!background? background :theme.colors.bg};
  fill:  ${({theme})=> theme.colors.bg};
  vertical-align: middle;  
  ${({hover})=> hover && css` &:hover {  
    background: ${({theme})=> theme.colors.secendaryColor};
    color: ${({theme, hoverBack})=> !!hoverBack? theme.colors[hoverBack] :theme.colors.bg};
    fill:  ${({theme})=> theme.colors.bg};
  }`};
`;
