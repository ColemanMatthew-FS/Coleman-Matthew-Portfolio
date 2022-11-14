import logo from './logo.svg';
import { Container, Row, Col, Card, Ratio, Tab, Tabs } from 'react-bootstrap'
import './App.scss';
import waygo from './images/waygo1.png'
import wdd353 from './images/wdd353.jpg'
import ziptrip from './images/ziptrip.jpg'
import superorganize from './images/superorganize.png'
import profile from './images/profile.jpeg'

function App() {
  return (
    <div className="App">
      <header style={{height: "25vh", display:'flex', alignItems: 'center', justifyContent: 'center', color: '#fdfdfe'}}>
        <h1>Matthew Coleman</h1>
      </header>
      <Container>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Tabs
                  defaultActiveKey="home"
                  fill
                >
                  <Tab eventKey="home" title="Home">
                    <h2 className="mt-3 text-center">Matthew Coleman</h2>
                    <h3 className="text-center">Web Designer • Web Developer</h3>
                    <hr></hr>
                    <Ratio aspectRatio="16x9">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZnuwB35GYMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Ratio>
                    <p className="text-center">Hi! I'm Matthew Coleman, and blah blah blah</p>
                  </Tab>
                  <Tab style={{height: '100%'}} eventKey="projects" title="Projects">
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ePortfolios/wdd-2209-ColemanMatthew-FS"><Card>
                          <Card.Img variant="top" src={waygo}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WayGo</Card.Title>
                            <Card.Text className="text-center">Functional, Heroku-hosted web application</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ColemanMatthew-FS/WDD_353_FRONTEND_TO_BACKEND"><Card>
                          <Card.Img variant="top" src={wdd353}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WDD353</Card.Title>
                            <Card.Text className="text-center">Bootstrap frontend connected to a Node Express backend, complete with functioning login screen</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://colemanmatthew-fs.github.io/project-and-portfolio-3/"><Card>
                          <Card.Img variant="top" src={ziptrip}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">ZipTrip</Card.Title>
                            <Card.Text className="text-center">A multi page, GitHub Pages site made in Bootstrap, mocking up a concept for a Travel related app</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/dws2/kanban-ColemanMatthew-FS/tree/master"><Card>
                          <Card.Img variant="top" src={superorganize}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">SuperOrganize Kanban</Card.Title>
                            <Card.Text className="text-center">Persistent kanban application created with JavaScript, HTML, and SCSS</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="more info" title="More Info">
                    <h4 className="text-center mt-4">Contact</h4>
                    <p className="text-center">(678) 857-8955 | <a href="mailto:matthewcoleman0066@gmail.com">matthewcoleman0066@gmail.com</a> | Villa Rica, GA | <a href="https://github.com/ColemanMatthew-FS">GitHub</a> | <a href="https://www.linkedin.com/in/matthew-coleman-7b8981221/">LinkedIn</a></p>
                    <Row>
                      <Col md="6">
                        <h4 className="text-center">Programming Languages</h4>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <ul className="w-50">
                            <li>
                              JavaScript
                            </li>
                            <li>
                              Node.JS
                            </li>
                            <li>
                              Express.JS
                            </li>
                            <li>
                              React.JS
                            </li>
                            <li>
                              Redux.JS
                            </li>
                            <li>
                              C#
                            </li>
                            <li>
                              Bootstrap
                            </li>
                            <li>
                              HTML
                            </li>
                            <li>
                              CSS
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md="6">
                        <h4 className="text-center">Software</h4>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <ul className="w-50">
                            <li>Visual Studio Code</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>Xamarin</li>
                            <li>Microsoft Excel</li>
                            <li>Microsoft Powerpoint</li>
                            <li>Clip Studio Paint</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    <hr/>
                    <h4 className="text-center">Education</h4>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <ul>
                        <li><span style={{fontWeight: 'bold'}}>Full Sail University – Winter Park, FL </span><span> August 2020 - November 2022</span>
                        <ul>
                          <li>Bachelor of Science in Web Design and Development</li>
                        </ul>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                </Tabs>
              </Card.Header>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src={profile}/>
              <Card.Body>
                <Card.Text>
                  <div className="justify-content-between" style={{display:"flex"}}>
                    <p>Name</p>
                    <p>Matthew Coleman</p>
                  </div>
                  <div className="justify-content-between" style={{display:"flex"}}>
                    <p>Interests</p>
                    <p>Coding, Gaming, Art</p>
                  </div>
                  <div className="justify-content-between" style={{display:"flex"}}>
                    <p>Location</p>
                    <p>Villa Rica, Georgia</p>
                  </div>
                  <div className="justify-content-between" style={{display:"flex"}}>
                    <p>Graduation</p>
                    <p>2022</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
