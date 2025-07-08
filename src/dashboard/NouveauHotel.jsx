import { Link, useNavigate } from 'react-router-dom';
import { Texte } from '../stylesPages/StyledPages';
import { BorderBottomBox, ButtonEnvoi, ContainerImport, ContentForm, FlexBox, FormFlex, FormGrid, FormGroup, IconDesign, InputForm, InputImport, NewHotel, SelectForm, VisuelImage } from './DashStyles'
import { useState } from 'react';


const NouveauHotel = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        nom: '',
        adresse: '',
        email: '',
        numero: '',
        prix: '',
        devise: 'XOF'
    })

    const [image, setImage] = useState(null)
    const [visuel, setVisuel] = useState(null)

    const changementInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const importImage = (e) => {
        const fichier = (e.target.files[0])
        if(fichier){
            setImage(fichier)
            setVisuel(URL.createObjectURL(fichier))
        }
    }

    const envoiDonner = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token')
        if(!token) return alert('Veiller vous reconnecter pour voir')

        const formData = new FormData()
        for(const key in form){
            formData.append(key, form[key])
        }
        if(image){
            formData.append('image', image)
        }

        try{
            const response = await fetch('https://red-product-backend-tsia.onrender.com/api/ajout', {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: formData,
            })

            const donner = await response.json()

            if(response.ok){
                alert('Hotel ajouté')
                navigate('/principal/hotels')
            } else {
                alert(donner.message)
            }
        } catch (erreur) {
            console.error(erreur)
            alert("Erreur Serveur")
        }
    } 

    return ( 
        <>
            <NewHotel>
                <ContentForm onSubmit={envoiDonner}>
                    <BorderBottomBox>
                        <FlexBox gap="10px">
                            <Link to="/principal/hotels" style={{textDecoration: "none"}}>
                                <IconDesign className='fa-solid fa-arrow-left' cursor="pointer" />
                            </Link>
                            <Texte fonts="18px" font="500" color='#555555'>CREER UN NOUVEAU HOTEL</Texte>
                        </FlexBox>
                    </BorderBottomBox>
                    <FormGrid>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">Nom de l'hotel</Texte>
                            <InputForm name='nom' value={form.nom} onChange={changementInput} placeholder='Ex: Terrou BI' />
                        </FormGroup>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">Adresse</Texte>
                            <InputForm name='adresse' value={form.adresse} onChange={changementInput} placeholder='Ex: Dakar, Mermoz' />
                        </FormGroup>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">E-mail</Texte>
                            <InputForm name='email' value={form.email} onChange={changementInput} placeholder='Ex: terroubi@gmail.com' />
                        </FormGroup>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">Numéro de télephone</Texte>
                            <InputForm name='numero' value={form.numero} onChange={changementInput} placeholder='Ex: +221 77 777 77 77' />
                        </FormGroup>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">Prix par nuit</Texte>
                            <InputForm name='prix' value={form.prix} onChange={changementInput} placeholder='Ex: 25.000' />
                        </FormGroup>
                        <FormGroup>
                            <Texte fonts="14px" font="500" color="#555555">Divise</Texte>
                            {/* <InputForm placeholder='Ex: Terrou BI' /> */}
                            <SelectForm name='devise' value={form.devise} onChange={changementInput}>
                                <option value="XOF">F XOF</option>
                                <option value="Euro">Euro</option>
                                <option value="Dollar">Dollar</option>
                            </SelectForm>
                        </FormGroup>
                    </FormGrid>
                    <FormFlex direction="column" items="start">
                        <Texte fonts="14px" font="500" color="#555555" margin="15px">Ajouter une photo</Texte>
                        <ContainerImport htmlFor='hotel-image'>
                            {visuel ? 
                                (
                                    <VisuelImage src={visuel} />
                                ) 
                                    : 
                                (
                                <> 
                                    <IconDesign className='fa-solid fa-image' font="40px" color='#DDDDDD' />
                                    <Texte fonts="15px" margin="5px" color='#DDDDDD'>Ajouter une image</Texte>
                                    <InputImport id='hotel-image' type='file' accept='images/*' onChange={importImage} />
                                </>
                                )}
                        </ContainerImport>
                    </FormFlex>
                    <FormFlex direction="column" items="end">
                        <ButtonEnvoi type='submit'>Enregistrer</ButtonEnvoi>
                    </FormFlex>
                </ContentForm>
            </NewHotel>
        </>
     );
}
 
export default NouveauHotel;