import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/banner-computer.jpg";
import projImg2 from "../assets/img/banner-computer.jpg";
import projImg3 from "../assets/img/banner-computer.jpg";
import colorSharp2 from "../assets/img/banner-computer.jpg"; 
import menino from "../assets/img/menino.jpg"; 
import plugadas from "../assets/img/plugadas.jpg"; 
import pensamento from "../assets/img/pensamento.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg1,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg2,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg3,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg1,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg2,
    },
    {
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Blog</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Atividades Desplugadas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Atividades Plugadas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Pensamento Computacional</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>

                        {/* Coluna para Texto */}
                        <Col>         
                          <div className="container-items-left">
                            <div className="text-right-items-left-text-left">
                              {/* <h1 className="title-font-text-white">
                                Atividades Desplugadas
                              </h1> */}
                              <h2>Sobre a disciplina</h2>
                              <p className="leading-relaxed">
                              O conceito de Pensamento Computacional ganhou relevância nos últimos 
                              anos e tornou-se conteúdo obrigatório em mais de 50 países.
                              Mas afinal, no que consiste essa disciplina? 
                              </p>
                              <p className="leading-relaxed">
                              O Pensamento Computacional apresenta fundamentos 
                              da Ciência da Computação e desenvolve habilidades 
                              socioemocionais da Educação Infantil ao Ensino Fundamental 2. 
                              </p>
                              <p className="leading-relaxed">
                              No programa, os alunos aplicam tecnologias digitais como programação, 
                              robótica, eletrônica digital, internet das coisas, inteligência 
                              artificial e práticas Maker para solucionar problemas interdisciplinares.
                              </p>
                              <p className="leading-relaxed">
                              No programa, os alunos aplicam tecnologias digitais como programação, 
                              robótica, eletrônica digital, internet das coisas, inteligência 
                              artificial e práticas Maker para solucionar problemas interdisciplinares.
                              </p>

                            <div className="flex justify-center">
                              <a
                                href="#contact"
                                className="button-contato"><span>Saiba Mais</span>
                                
                              </a>
                             
                            </div>
                          </div>
                          </div>
                        </Col>

                        {/* Coluna para Imagem */}
                        <Col xs={12} md={6} xl={6}>
                        <div className="personal">
                            <img src={menino} alt="Image" />
                          </div>
                          </Col>
  
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsuasssssm dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>

                    {/* Coluna para Texto */}
                    <Col>         
                      <div className="container-items-left">
                        <div className="text-right-items-left-text-left">
                          {/* <h1 className="title-font-text-white">
                            Atividades Plugadas
                          </h1> */}
                          <h2>Sobre a disciplina</h2>
                          <p className="leading-relaxed">
                          O conceito de Pensamento Computacional ganhou relevância nos últimos 
                          anos e tornou-se conteúdo obrigatório em mais de 50 países.
                          Mas afinal, no que consiste essa disciplina? 
                          </p>
                          <p className="leading-relaxed">
                          O Pensamento Computacional apresenta fundamentos 
                          da Ciência da Computação e desenvolve habilidades 
                          socioemocionais da Educação Infantil ao Ensino Fundamental 2. 
                          </p>
                          <p className="leading-relaxed">
                          No programa, os alunos aplicam tecnologias digitais como programação, 
                          robótica, eletrônica digital, internet das coisas, inteligência 
                          artificial e práticas Maker para solucionar problemas interdisciplinares.
                          </p>
                          <p className="leading-relaxed">
                          No programa, os alunos aplicam tecnologias digitais como programação, 
                          robótica, eletrônica digital, internet das coisas, inteligência 
                          artificial e práticas Maker para solucionar problemas interdisciplinares.
                          </p>

                        <div className="flex justify-center">
                          <a
                            href="#contact"
                            className="button-contato">
                            Saiba Mais
                          </a>

                        </div>
                      </div>
                      </div>
                    </Col>

                    {/* Coluna para Imagem */}
                    <Col xs={12} md={6} xl={6}>
                    <div className="personal">
                        <img src={plugadas} alt="Image" />
                      </div>
                      </Col>

                    </Row>
                                          
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>

                        {/* Coluna para Texto */}
                        <Col>         
                          <div className="container-items-left">
                            <div className="text-right-items-left-text-left">
                              {/* <h1 className="title-font-text-white">
                                Pensamento Computacional
                              </h1> */}
                              <h2>Sobre a disciplina</h2>
                              <p className="leading-relaxed">
                              O conceito de Pensamento Computacional ganhou relevância nos últimos 
                              anos e tornou-se conteúdo obrigatório em mais de 50 países.
                              Mas afinal, no que consiste essa disciplina? 
                              </p>
                              <p className="leading-relaxed">
                              O Pensamento Computacional apresenta fundamentos 
                              da Ciência da Computação e desenvolve habilidades 
                              socioemocionais da Educação Infantil ao Ensino Fundamental 2. 
                              </p>
                              <p className="leading-relaxed">
                              No programa, os alunos aplicam tecnologias digitais como programação, 
                              robótica, eletrônica digital, internet das coisas, inteligência 
                              artificial e práticas Maker para solucionar problemas interdisciplinares.
                              </p>
                              <p className="leading-relaxed">
                              No programa, os alunos aplicam tecnologias digitais como programação, 
                              robótica, eletrônica digital, internet das coisas, inteligência 
                              artificial e práticas Maker para solucionar problemas interdisciplinares.
                              </p>

                            <div className="flex justify-center">
                              <a
                                href="#contact"
                                className="button-contato">
                                Saiba Mais
                              </a>

                            </div>
                          </div>
                          </div>
                        </Col>

                        {/* Coluna para Imagem */}
                        <Col xs={12} md={6} xl={6}>
                        <div className="personal">
                            <img src={pensamento} alt="Image" />
                          </div>
                          </Col>

                        </Row>
                      
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
