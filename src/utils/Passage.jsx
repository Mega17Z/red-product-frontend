import { BoxRelative, FlexBox } from "../dashboard/DashStyles";
import { ImageFilter, PassageInter, Titrepassage } from "./Stylepassage";
import logo from '../assets/logo.png'
import { useState } from "react";
import { useEffect } from "react";
import { Texte } from "../stylesPages/StyledPages";

const Passage = ( {message} ) => {
    const [visible, setVisible] = useState(true)
    const [monter, setMonter] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() =>{
            setVisible(false)
        }, 1000)
        const monte = setTimeout(() =>{
            setMonter(false)
        }, 1500)

        return () =>{
            clearTimeout(timer)
            clearTimeout(monte)   
        }
    }, [])

    if(!monter) return null;

    return ( 
        <PassageInter visible={visible}>
            <BoxRelative>
                <FlexBox>
                    <ImageFilter src={logo} />
                    <Titrepassage>Red Product</Titrepassage>
                </FlexBox>
                <Texte fonts="12px" margin="10px" style={{textAlign: "center"}}>{message}</Texte>
            </BoxRelative>
        </PassageInter>
     );
}
 
export default Passage;