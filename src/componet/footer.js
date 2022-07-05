import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
display:flex;
align-items:center;
justify-content: space-around;
height:4.29vw;
background-color:#AF005F;
color:white;
border:none;
`
const ListIcon = styled.ul`
width:15vw;
height:100%;
display:flex;
align-items:center;
justify-content: space-evenly;
margin-left:20vw;

img{
    width:3vw;
}
`

export default function Footer(){
    return(
        <>
            <ContainerFooter>
              <h2>Feitor por Douglas Aquino P.</h2>
              <ListIcon>
                <a href="https://www.linkedin.com/in/douglas-aquino-05899016a/">
                    <img src="https://castaticstorage.blob.core.windows.net/centralar/site-parceiro/icones-redes-sociais/4-Linkedin-Branco.png" alt="Icone do linkedin"/>
                </a>
                <a href="https://www.instagram.com/douglaxaquino/">
                    <img src="https://oktobarbike.com.br/wp-content/uploads/2016/08/instagram-icon.png" alt="Icone do Instagram"/>
                    </a>
                <li></li>
              </ListIcon>
            </ContainerFooter>
        </>
    )
}