import React from "react"
import styled from "styled-components"


const T2 = styled.div`
font-size:3vw;
color:#AF005F;
padding:2vw;
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
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.3vw;
}
ul{
    padding: 0 1.5vw;
    font-size:1.3vw;
    list-style:none;
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
`
const ContainImg = styled.div`
width:85vw;
height:30vw;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:6vw;
`
const StarImg = styled.img`
width:20vw;
height:20vw;
`
const SantaImg = styled.img`
width:40vw;
box-shadow: 10px 10px 10px pink;
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