import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import MyButton from '../MyButton/MyButton';

function MyForm() {
  return (
    <Row className="g-3 pt-5">
      <Col  className='col-12 col-lg-4 col-md-6 col-sm-12'>
          <Form.Control className='input border border-secondary-subtle rounded-0'
            type="text"
            id="inputName"
            aria-describedby="passwordHelpBlock"
            placeholder='Your Name'
          />
      </Col>
      <Col className='col-12 col-lg-4 col-md-6 col-sm-12'>
        <Form.Control className='border border-secondary-subtle rounded-0'
          type="email"
          id="inputEmail"
          aria-describedby="passwordHelpBlock"
          placeholder='Your Email'
        />
      </Col>
      <Col  className='col-12 col-lg-4 col-md-6 col-sm-12'>
        <Form.Control className='border border-secondary-subtle rounded-0'
          type="tel"
          id="inputPhone"
          aria-describedby="passwordHelpBlock"
          placeholder='Your Phone'
        />
      </Col>
      <Col className='col-12 col-lg-4 col-md-6 col-sm-12'>
        <Form.Control className='border border-secondary-subtle rounded-0'
          type="date"
          id="inputDate"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Col  className='col-12 col-lg-4 col-md-6 col-sm-12'>
        <Form.Select aria-label="Default select example" className='border border-secondary-subtle rounded-0'>
          <option>Select Department</option>
          <option value="1">Department1</option>
          <option value="2">Department2</option>
          <option value="3">Department3</option>
        </Form.Select>
      </Col>
      <Col  className='col-12 col-lg-4 col-md-6 col-sm-12'>
        <Form.Select aria-label="Default select example" className='border border-secondary-subtle rounded-0'>
          <option>Select Doctor</option>
          <option value="1">Doctor1</option>
          <option value="2">Doctor2</option>
          <option value="3">Doctor3</option>
        </Form.Select>
      </Col>
      <Col className='col-12'>
        <Form.Control as="textarea" rows={5} placeholder='Message (Optional)' 
                className='border border-secondary-subtle rounded-0' />
      </Col>
      <Col className='text-center mt-3'>
        <MyButton text={"Make an Appointment"} border={false}/>
      </Col>
      
    </Row>
  );
}

export default MyForm;