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

@media(max-width: 768px){
    height:10vw;

    h2{
        font-size:2.5vw;
    }
}
@media(max-width: 375px){
    height:15vw;
    display:flex;
    justify-content: space-around;
    
    h2{
        width:70vw;
        font-size:3.5vw;
    }

}
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

@media(max-width: 768px){
    width:40vw;
    height:10vw;

    img{
        width:6vw;
    }
}
@media(max-width: 375px){
    width:40vw;
    height:100%;

    img{
        width:7vw;
    }
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

                <a href="https://github.com/Douglas-Aquino">
                    <img src="https://raphaelbrodrigues.github.io/images/git.png" alt="Icone do GitHub"/>
                </a>
              </ListIcon>
            </ContainerFooter>
        </>
    )
}