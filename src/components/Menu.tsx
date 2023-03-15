import { useStore } from "@nanostores/react";
import { menuStore } from "../stores/Menu.store";
import { BottomBar, HeaderTitle, Logo, MenuDesktop, MenuMobil, MenuNav, MenuNavContainer,  } from "../styles/Menu.style";

import jsonData from "./../data/localData.json";
export const localData: any = jsonData;


export default function menu() {
  
  const { isMobile,isVisibleTossMenu } = useStore(menuStore);
    return (
      <>
        <MenuDesktop isVisible= {isMobile}>
          <Logo>
            <p>{localData.AppName}</p>
          </Logo>
        <HeaderTitle>
        <p>{localData.AppTitle}</p>
        </HeaderTitle>
        </MenuDesktop>
    <MenuMobil isVisible= {isMobile}>
    
    <BottomBar>

    </BottomBar>
    </MenuMobil>

    <MenuNavContainer isVisible={isVisibleTossMenu} isMobile={isMobile}>
            <MenuNav />
          </MenuNavContainer>

      </>
    );
  }


