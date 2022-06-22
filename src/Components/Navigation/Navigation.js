import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { VscTools } from 'react-icons/vsc';
import { FaCarSide, FaRegHeart } from 'react-icons/fa';
import { TbSteeringWheel, TbFlag, TbWorld } from 'react-icons/tb'
import { RiRulerLine, RiBookmark3Line } from 'react-icons/ri';
import { IoIosPaper, IoIosSearch, IoIosPricetag } from 'react-icons/io';
import { HiOutlineShoppingBag, HiOutlineColorSwatch, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineSportsMotorsports, MdSlowMotionVideo, MdOutlinePersonalVideo } from 'react-icons/md';
import { Navbar, Nav, NavDropdown, Container, Dropdown, DropdownButton, ButtonGroup,Row, Col } from 'react-bootstrap';
import fourdoor from '../../Images/fourdoor.jpg';
import MINI from '../../Images/MINI.jpg'
import './Navigation.css'
export const Navigation = () => {
  return (
      <Navbar variant="light" bg="light" expand="lg">
          <Container fluid>
              <Navbar.Brand href="#home"><img src={MINI} alt='MINI logo' height='75px'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="nav-dropdown-example" />
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <Row></Row><Col></Col>
                      <NavDropdown
                          id="nav-dropdown"
                          title="MODELS"
                          menuVariant="light"
                      >
                          <NavDropdown.Item href="#action/3.1">
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                                 MINI HARDTOP 2 DOOR
                                 <button className='navbtn'>explore</button>
                                    <button className='navbtn navbtnoffer'>offers</button>
                                </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                            MINI HARDTOP 4 DOOR
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                                MINI COUNTRYMAN
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                            </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                            MIIN CLUBMAN
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                            MIIN CONVERTIBLE
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4"> 
                          < img src={fourdoor} alt='cooper gray' height='200px' />
                          JOHN COOPER WORKS
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4"> 
                          < img src={fourdoor} alt='cooper gray' height='200px' />
                            MIIN ELECTRIC
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4"> 
                            < img src={fourdoor} alt='cooper gray' height='200px' />
                            SPECIAL EDITIONS
                              <button className='navbtn'>explore</button>
                              <button className='navbtn navbtnoffer'>offers</button>
                              </NavDropdown.Item>
                          <NavDropdown.Divider/>
                          <NavDropdown.Item href="#action/3.4"> CERTIFIED PRE-OWNED</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">  <FaCarSide /> ALL MODELS</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">  <IoIosSearch/> SEARCH ALL INVENTORY</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="BUILD"
                          menuVariant="light"
                      >
                          <NavDropdown.Item href="#action/3.1">  <VscTools /> build a new mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">  <FaCarSide /> your saved mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">  <HiOutlineShoppingBag /> shop your accessories</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="WHY MINI"
                          menuVariant="light"
                      >
                          <NavDropdown.Item href="#action/3.1"> <TbSteeringWheel/> for the drive</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">  <RiRulerLine/> sunprising size</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">  <HiOutlineColorSwatch/> iconic design</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">  <TbWorld /> divers technology </NavDropdown.Item>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` top reasons to get a mini  ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1">premium quality & value</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">covered maintenance</Dropdown.Item>
                                      <Dropdown.Item eventKey="1">exceptioinal safety</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">awards & accolades</Dropdown.Item>
                                      <Dropdown.Item eventKey="1">mini family</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">60 years of motoring</Dropdown.Item>
                                    </DropdownButton>
                              ))}
                          </div>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` progrmas & events ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1"> MINI MOTORSPORTS</Dropdown.Item>
                                      <Dropdown.Item eventKey="2"> MINI YOURS</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="SHOPPING"
                          menuVariant="light"
                      >
                          <NavDropdown.Item href="#action/3.1"> <MdOutlinePersonalVideo/> shop @ home</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">  <RiBookmark3Line/> certified pre-owned</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">  <VscTools /> build a new mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.1"> <IoIosPricetag /> special offers</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">  <IoIosSearch/> search inventory</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">  <HiOutlineLocationMarker/> find a dealer</NavDropdown.Item>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` shopping tools ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1">estimate a payment</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">value your trade-in</Dropdown.Item>
                                      <Dropdown.Item eventKey="3"> credit score ESTIMATOR </Dropdown.Item>
                                      <Dropdown.Item eventKey="4">schedule a test drive</Dropdown.Item>
                                      <Dropdown.Item eventKey="5">get a mini brochure </Dropdown.Item>
                                      <Dropdown.Item eventKey="6">get a quote</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` finance & protection ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1">Apply for financing</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">lease & finance plans</Dropdown.Item>
                                      <Dropdown.Item eventKey="3">military programs </Dropdown.Item>
                                      <Dropdown.Item eventKey="4">motoring protections plans</Dropdown.Item>
                                      <Dropdown.Item eventKey="5">college grad special offer </Dropdown.Item>
                                      <Dropdown.Item eventKey="6">corporate sales</Dropdown.Item>
                                      <Dropdown.Item eventKey="7">u.s diplomatic sales program</Dropdown.Item>
                                      <Dropdown.Item eventKey="8">mini mobility program</Dropdown.Item>
                                      <Dropdown.Item eventKey="9">car and ride share</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="OWNERS"
                          menuVariant="light"
                      >
                          <NavDropdown.Item href="#action/3.1">  <CgProfile/> your account</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2"> <TbFlag/> my mini gargare</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3"> <FaRegHeart /> mini community</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.1"> < MdSlowMotionVideo /> mini videos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2"> < IoIosPaper/> owners manual</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3"> < MdOutlineSportsMotorsports /> motoring & accessories</NavDropdown.Item>
                          <div className="mb-2">
                              {[ 'end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` services & support  ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1">find recalls</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">customer support </Dropdown.Item>
                                      <Dropdown.Item eventKey="1">mini dealers services </Dropdown.Item>
                                      <Dropdown.Item eventKey="2">mini certified collision repair centers </Dropdown.Item>
                                      <Dropdown.Item eventKey="2">warranties </Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="secondary"
                                      title={` ownder community ${direction} `}
                                  >
                                      <Dropdown.Item eventKey="1">min driving experience</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">find owner clubs</Dropdown.Item>
                                      <Dropdown.Item eventKey="1">mobile apps</Dropdown.Item>
                                      <Dropdown.Item eventKey="2">owner stories</Dropdown.Item>
                                      <Dropdown.Item eventKey="1">mini takes the states</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
                      <Navbar.Brand href="#home"><img src={MINI} alt='MINI logo' height='25px' /></Navbar.Brand>
                      <Nav.Link href="#home">certified pre-owned</Nav.Link>
                      <Nav.Link href="#link">Special Offers</Nav.Link>
                      <Nav.Link href="#home"> dealers & locations</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}
