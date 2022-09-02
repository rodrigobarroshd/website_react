import React from "react";
import renata from "../assets/img/renatahd.jpg";
import { Container, Row, Col } from "react-bootstrap";


export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
      <Container>
      <Row className="aligh-items-center">

        {/* Coluna para Imagem */}
        <Col xs={12} md={6} xl={6}>
        <div className="personal">
            <img src={renata} alt="Image" />
          </div>
          </Col>

          {/* Coluna para Texto */}
          <Col>         
          <div className="container-items-center">
            <div className="text-right-items-center-text-center">
              <h1 className="title-font-text-white">
                Olá, sou a Renata.
                <br className="taglinehd" />
              </h1>
              <p className="leading-relaxed">
              Renata Souza Barreto é um exemplo claro de estudante que adquiriu amplas possibilidades e 
              liberdades para escolher caminhos que pudessem seguir, sendo PROTAGONISTA da sua trajetória, 
              aqui no Colégio Perfil. 
              
              </p>

              <p className="leading-relaxed">
              Doutoranda em Modelagem Computacional e Tecnologia Industrial (PPGMCTI) SENAI-CIMATEC; 
              Mestranda no Programa de Pós-Graduação em Ensino, Filosofia e História das Ciências 
              – UFBA; Mestre em Modelagem Computacional e Tecnologia Industrial (PPGMCTI) SENAI-CIMATEC; 
              Graduada em Pedagogia pela Universidade do Estado da Bahia; Graduada em Educação Física 
              Licenciatura pela União Metropolitana de Educação e Cultura.
              </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="button-contato">
                Entre em Contato
              </a>
              <a
                href="#projects"
                className="button-contato">
                Veja meu Trabalho
              </a>
            </div>
          </div>
          </div>
        </Col>
        </Row>
        
        </Container>


        
      </section>
      
      
  
  )
}