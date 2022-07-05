import React from "react"

//Estilos
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

//componentes
import Header from "./componet/Header"
import Footer from "./componet/footer"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`

const T1 = styled.h1`
color:;
`

export default class blog extends React.Component{
  render(){
    return(
      <>
      <GlobalStyle />
        <Header/>
        <Footer/>
      </>
    )
  }
}