import styled from "styled-components";


// Sidebar

export const DashBody = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F0F0F0;
    display: flex;
`

export const SidebarStyle = styled.div`
    position: fixed;
    width: 280px;
    background-color: #45484b;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transform: all .3s ease-in-out;
    justify-content: space-between;
    z-index: 10;
    transform: all .3s ease;


    @media (max-width: 768px) {
        /* width: 70px; */
    width: ${props => props.siActive ? '280px' : '70px'};
        /* position: absolute; */
    }
`
export const HautSidebar = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    z-index: 2;
    margin-bottom: 15px;
`

export const BoxPadding = styled.div`
    padding: 0 15px;
    padding-top: 10px;
`

export const UlSidebar = styled.ul`
    list-style: none;
    margin-top: 15px;
    transform: all .3s ease-in-out;

    @media (max-width: 768px) {
        /* width: 70px; */
        margin-top: ${props => props.siActive ? '15px' : '30px'};
        /* margin-top: ; */
    }
`

export const LiSidebar = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 25px;
    font-size: 20px;
    color: white;
    transform: all .3s ease-in-out;
    /* background-color: aqua; */
    cursor: pointer;

    @media (max-width: 768px) {
        /* width: 70px; */
        /* justify-content: ${props => props.siActive ? 'flex-start' : 'center'}; */
        margin-bottom: 15px;
    }
`

export const BasSidebar = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    gap: 15px;
    border-top: 1px solid #ffffff87;
`

export const ImageProfil = styled.img`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '50px'};
    border-radius: 50%;
    object-fit: cover;
    /* border: 1px solid red; */
`

export const Indication = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1EAF74;
`

export const EnligneText = styled.p`
    font-size: 13px;
    color: white;
    opacity: 0.7;
`

export const MasquerElement = styled.div`
    @media (max-width: 768px) {
        /* display: none; */
        display: ${props => props.siActive ? 'block' : 'none'};
        transform: all .3s ease-in-out;
    }
`

export const ButtonActive = styled.div`
    display: none;
    transform: all .3s ease-in-out;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 18px;
        left: ${props => props.siActive ? '220px' : '18px'};
        /* left: 15px; */
        padding: 5px 8px;
        border-radius: 5px;
        background-color: white;
        /* background: none; */
        border: none;
        color: #555555;
        font-size: 15px;
        z-index: 10;
        cursor: pointer;
    }

`

// ----------------------- Dashboard Principal ------------------------------ 


// Dashboard

export const Conteneur = styled.div`
    margin-left: 280px;
    width: calc(100% - 280px);
    min-height: 100vh;
    background-color: #e6e6e6;
    transform: all .3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 70px;
        width: calc(100% - 70px);
    }
`

export const BoxHead = styled.div`
    padding: 10px 20px;
    background-color: white;
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1px;
    box-shadow: 2px 2px 5px #45484b21;
    z-index: 2;
`

export const TitreList = styled.h3`
    font-size: 20px;
    font-weight: bold;
`

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || '15px'};
`

export const ContentInput = styled.div`
    position: relative;
    max-width: 200px;
    width: 100%;
    height: 5vh;
    border-radius: 15px;
    border: 1px solid #AEAEAE;

    /* @media (max-width: 768px) {
        width: 50px;
    } */
`

export const IconRecherche = styled.i`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #AEAEAE;
`;

export const InputRecherche = styled.input`
    width: 100%;
    height: 100%;
    padding: 5px;
    padding-left: 30px;
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 50%;
`

export const BoxRelative = styled.div`
    position: relative;
    /* cursor: pointer; */
`

export const IconDesign = styled.i`
    font-size: ${props => props.font || '16px'};
    color: ${props => props.color || '#45484b'};
    cursor: ${props => props.cursor || 'context-menu'};
`

export const NotificationNombre = styled.span`
    font-size: 11px;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: #FCC100;
    position: absolute;
    top: -10px;
    right: -8px;
    color: #FFFFFF;
`

export const SpanConnecte = styled.span`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #00FF92;
  border: 2px solid white;
  z-index: 2;
`;

export const DashboardContenu = styled.div`
    width: 100%;
    /* min-height: 100vh; */
`

export const SectionTitre = styled.h2`
    /* font-size: 25px; */
    font-size: ${props => props.font || '25px'};
    font-weight: 400;
`

export const ContentBox = styled.div`
    position: relative;
    max-width: 400px;
`

// export const ConteneurCard = styled.div`
//     padding: 20px 30px;
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-between;
//     gap: ${props => props.gap || '0px'};
// `

export const ConteneurCard = styled.div`
  padding: 20px 30px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.min || '280px'}, 1fr)
  );
  gap: ${props => props.gap || '25px'};
  transform: all .3s ease-in-out;


  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`


export const CardContent = styled.div`
    /* width: 295px; */
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const CircleContent = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.bg || '#45484b'};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`


// ----------------------- Dashbord Hotel ------------------------------ 


// Liste Hotels
export const ListContent = styled.div`
    width: 100%;
`

export const ButtonContent = styled.div`
    padding: 10px 15px;
    border: 1px solid #AEAEAE;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 5px 10px;
        min-width: 200px;
    }
`

export const CardHotel = styled.div`
    /* width: 220px; */
    width: 100%;
    height: max-content;
    background-color: white;
    border-radius: 5px;
`

export const CardImg = styled.img`
    width: 100%;
    height: 35vh;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
`

export const InfoHotel = styled.div`
    padding: 10px;
    width: 100%;
`



// ----------------------- Creer Hotel ------------------------------ 


// Nouveau Hotel
 export const NewHotel = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ececec;
    display: flex;
    justify-content: center;
    padding: 20px;
`

export const ContentForm = styled.form`
    padding: 20px 25px;
    background-color: #FFFFFF;
    width: 650px;
    height: max-content;
    border-radius: 5px;
`

export const BorderBottomBox = styled.div`
    width: 100%;
    padding: 15px 0;
    border-bottom: 2px dotted #DDDDDD;
    margin-bottom: 20px;
`

export const FormFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: ${props => props.items || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    gap: ${props => props.gap || '10px'};
    flex-wrap: wrap;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
`

export const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
`

export const InputForm = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    outline: none;
    font-size: 15px;
`

export const ContainerImport = styled.label`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #DDDDDD;
    position: relative;
    cursor: pointer;
`

export const VisuelImage = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`

export const InputImport = styled.input`
    display: none;
`

export const ButtonEnvoi = styled.button`
    margin-top: 25px;
    width: 150px;
    padding: 12px 0;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #45484b;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const SelectForm = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    outline: none;
    font-size: 15px;
    cursor: pointer;
`