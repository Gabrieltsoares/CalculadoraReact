

import { useState } from "react";
import { Button } from "./components/Button";
import Input from "./components/Input";
import { Container,Content,Row,} from "./styles";



function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [ operation, setOperation] = useState ('');

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (number) => {

    setCurrentNumber (prev => `${number}${prev === '0' ? ' ':prev}`);
  }

  const handleSumNumbers = () =>{
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('+')
    }
  }
  const handleMinusNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplyNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('X')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNumber = () =>{
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
 
    const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' & currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumber();
            break;
          case 'X':
            handleMultiplyNumber();
            break;
          case '/':
            handleDivideNumber();
            break;
          default:
            break;
        }
      }
    }





  return (
    
    <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="X" onClick={handleMultiplyNumber}></Button>
            <Button label="/" onClick={handleDivideNumber}></Button>
            <Button label="%" onClick={() => handleAddNumber('')}> </Button>
            <Button label="C" onClick={handleOnClear}></Button>
            </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}></Button>
            <Button label="8" onClick={() => handleAddNumber('8')}></Button>
            <Button label="9" onClick={() => handleAddNumber('9')}> </Button>
            <Button label="-" onClick={handleMinusNumber}></Button>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}></Button>
            <Button label="5" onClick={() => handleAddNumber('5')}></Button>
            <Button label="6" onClick={() => handleAddNumber('6')}></Button>
            <Button label="+" onClick={handleSumNumbers}></Button>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}></Button>
            <Button label="2" onClick={() => handleAddNumber('2')}></Button>
            <Button label="3" onClick={() => handleAddNumber('3')}></Button>
            <Button label="=" onClick={handleEquals}></Button>
          </Row>
        </Content>
    </Container>
  );
}

export default App
