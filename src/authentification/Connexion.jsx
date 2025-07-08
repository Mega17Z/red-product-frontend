import React from "react";

import {
  StylledBody,
  EndessusBackground,
  ContentStylled,
  Texte,
  Boxflex,
  InputStyle,
  LeCheck,
  Lelogo,
  LogoTitre,
  BoxStylled,
  SpanJaune,
  ButtonConnecte
} from '../stylesPages/StyledPages';

import { useNavigate } from "react-router-dom";

import logo from '../assets/logo.png'
import derriere from '../assets/derriere.png'
import { useState } from "react";

export const Connexion = () => {
    const [email, setEmail] = useState()
    const [motdepasse, setMotdepasse] = useState()

    const navigate = useNavigate()

    const soumettreConnexion = async () => {
    try{
      const response = await fetch('https://red-product-backend-tsia.onrender.com/api/auth/connexion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, motdepasse })
      })

      const donner = await response.json()
      if(response.ok){
        alert('Connexion Reussi')
        localStorage.setItem('token', donner.token)
        localStorage.setItem('user', JSON.stringify(donner.user))
        navigate('/principal')
      } else {
        alert(donner.message)
      }
    } catch (erreur){
      console.error(erreur)
      alert('Erreur lors de la connexion')
    }
  }

    return ( 
        <StylledBody>
            <EndessusBackground src={derriere} alt="derriere" />
            <ContentStylled>
                <Boxflex>
                    <Lelogo src={logo} alt="Red Product" />
                    <LogoTitre>Red Product</LogoTitre>
                </Boxflex>
                <BoxStylled>
                    <Texte>Connectez-vous en tant que Admin</Texte>
                    <InputStyle placeholder="Email" margin="25px" onChange={e => setEmail(e.target.value)} />
                    <InputStyle placeholder="Mot de passe" margin="35px" onChange={e => setMotdepasse(e.target.value)} />
                    <Boxflex margin="30px">
                        <LeCheck type="checkbox" />
                        <Texte>Gardez-moi connecté</Texte>
                    </Boxflex>
                    <ButtonConnecte onClick={soumettreConnexion}>Se connecter</ButtonConnecte>
                </BoxStylled>
                <SpanJaune margin="10px" onClick={() => navigate('/passe-oublier')}>
                    Mot de passe oublié?
                </SpanJaune>
                <Texte color="#FFFFFF" margin="10px">
                    Vous n'avez pas de compte? {' '}
                    <SpanJaune onClick={() => navigate('/inscription')}>
                        S'inscrire
                    </SpanJaune>
                </Texte>
            </ContentStylled>
        </StylledBody>
     );
}
 
export default Connexion;