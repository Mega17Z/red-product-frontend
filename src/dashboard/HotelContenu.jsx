import { Link } from 'react-router-dom';
import {BoxHead, FlexBox, IconDesign, SectionTitre, ListContent, ButtonContent } from './DashStyles'
import { Texte } from '../stylesPages/StyledPages';

import ListHotel from "./ListeHotel";
import { useState } from 'react';

const HotelContenu = ({recherche}) => {
    const [nombre, setNombre] = useState(0)

    return ( 
        <ListContent>
            <BoxHead>
                <FlexBox>
                    <SectionTitre font="20px">Hotels</SectionTitre>
                    <Texte fonts="23px" font="200" color='#CBCBCB'>{nombre}</Texte>
                </FlexBox>
                <ButtonContent>
                    <IconDesign className='fa-solid fa-plus' />
                    <Link to="/creer" style={{textDecoration: "none"}}>
                        <Texte font="14px">Creer un nouveau hotel</Texte>
                    </Link>
               </ButtonContent>
            </BoxHead>
            <ListHotel setNombre={setNombre} recherche={recherche} />
        </ListContent>
     );
}
 
export default HotelContenu;