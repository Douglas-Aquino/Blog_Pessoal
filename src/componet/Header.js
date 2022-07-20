import React from "react"
import styled from "styled-components"
import FotoBlog from "../Fotos/MinhaFt.jpeg"

const SectionOne = styled.section`
display:felx;
align-items:center;
justify-content:space-between;
border:none;
background-color:#AF005F;
color:white;
 img{
    width:5vw;
}
 h1{
    font-size:4vw;
    font-family: 'Source Serif Pro', serif;
    text-shadow: 1px 2px 3px black;
    margin-left:15vw;
 }
@media(max-width: 768px){
 width:100vw;
 height:10vw;

img{
    width:10vw;
    height:10vh;
}
h1{
    text-shadow: 1px 2px 3px #AF005F; 
}
}
@media(max-width: 375px){
    height:20vw;
    display:felx;
    align-items:center;
    justify-content:space-around;
    
    img{
        width:10vw;
        height:5vh;
    }
    h1{
        font-size:7vw;
    }
}
`
const HeaderList = styled.ul`
width:20vw;
font-size:1.5vw;
display:flex;
align-items:center;
justify-content:space-around;
list-style:none;
a{
    text-decoration: none;
    color:white;
    text-shadow: 1px 2px 3px black;

    &:hover{
        font-size:2vw;
        transition:font-size 0.5;
        color:pink;
        transition:color 0.5s ;
        text-shadow: 1px 10px 10px #F10096;
        transition:text-shadow 0.5s;
    }
}
@media(max-width: 768px){
    width:30vw;
    height:100%;
    a{
        font-size:2.5vw;
        text-shadow: 1px 2px 3px #AF005F; 
    }
}
@media(max-width: 375px){
    width:40vw;
    display:flex;
    align-items:center;
    justify-content:space-around;

    a{
        font-size:4.5vw;
        &:hover{
        text-decoration:underline white;
    }
}
`
const Sectiontwo = styled.section`
background-image: url("https://i.pinimg.com/originals/6f/de/4a/6fde4adace244ff0299967dafdd68110.png");
background-size:cover ;
display:flex;
align-items:center;

img{
    border:groove #AF005F 5px;
    width:15vw;
    margin:10vw;
    border-radius:0px 100px 0px 100px;
}
h2{
    font-size:4vw;
    text-shadow: 1px 2px 3px black;
    color:#AF005F;   
}
@media(max-width: 768px){
    height:60vw;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    img{
        width:20vw;
        border-radius:30%;
        margin:0;
    }
    h2{
        color:white;
        text-shadow: 1px 2px 3px #AF005F;
        text-decoration:underline ;
    }
}
@media(max-width: 375px){
    height:80vw;
    
    img{
        width:30vw; 
        border:groove 3px #AF005F;
        border-radius:5px 5px 5px 5px;
    
    }
    h2{
        font-size:7vw;
    }
}
`

export default function Header(){
    return(
        <>
        <SectionOne>
            <img src="https://convergenciabrasil.com.br/static/media/bandeira.c07041e2.png" alt="Bandeirinha do Brasil"/>
            <h1>DougBlog</h1>
            <HeaderList>
                <li><a href=" https://douglas-aquino.github.io/Campanha_Pro_Bairro/">ONU</a> </li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Outros</a></li>
            </HeaderList>

        </SectionOne>
        <Sectiontwo>
            <img src={FotoBlog} alt="Foto de uma pessoa linda"/>
            <h2>Bem vindo ao meu blog!!!</h2>
        </Sectiontwo>
        </>
    )
}