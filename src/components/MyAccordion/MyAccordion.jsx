import Accordion from 'react-bootstrap/Accordion';
import './MyAccordion.css'

function MyAccordion({data}) {
  return (
    <>
    {data.map((item,index)=> {
      return (
        <Accordion key={index} className='col-12 mx-auto'>
        <Accordion.Item eventKey="0" >
          <Accordion.Header ><h6 className='text-color '>{item.header}</h6></Accordion.Header>
          <Accordion.Body className='pt-0 text-color'>
          {item.body}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      )
    })}
   </>
  );
}

export default MyAccordion;