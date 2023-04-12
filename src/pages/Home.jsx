import '../css/Home.css'
import { Link } from 'react-router-dom';
import bookCircle from '../images/mobilegraph.jpeg'
function Home() {
  return (
    <>
      
      <div className="d-flex justify-content-center">
        <img src={bookCircle} class="w-100" alt="" />
      </div>

    </>
  );
}

export default Home;
