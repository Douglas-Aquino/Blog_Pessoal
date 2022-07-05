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
`
const Sectiontwo = styled.section`
background-image: url("https://i.pinimg.com/originals/6f/de/4a/6fde4adace244ff0299967dafdd68110.png");
background-size:cover ;
display:flex;
align-items:center;

img{
    border:groove #AF005F 10px;
    width:15vw;
    margin:10vw;
    border-radius:0px 100px 0px 100px;
}
h2{
    font-size:4vw;
    text-shadow: 1px 2px 3px black;
    color:#AF005F;
   
}
`


export default function Header(){
    return(
        <>
        <SectionOne>
            <img src="https://convergenciabrasil.com.br/static/media/bandeira.c07041e2.png" alt="Bandeirinha do Brasil"/>
            <h1>DougBlog</h1>
            <HeaderList>
                <li><a href="">OML</a> </li>
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