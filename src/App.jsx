
import './App.css'
import Navbar from './Components/Navber';
import Banner from './Components/Banner';
 import Ratting from './Components/Ratting';
 import Cards from '../src/Components/CardsSection/Cards';
import FakeCards from './Components/CardsSection/FakeCards';
 import FakeCardBuying from './Components/CardsSection/FakeCardBuying'
 import Footer from './Components/CardsSection/Footer'
import CardsApiCalling from '../src/Components/CardsSection/CardsApiCalling'
import { Suspense } from 'react';



function App() {

 const fetchData = async () => {
  const res = await fetch('../public/Api.json');
 return await res.json();

  
 }
  
const promise = fetchData()
  
 
 
 
  

  return(
<>
<Navbar/>
<Banner/>
<Ratting/>

<Suspense fallback={<p>Loading...............</p>}>
<Cards promise={promise} />
</Suspense>
 


<FakeCards/>
<FakeCardBuying/>
<Footer/>
    </>
  )
}

export default App
