import { ConteneurCard, CardHotel, CardImg, InfoHotel} from './DashStyles'
import { Texte } from '../stylesPages/StyledPages';

import imags from '../assets/image.png'
import { useState, useEffect } from 'react';


const ListHotel = ({setNombre, recherche}) => {
    const [hotels, setHotels] = useState([])
    const [leshotels, setLesHotels] = useState([])

    useEffect(() => {
        const fetchHotels = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                console.log('aucun token trouvé')
                return
            }

            try{
                const response = await fetch('https://red-product-backend-tsia.onrender.com/api/hotels',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                const donner = await response.json()
                if(response.ok){
                    setHotels(donner)
                    if(setNombre) setNombre(donner.length)
                } else {
                    console.error("erreur lors de la recuperation", donner.message)
                }
            } catch (erreur) {
                console.error('Erreur Serveur', erreur)
            }
        }

        fetchHotels()
    }, [setNombre])

    useEffect(() => {
        if(recherche){
            const filtre = hotels.filter(hotel => hotel.nom.toLowerCase().includes(recherche.toLowerCase()))
            setLesHotels(filtre.length > 0 ? filtre : hotels)
        }else{
            setLesHotels(hotels)
        }
    }, [recherche, hotels])

    return ( 
        <ConteneurCard gap="10px" min="220px">
            {leshotels.map((hotel, index) => (
                <CardHotel key={index}>
                    <CardImg src={hotel.image ? `https://red-product-backend-tsia.onrender.com/uploads/${hotel.image}` : imags} />
                    <InfoHotel>
                        <Texte fonts="12px" color="#8d4b38">{hotel.adresse}</Texte>
                        <Texte fonts="18px" font="600">{hotel.nom}</Texte>
                        <Texte margin="10px" fonts="12px">{hotel.prix} {' '} {hotel.devise} par nuit</Texte>
                    </InfoHotel>
                </CardHotel>
            ))}
        </ConteneurCard>
     );
}
 
export default ListHotel;