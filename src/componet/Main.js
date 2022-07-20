import React from "react"
import styled from "styled-components"


const T2 = styled.div`
font-size:4vw;
color:#AF005F;
padding:2vw;
text-align:center;
@media(max-width: 375px){
    font-size:7.5vw;
}
`
const ContainPersona = styled.div`
width:20vw;
height:15vw;
background-color:#AF005F;
border:double white 10px;
border-radius:30px;
color:white;
h2{
    height:4vw;
    font-size:1.3vw;
}
ul{
    margin:2vw 2vw;
    font-size:1.3vw;
    list-style:none;
}
@media(max-width: 768px){
    width:30vw;
    height:30vw;

    h2{
        font-size:2.4vw;
        text-decoration:underline;
    }
    ul{
        margin-top:3vw;
        text-align:center;
        font-size:2.3vw;
    }
}
@media(max-width: 375px){
    width:60vw;
    height:30vh;
    h2{
        font-size:4vw;
    }
    ul{
        margin-top:7vw;
        text-align:center;
        font-size:4vw; 
    }
}
`
const ContainMain = styled.div`
height:25vw;
display:flex;
justify-content:space-around;
align-items: center;

h2{
    text-align: center;
}

@media(max-width: 768px){
height:40vw;
}
@media(max-width: 375px){
 height:100vh; 
 display:flex;
 flex-direction: column; 
}
`
const ContainImg = styled.div`
width:85vw;
height:30vw;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:6vw;

@media(max-width: 375px){
    height:60vh;
    display:flex;
    flex-direction: column;
    justify-content:space-around; 
}
`
const StarImg = styled.img`
width:20vw;
height:20vw;

@media(max-width: 375px){
    width:30vw;
    height:25vh;
}
`
const SantaImg = styled.img`
width:40vw;
box-shadow: 10px 10px 10px pink;

@media(max-width: 375px){
    width:100%;
}
`

export default function Main(){
    return(
        <>
        <T2>Sobre</T2>
        <ContainMain>
            <ContainPersona>
                <h2>Hobbys</h2>
                <ul>
                    <li>Escutar música</li>
                    <li>Ler</li>
                    <li>Assistir series/filmes</li>
                    <li>Jogos de tabuleiro</li>
                    <li>Culinária</li>
                </ul>
            </ContainPersona>
            <ContainPersona>
                <h2>Um pouco da minha personalidade</h2>
                <ul>
                    <li>Ambivertido</li>
                    <li>Otimistas</li>
                    <li>Confiante</li>
                    <li>Comprometido</li>
                    <li>Idealista</li>
                </ul>
            </ContainPersona>
            <ContainPersona>
                <h2>Me relaciono bem com pessoas</h2>
                <ul>
                    <li>Brincalhonas</li>
                    <li>Comunicativas</li>
                    <li>Sinceras</li>
                    <li>Sonhadoras</li>
                    <li>Leais</li>
                </ul>
            </ContainPersona>
        </ContainMain>
        <T2>Meu bairro: Santa Teresa ❤️</T2>
        <ContainImg>
        <SantaImg src="https://bafafa.com.br/images/artigos/castelo_do_valentim_foto_americo_vermelho2_05022021_104935.jpg" alt="Bairo de Santa Teresa"/>   
        <StarImg src="https://cdn-icons-png.flaticon.com/512/1227/1227506.png" alt="Iconde de estrela"/>
        </ContainImg> 
        </>
    )
}