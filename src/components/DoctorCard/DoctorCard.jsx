import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DoctorCard({data}) {
  return (
    <Row xs={2} md={2} xl={4} className="pt-5 g-4">
      {data.map((item, idx) => (
        <Col key={idx} className='col-12'>
          <Card className='shadow'>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className='text-secondary'>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DoctorCard;