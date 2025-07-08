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

import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import derriere from '../assets/derriere.png';
import { useState } from 'react';

const Inscription = () => {
  const [nom, setNom] = useState()
  const [email, setEmail] = useState()
  const [motdepasse, setMotdepasse] = useState()
  const navigate = useNavigate()

  const soumettreInscription = async () => {
    try{
      const response = await fetch('https://red-product-backend-tsia.onrender.com/api/auth/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, motdepasse })
      })

      const donner = await response.json()
      if(response.ok){
        alert('Inscription Reussi')
        localStorage.setItem('token', donner.token)
        localStorage.setItem('user', JSON.stringify(donner.user))
        navigate('/principal')
      } else {
        alert(donner.message)
      }
    } catch (erreur){
      console.error(erreur)
      alert('Erreur lors de l`/inscription')
    }
  }

  return (
    <StylledBody>
      <EndessusBackground src={derriere} alt="background" />
      <ContentStylled>
        <Boxflex>
          <Lelogo src={logo} alt="Red Product" />
          <LogoTitre>Red Product</LogoTitre>
        </Boxflex>
        <BoxStylled>
          <Texte>Inscrivez-vous en tant qu' Admin</Texte>
          <InputStyle placeholder="Nom" margin="25px" onChange={e => setNom(e.target.value)} />
          <InputStyle placeholder="Email" margin="25px" onChange={e => setEmail(e.target.value)} />
          <InputStyle placeholder="Mot de passe" margin="25px" onChange={e => setMotdepasse(e.target.value)} />
          <Boxflex margin="30px">
            <LeCheck type="checkbox" />
            <Texte>Gardez-moi connecté</Texte>
          </Boxflex>
          <ButtonConnecte onClick={soumettreInscription}>S'inscrire</ButtonConnecte>
        </BoxStylled>
        <Texte color="#FFFFFF" margin="10px">
          Vous avez déjà un compte ? {' '}
          <SpanJaune onClick={() => navigate('/connexion')}>
            Se connnecter
          </SpanJaune>
        </Texte>
      </ContentStylled>
    </StylledBody>
  );
};

export default Inscription;
