
import './App.css'
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
 import Ratting from './Components/Ratting';
 import Cards from '../src/Components/CardsSection/Cards';
import FakeCards from './Components/CardsSection/FakeCards';
 import FakeCardBuying from './Components/CardsSection/FakeCardBuying'
 import Footer from './Components/CardsSection/Footer'
import CardsApiCalling from '../src/Components/CardsSection/CardsApiCalling'


function App() {

 const fetchData = async () => {
  const res = await fetch('../public/Api.json');
  return res

  
 }
  
const promise = fetchData()
  
 
 
 
  

  return(
<>
<Navbar/>
<Banner/>
<Ratting/>
<CardsApiCalling promise={promise}/>
<Cards/>
<FakeCards/>
<FakeCardBuying/>
<Footer/>
    </>
  )
}

export default App
