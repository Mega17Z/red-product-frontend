import {
  StylledBody,
  EndessusBackground,
  ContentStylled,
  Texte,
  Boxflex,
  InputStyle,
  Lelogo,
  LogoTitre,
  BoxStylled,
  SpanJaune,
  ButtonConnecte
} from '../stylesPages/StyledPages';

import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import derriere from '../assets/derriere.png';

const PasseOublier = () => {
    const navigate = useNavigate()

  return (
    <StylledBody>
      <EndessusBackground src={derriere} alt="background" />
      <ContentStylled>
        <Boxflex>
          <Lelogo src={logo} alt="Red Product" />
          <LogoTitre>Red Product</LogoTitre>
        </Boxflex>
        <BoxStylled>
          <Texte>Mot de passe oublier ?</Texte>
          <Texte margin="25px">
            Entrer votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe
          </Texte> 
          <InputStyle placeholder="Votre e-mail" margin="25px" />
          <ButtonConnecte>Envoyer</ButtonConnecte>
        </BoxStylled>
        <Texte color="#FFFFFF" margin="10px">
            Revenir à la {' '}
            <SpanJaune onClick={() => navigate('/connexion')}>
                Connexion
            </SpanJaune>
        </Texte>
      </ContentStylled>
    </StylledBody>
  );
};

export default PasseOublier;
