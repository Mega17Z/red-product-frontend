import {BoxHead, BoxRelative, DashboardContenu, SectionTitre } from './DashStyles'
import { Texte } from '../stylesPages/StyledPages';

import ConteneurdeCard from "./ConteneurCard";


const DashboardAffichage = ({recherche}) => {
    return ( 
        <DashboardContenu>
            <BoxHead>
                <BoxRelative>
                    <SectionTitre font="20px">Bienvenue sur RED PRODUCT</SectionTitre>
                    <Texte margin="3px" fonts="13px" font="400" color="#555555">Lorem ipsum dolor sit amet consectetur</Texte>
                </BoxRelative>
            </BoxHead>
            <ConteneurdeCard recherche={recherche} />
        </DashboardContenu>
     );
}
 
export default DashboardAffichage;