import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import MyButton from '../MyButton/MyButton';
import './PricingCard.css'

function PricingCard({data}) {
  return (
    <>
    <div className="row gy-4">
    {data.map((item,index) => {
      return (  
        <div key={index} 
        className={`col-xl-3 col-md-6`}>
        <Card className=" text-center text-color overflow-hidden border-0 icon-shadow ">
        <Card.Header className={`p-3 bg-my-secondary border-0 ${index === 1 ? 'bg-my-primary text-light': ''}`}>{item.head}</Card.Header>
        <Card.Body>
          <Card.Title >
            <sup>{item.sup}</sup>
            <h2 className='d-inline'>{item.num}</h2> 
            <span>/ {item.span}</span>
          </Card.Title>
          <ListGroup variant="flush">
              <ListGroup.Item>Aida dere</ListGroup.Item>
              <ListGroup.Item>Nec feugiat nisl</ListGroup.Item>
              <ListGroup.Item>Nulla at volutpat dola</ListGroup.Item>
              <ListGroup.Item className={`${index === 0 ? 'text-decoration-line-through opacity-50' : ''}`}>Pharetra massa</ListGroup.Item>
              <ListGroup.Item className={`${index === 0 | index === 1 ? 'text-decoration-line-through opacity-50' : ''}`}>Massa ultricies mi</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        <Card.Footer className="p-3 text-muted bg-my-secondary  border-0">
          <MyButton border={false} text={"Buy Now"}/>
        </Card.Footer>
        {index === 3 && <span className="advanced-label p-1 bg-my-primary text-light position-absolute">Advanced</span>}
      </Card>
    </div>
    )})}
    </div>
   </>
    
  );
}

export default PricingCard;
