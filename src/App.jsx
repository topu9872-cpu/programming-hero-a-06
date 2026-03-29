
import './App.css'
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
 import Ratting from './Components/Ratting';
 import Cards from '../src/Components/CardsSection/Cards';
import FakeCards from './Components/CardsSection/FakeCards';
 import FakeCardBuying from './Components/CardsSection/FakeCardBuying'
 import Footer from './Components/CardsSection/Footer'



function App() {
  

  return(
<>
<Navbar/>
<Banner/>
<Ratting/>
<Cards/>
<FakeCards/>
<FakeCardBuying/>
<Footer/>
    </>
  )
}

export default App
