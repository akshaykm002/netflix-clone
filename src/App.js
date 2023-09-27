import './App.css';
import requests from './requests';
import Rows from './components/Rows'
import Banner from './components/Banner';
import Nav from './components/Nav';



function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows title="Trending in India" fetchUrl={requests. fetchTrending}/>
      <Rows title="Top Rated movies" fetchUrl={requests. fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>  
      <Rows title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>  
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    
      
    </div>
  );
}

export default App;