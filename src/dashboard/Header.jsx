import { Link, useNavigate } from 'react-router-dom';
import { BoxHead, ImageProfil, TitreList, FlexBox, ContentInput, InputRecherche, IconRecherche, BoxRelative, IconDesign, NotificationNombre, SpanConnecte } from './DashStyles'

const Header = ({setRecherche}) => {
    const navigate = useNavigate()

    const deconnexion = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    const filtreRecherche = (e) => {
        setRecherche(e.target.value)
    }

    return ( 
        <BoxHead>
            <TitreList>Dashboard</TitreList>
            <FlexBox gap="20px">
                <ContentInput>
                    <IconRecherche className="fa fa-search" />
                    <InputRecherche type='text' placeholder='Recherche' onChange={filtreRecherche} />
                </ContentInput>
                <BoxRelative>
                    <IconDesign className="fa-solid fa-bell" />
                    <NotificationNombre>3</NotificationNombre>
                </BoxRelative>
                <BoxRelative>
                    <ImageProfil width="35px" height="35px" src='' />
                    <SpanConnecte />
                </BoxRelative>
                <div onClick={deconnexion}>
                    <IconDesign font="20px" className="fa-solid fa-right-from-bracket" cursor="pointer" />
                </div>
            </FlexBox>
        </BoxHead>        
     );
}
 
export default Header;