import './home.css';
import { Header, Features, Motivation, Team, Footer } from '../../containers';

function Home() {
  return (
    <div className="Home">
      <div className='gradient__bg'>
        <Header />
      </div>
      <Features />
      <Motivation />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
