import './App.css'
import Card from './component/Card'
function App() {
 
  return (
    <>
    <div className='grid grid-cols-4 gap-4'>

      <Card name="Mayank" profession="Full Satck Developer" like="1.1M" Comment="1.2k" Share="2.5k"/>
      <Card name="Harsh" profession="Fronted Developer" like="2.1M" Comment="2k" Share="5.5k"/>
      <Card name="Parth" profession="UI & UX desinger" like="1.1k" Comment="1k" Share="1.5k"/>
      <Card name="Vivek" profession="Softwere Eng" like="5.1M" Comment="1.7k" Share="5.5k"/>
      <Card name="Keyure" profession="Canva Desinger" like="8.1M" Comment="8.2k" Share="2.8k"/>
      <Card name="Jaydip" profession="Sopifay " like="2.5k" Comment="5.7k" Share="5.5k"/>
      <Card name="Rakesh" profession="Tester" like="1.1M" Comment="1.2k" Share="1.5k"/>
      <Card name="Darshan" profession="App Developer" like="2.3M" Comment="1.2k" Share="2.5k"/>

    </div>

     
    </>
  )
}

export default App
