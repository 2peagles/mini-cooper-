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
      <Navbar variant="light" bg="light" expand="lg" >
          <Container fluid>
              <Navbar.Brand href="#home"><img src={MINI} alt='MINI logo' height='75px'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="nav-dropdown-example" />
              <Navbar.Collapse id="navbar-dark-example">
                  <Nav >
                      <NavDropdown
                          id="nav-dropdown"
                          title="MODELS"
                          menuVariant="light"
                          className='position-static p-3  justify-content-start'
                      >
                          <Row>
                              <Col>
                                  <NavDropdown.Item href="#action/3.1" className='mt-0 w-100 p-4 ml-4 justify-content-start '>
                            < img src={fourdoor} alt='cooper gray' height='150px' className='d-block'/>
                                 MINI HARDTOP 2 DOOR
                                    <button className='navbtn d-block'>explore</button>
                                    <button className='navbtn navbtnoffer  '>offers</button>
                                </NavDropdown.Item>
                              </Col>
                          <Col>
                                  <NavDropdown.Item href="#action/3.2" className='mt-0 w-100 p-4 ml-4 '>
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                            MINI HARDTOP 4 DOOR
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                          <Col>
                                  <NavDropdown.Item href="#action/3.3" className='mt-0 w-100 p-4 ml-4 '>
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                                MINI COUNTRYMAN
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                            </NavDropdown.Item>
                              </Col>
                          <Col>
                                  <NavDropdown.Item href="#action/3.4" className='mt-0 w-100 p-4 ml-4 '>
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                            MIIN CLUBMAN
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                      </Row>
                          <Row>
                          <Col>
                          <NavDropdown.Item href="#action/3.4">
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                            MIIN CONVERTIBLE
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                          <Col>
                          <NavDropdown.Item href="#action/3.4"> 
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                          JOHN COOPER WORKS
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                          <Col>
                          <NavDropdown.Item href="#action/3.4"> 
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                            MIIN ELECTRIC
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                          <Col>
                          <NavDropdown.Item href="#action/3.4"> 
                                      < img src={fourdoor} alt='cooper gray' height='150px' className='d-block' />
                            SPECIAL EDITIONS
                              <button className='navbtn d-block'>explore</button>
                              <button className='navbtn navbtnoffer d-block'>offers</button>
                              </NavDropdown.Item>
                              </Col>
                              </Row>
                          <Row>
                          <NavDropdown.Divider/>
                              <Col > <NavDropdown.Item href="#action/3.4"> CERTIFIED PRE-OWNED </NavDropdown.Item></Col>
                              <Col > <NavDropdown.Item href="#action/3.4">  <FaCarSide /> ALL MODELS</NavDropdown.Item></Col>
                              <Col ><NavDropdown.Item href="#action/3.4">  <IoIosSearch /> SEARCH ALL INVENTORY</NavDropdown.Item></Col>
                              </Row>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="BUILD"
                          menuVariant="light"
                          className='p-3'
                      >
                          <NavDropdown.Item href="#action/3.1" className='p-4'>  <VscTools  className='icon'/> build a new mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'>  <FaCarSide classname='icon' /> your saved mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'>  <HiOutlineShoppingBag className='icon' /> shop your accessories</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="WHY MINI"
                          menuVariant="light"
                          className='p-3'
                      >
                          <NavDropdown.Item href="#action/3.1" className='p-4'> <TbSteeringWheel className='icon' /> for the drive</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'>  <RiRulerLine className='icon' /> sunprising size</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'>  <HiOutlineColorSwatch className='icon' /> iconic design</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'>  <TbWorld className='icon' /> divers technology </NavDropdown.Item>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="light"
                                      title={` top reasons to get a mini  ${direction} `}
                                      className='position-static p-4'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>premium quality & value</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>covered maintenance</Dropdown.Item>
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>exceptioinal safety</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>awards & accolades</Dropdown.Item>
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>mini family</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>60 years of motoring</Dropdown.Item>
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
                                      variant="light"
                                      title={` progrmas & events ${direction} `}
                                      className='position-static p-4'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'> MINI MOTORSPORTS</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'> MINI YOURS</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="SHOPPING"
                          menuVariant="light"
                          className='p-3'
                      >
                          <NavDropdown.Item href="#action/3.1" className='p-4'> <MdOutlinePersonalVideo className='icon' /> shop @ home</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'>  <RiBookmark3Line className='icon' /> certified pre-owned</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'>  <VscTools className='icon' /> build a new mini</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.1" className='p-4'> <IoIosPricetag className='icon' /> special offers</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'>  <IoIosSearch className='icon' /> search inventory</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'>  <HiOutlineLocationMarker className='icon' /> find a dealer</NavDropdown.Item>
                          <div className="mb-2">
                              {['end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="light"
                                      title={` shopping tools ${direction} `}
                                      className='position-static p-4'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>estimate a payment</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>value your trade-in</Dropdown.Item>
                                      <Dropdown.Item eventKey="3" className='h-100 p-2'> credit score ESTIMATOR </Dropdown.Item>
                                      <Dropdown.Item eventKey="4" className='h-100 p-2'>schedule a test drive</Dropdown.Item>
                                      <Dropdown.Item eventKey="5" className='h-100 p-2'>get a mini brochure </Dropdown.Item>
                                      <Dropdown.Item eventKey="6" className='h-100 p-2'>get a quote</Dropdown.Item>
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
                                      variant="light"
                                      title={` finance & protection ${direction} `}
                                      className='position-static p-4'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>Apply for financing</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>lease & finance plans</Dropdown.Item>
                                      <Dropdown.Item eventKey="3" className='h-100 p-2'>military programs </Dropdown.Item>
                                      <Dropdown.Item eventKey="4" className='h-100 p-2'>motoring protections plans</Dropdown.Item>
                                      <Dropdown.Item eventKey="5" className='h-100 p-2'>college grad special offer </Dropdown.Item>
                                      <Dropdown.Item eventKey="6" className='h-100 p-2'>corporate sales</Dropdown.Item>
                                      <Dropdown.Item eventKey="7" className='h-100 p-2'>u.s diplomatic sales program</Dropdown.Item>
                                      <Dropdown.Item eventKey="8" className='h-100 p-2'>mini mobility program</Dropdown.Item>
                                      <Dropdown.Item eventKey="9" className='h-100 p-2'>car and ride share</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
                      <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="OWNERS"
                          menuVariant="light"
                          className='p-3'
                      >
                          <NavDropdown.Item href="#action/3.1" className='p-4'>  <CgProfile className='icon' /> your account</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'> <TbFlag className='icon' /> my mini gargare</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'> <FaRegHeart className='icon' /> mini community</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.1" className='p-4'> < MdSlowMotionVideo className='icon' /> mini videos</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2" className='p-4'> < IoIosPaper className='icon' /> owners manual</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3" className='p-4'> < MdOutlineSportsMotorsports className='icon' /> motoring & accessories</NavDropdown.Item>
                          <div className="mb-2">
                              {[ 'end'].map((direction) => (
                                  <DropdownButton
                                      as={ButtonGroup}
                                      key={direction}
                                      id={`dropdown-button-drop-${direction}`}
                                      drop={direction}
                                      variant="light"
                                      title={` services & support  ${direction} `}
                                      className='position-static p-4'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>find recalls</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>customer support </Dropdown.Item>
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>mini dealers services </Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>mini certified collision repair centers </Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>warranties </Dropdown.Item>
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
                                      variant="light"
                                      title={` ownder community ${direction} `}
                                      className='position-static p-5'
                                  >
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>min driving experience</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>find owner clubs</Dropdown.Item>
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>mobile apps</Dropdown.Item>
                                      <Dropdown.Item eventKey="2" className='h-100 p-2'>owner stories</Dropdown.Item>
                                      <Dropdown.Item eventKey="1" className='h-100 p-2'>mini takes the states</Dropdown.Item>
                                  </DropdownButton>
                              ))}
                          </div>
                      </NavDropdown>
              </Nav>
                  <Nav className="float-right ">
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
