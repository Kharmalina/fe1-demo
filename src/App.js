import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordian from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

export function App() {

  // mb-4 is a size 4 margin on the bottom
  // px-2 is a size 2 padding on right and left

  return (
    <Container>
      <h1>Hello, world!</h1>

      <Stack className='mb-4 gap-3'>
        <div className='border p-4 bg-dark text-white mx-auto'>item 1</div>
        <div className='border p-4 bg-success col-md-5'>item 2</div>
        <div className='border p-4 bg-light col-md-10'>item 3</div>
      </Stack>

      <Stack className='mb-4 gap-3' direction='horizontal'>
        <div className='border p-4 bg-dark text-white mx-auto'>item 1</div>
        <div className='border p-4 bg-success col-md-5'>item 2</div>
        <div className='border p-4 bg-light col-md-2'>item 3</div>
      </Stack>

      <Alert>This is an alert wee ohhh</Alert>

      <Container>
        <Row>
          <Col className='border bg-danger p-5'>1 of 2</Col>
          <Col className='border bg-warning p-5'>2 of 2</Col>
        </Row>
        <Row>
          <Col className='border bg-danger p-5'>1 of 3</Col>
          <Col className='border bg-warning p-5'>2 of 3</Col>
          <Col className='border bg-warning p-5'>3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <Row className='mb-4'>
          <Col className='border bg-info py-5'>1 of 5</Col>
          <Col className='border bg-primary px-2'>2 of 5</Col>
          <Col className='border bg-primary px-2'>3 of 5</Col>
          <Col className='border bg-primary px-2'>4 of 5</Col>
          <Col className='border bg-primary px-2'>5 of 5</Col>
        </Row>
      </Container>

      {/* toggle mean it switches from on or off  */}
      <Container>
        <Dropdown>
          <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>item 1</Dropdown.Item>
            <Dropdown.Item>item 2</Dropdown.Item>
            <Dropdown.Item>item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>

      <Accordian>
        <Accordian.Item eventKey='0'>
          <Accordian.Header>First Thing</Accordian.Header>
          <Accordian.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordian.Body>
        </Accordian.Item>
        <Accordian.Item eventKey='1'>
          <Accordian.Header>First Thing</Accordian.Header>
          <Accordian.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordian.Body>
        </Accordian.Item>
      </Accordian>


      <Carousel fade className='my-4'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Container>
  )
}