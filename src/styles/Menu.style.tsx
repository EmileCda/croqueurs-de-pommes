import styled from "styled-components";

export const MenuDesktop = styled.div<{isVisible:boolean}>`
display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const Logo = styled.div`

`;
export const HeaderTitle = styled.div`

`;
export const MenuMobil = styled.div<{isVisible:boolean}>`
display: ${(props) => (props.isVisible ? "block" : "none")};

`;
export const BottomBar = styled.div`

`;

export const MenuNavContainer = styled.div<{isVisible:boolean , isMobile :boolean }>`
display: ${(props) => (props.isVisible ? "flex" : "none")};


flex-direction: ${(props) => (props.isMobile ? "column" : "row")};



`;

export const MenuNav = styled.div`

`;
