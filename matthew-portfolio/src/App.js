import { useRef } from 'react';
import { Container, Row, Col, Card, Ratio, Tab, Tabs } from 'react-bootstrap'
import './App.scss';
import cliffdash from './images/cliffdash.png'
import wdd353 from './images/wdd353.jpg'
import ziptrip from './images/ziptrip.jpg'
import cliffport from './images/cliffport.png'
import profile from './images/profile.jpeg'
import serverside from './images/serversidepractice2.png'
import neocities from './images/neocities1.jpg'

function App() {
  const video = useRef();
  let command = {
    "event":"command",
    "func":"pauseVideo"
  }
  const pauseVideo = () => {
    video.current.contentWindow.postMessage(JSON.stringify(command),"*");
  };

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
                  defaultActiveKey="projects"
                  onSelect={() => pauseVideo()}
                  fill
                >
                  <Tab style={{height: '100%'}} eventKey="projects" title="Projects">
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ColemanMatthew-FS/serverside-practice/tree/dev"><Card>
                          <Card.Img variant="top" src={serverside}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">Serverside Coding Case Study</Card.Title>
                            <Card.Text className="text-center">
                              An experiment in creating a website using a Twig frontend and a Node.JS backend to connect to a Sequelize server.
                              A React Router update is currently in the works.
                            </Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://french-toast-haustier.neocities.org/template.html"><Card>
                          <Card.Img variant="top" src={neocities}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">Neocities Portfolio Template</Card.Title>
                            <Card.Text className="text-center">A design exercise in creating a stylish Bootstrap single page website.</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://emar-data-tools.shinyapps.io/cliff_dashboard_demo/"><Card>
                          <Card.Img variant="top" src={cliffdash}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">CLIFF Dashboard</Card.Title>
                            <Card.Text className="text-center">Worked to port existing Atlanta Federal Reserve tools into HTML, CSS, and JavaScript</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://www.behance.net/gallery/169704795/2022-Bootstrap-Project"><Card>
                          <Card.Img variant="top" src={wdd353}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WDD353</Card.Title>
                            <Card.Text className="text-center">Full Sail student project wherein I created a Bootstrap frontend connected to a Node Express backend, complete with functioning login screen, key learnings included browser sessions.</Card.Text>
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
                            <Card.Text className="text-center">Full Sail student project where I designed a multi page, GitHub Pages site made in Bootstrap, key learnings included prototyping in Adobe XD, and styling in Bootstrap</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://emar-data-tools.shinyapps.io/clifftool/"><Card>
                          <Card.Img variant="top" src={cliffport}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">CLIFF Portal</Card.Title>
                            <Card.Text className="text-center">Created a Portal page for the Atlanta Fed's CLIFF tools using HTML, CSS, JavaScript, and Bootstrap.</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="about" title="About">
                    <h2 className="mt-3 text-center">Matthew Coleman</h2>
                    <h3 className="text-center">Web Designer • Web Developer</h3>
                    <hr></hr>
                    <Ratio aspectRatio="16x9">
                      {/* note: "?enablejsapi=1" is necessary for the postmessage commands to work! */}
                      <iframe ref={video} width="560" height="315" src="https://www.youtube.com/embed/83YQmNdOmm4?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Ratio>
                    <p className="text-center mt-3">Hi! I'm Matthew Coleman, and I'm a full-stack web dev based near Atlanta, I worked for the Federal Reserve Bank of Atlanta between June 2022 and June 2023. I hope to find further work creating web applications for enterprises.</p>
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
                    <p>Winston, Georgia</p>
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
