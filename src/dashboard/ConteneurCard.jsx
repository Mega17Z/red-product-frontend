import { BoxRelative, FlexBox, IconDesign, ConteneurCard, CardContent, CircleContent } from './DashStyles'
import { Texte } from '../stylesPages/StyledPages';
import { useState } from 'react';
import { useEffect } from 'react';

const tableau = [
  {
    icone: "fa-solid fa-graduation-cap",
    valeur: "125",
    titre: "Formations",
    description: "Je ne sais pas quoi mettre",
    color: "#A88ADD"
  },
  {
    icone: "fa-solid fa-envelope",
    valeur: "40",
    titre: "Messages",
    description: "Je ne sais pas quoi mettre",
    color: "#0CC2AA"
  },
  {
    icone: "fa-solid fa-users",
    valeur: "600",
    titre: "Utilisateurs",
    description: "Je ne sais pas quoi mettre",
    color: "#FCC100"
  },
  {
    icone: "fa-solid fa-inbox",
    valeur: "25",
    titre: "E-mails",
    description: "Je ne sais pas quoi mettre",
    color: "#F90000"
  },
  {
    icone: "fa-solid fa-hotel",
    valeur: "40",
    titre: "Hôtels",
    description: "Je ne sais pas quoi mettre",
    color: "#9C27B0"
  },
  {
    icone: "fa-solid fa-sitemap",
    valeur: "02",
    titre: "Entités",
    description: "Je ne sais pas quoi mettre",
    color: "#1565C0"
  }
];


const ConteneurdeCard = ({recherche}) => {
   const [tab, setTab] = useState([])

   useEffect(() => {
      if(recherche){
        const filtre = tableau.filter(lefiltre => lefiltre.titre.toLowerCase().includes(recherche.toLowerCase()))
        setTab(filtre.length > 0 ? filtre : tableau)
      } else {
        setTab(tableau)
      }
   }, [recherche])

    return ( 
      <ConteneurCard gap="25px" min="280px">
          {tab.map((card, index) => (
            <CardContent key={index}>
            <CircleContent bg={card.color}>
                <IconDesign className={`${card.icone}`} color="#FFFFFF" />
            </CircleContent>
            <BoxRelative>
                <FlexBox gap="5px">
                <Texte fonts="22px" font="400">{card.valeur}</Texte>
                <Texte fonts="14px" font="200">{card.titre}</Texte>
                </FlexBox>
                <Texte fonts="12px" margin="2px" font="400" color="#555555">{card.description}</Texte>
            </BoxRelative>
            </CardContent>
            ))}
          
      </ConteneurCard>
     );
}
 
export default ConteneurdeCard;