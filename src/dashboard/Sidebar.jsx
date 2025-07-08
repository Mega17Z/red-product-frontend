import { Link, NavLink } from "react-router-dom";
import { SidebarStyle, HautSidebar, UlSidebar, LiSidebar, BoxPadding, BasSidebar, ImageProfil, Indication, EnligneText, FlexBox, IconDesign, MasquerElement, ButtonActive } from "./DashStyles";
import { EndessusBackground, Texte, Boxflex, Lelogo, LogoTitre} from "../stylesPages/StyledPages"

import derriere from '../assets/derriere.png'
import logo from '../assets/logo.png'
import { useState } from "react";
import { useEffect } from "react";


const Sidebar = () => {
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [utilisateur, setUtilisateur] = useState(null)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            setUtilisateur(JSON.parse(user))
        }
    }, [])

    const changementActive = () => {
        setActiveSidebar(prec => !prec)
    }

    const fermerSidebar = () => {
        if(activeSidebar){
            setActiveSidebar(false)
        }
    }

    return ( 
      <SidebarStyle siActive={activeSidebar}>
          <EndessusBackground src={derriere} />
          <HautSidebar>
              <BoxPadding>
                   <Boxflex>
                     <Lelogo src={logo} alt="Red Product" />
                     <MasquerElement siActive={activeSidebar}>
                        <LogoTitre>Red Product</LogoTitre>
                     </MasquerElement>
                   </Boxflex>
                   <MasquerElement siActive={activeSidebar}>
                    <Texte margin="45px" fonts="14px" font="300" color="#FFFFFF">Principal</Texte>
                   </MasquerElement>
               </BoxPadding>
               <UlSidebar>
                    <NavLink to="/principal" end className={({isActive}) => isActive ? "active-link" : "" } style={{textDecoration: "none"}} onClick={fermerSidebar}>
                        <LiSidebar>
                            <IconDesign className="fa-solid fa-tachometer-alt" color="#FFFFFF" />
                            <MasquerElement siActive={activeSidebar}>
                                <Texte color="#FFFFFF">Dashboard</Texte>
                            </MasquerElement>
                        </LiSidebar>
                   </NavLink>
                   <NavLink to="/principal/hotels" className={({isActive}) => isActive ? "active-link" : "" } style={{textDecoration: "none"}} onClick={fermerSidebar}>
                        <LiSidebar>
                            <IconDesign className="fa-solid fa-hotel" color="#FFFFFF" />
                            <MasquerElement siActive={activeSidebar}>
                                <Texte color="#FFFFFF">Listes des Hotels</Texte>
                            </MasquerElement>
                        </LiSidebar>
                   </NavLink>
               </UlSidebar>
           </HautSidebar>
           <BasSidebar>
               <ImageProfil width="40px" height="40px" src='' />
               <MasquerElement siActive={activeSidebar}>
                <div>
                    <Texte color='#FFFFFF' margin="5px">{utilisateur ? utilisateur.nom : "Utilisateur"}</Texte>
                    <FlexBox gap="5px">
                        <Indication></Indication>
                        <EnligneText>En ligne</EnligneText>
                    </FlexBox>
                </div>
               </MasquerElement>
           </BasSidebar>

           <ButtonActive onClick={changementActive} siActive={activeSidebar}>
                <i className="fa-solid fa-bars"></i>
           </ButtonActive>
       </SidebarStyle>
     );
}
 
export default Sidebar;