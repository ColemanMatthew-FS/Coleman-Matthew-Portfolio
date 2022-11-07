import logo from './logo.svg';
import { Container, Row, Col, Card, Ratio, Tab, Tabs } from 'react-bootstrap'
import './App.scss';
import testImage from './images/waygo1.png'
import profile from './images/profile.jpeg'

function App() {
  return (
    <div className="App">
      <header style={{height: "25vh", display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Header background goes here</h1>
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
                  <Tab style={{height: '100vh'}} eventKey="projects" title="Projects">
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ePortfolios/wdd-2209-ColemanMatthew-FS"><Card>
                          <Card.Img variant="top" src={testImage}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WayGo</Card.Title>
                            <Card.Text className="text-center">Functional, Heroku-hosted web application</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ePortfolios/wdd-2209-ColemanMatthew-FS"><Card>
                          <Card.Img variant="top" src={testImage}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WayGo</Card.Title>
                            <Card.Text className="text-center">Functional, Heroku-hosted web application</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ePortfolios/wdd-2209-ColemanMatthew-FS"><Card>
                          <Card.Img variant="top" src={testImage}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WayGo</Card.Title>
                            <Card.Text className="text-center">Functional, Heroku-hosted web application</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                      <Col md="6">
                        <a style={{textDecoration: 'none', color:'inherit'}} href="https://github.com/ePortfolios/wdd-2209-ColemanMatthew-FS"><Card>
                          <Card.Img variant="top" src={testImage}></Card.Img>
                          <Card.Body>
                            <Card.Title className="text-center">WayGo</Card.Title>
                            <Card.Text className="text-center">Functional, Heroku-hosted web application</Card.Text>
                          </Card.Body>
                        </Card></a>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="resume" title="Resume">
                    <Row className="mt-4">
                      <Col md="6">
                        <h4 className="text-center">Programming Languages</h4>
                      </Col>
                      <Col md="6">
                        <h4 className="text-center">Software</h4>
                      </Col>
                    </Row>
                    <hr/>
                    <h4 className="text-center">Experience</h4>
                    <hr/>
                    <h4 className="text-center">Projects</h4>
                    <hr/>
                    <h4 className="text-center">Education</h4>
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
                    <p>Atlanta, Georgia</p>
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
