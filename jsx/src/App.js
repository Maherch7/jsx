import './App.css';

import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  var name = ""
  return (
<div>

  
{/* <h1>{Product.Name}</h1>
      <h2>{Product.Price}</h2>
      <h3>{Product.Description}</h3>
  <img src={Product.URL} alt='Not Found'/> */}
  
{/*creating a card */}

        <Card style={{ width: '22rem',textAlign:'center',display:'flex',border:'solid',borderRadius:'20px',padding:'15px'}}>
      <Image/>
      <Card.Body>
        <Card.Title style={{fontFamily:'fantasy'}}> <Name/></Card.Title>
        <br/>
        <Card.Text>
        <Price/>
        <br/>
        <Description/>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>

<br/>
<br/>
   {/*displaying a message */} 
    <h1>{name === "" ? "Hello, there!" : `Bonjour ${name}`}</h1>   
</div>
  );
}

export default App;
