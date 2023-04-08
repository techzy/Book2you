import '../css/Home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div >
      
      <div className="d-flex justify-content-end flex-column flex-md-row" style={{height:'90vh'}}>
        
        <div className="flex-fill card br-0 border-dark mx-3 my-4">
          <div className="card-body">
            <Link to='/buy'>
              <h4 className="card-title">Buy books</h4>
            </Link>


              <p>
                <strong>Can't afford a brand new book?</strong>
                <br />
                <br />
                Buy your book today for cheap price
              </p>
          </div>
        </div>
        <div className="flex-fill d-flex justify-content-center card br-0 border-dark mx-3 my-4">
          <div className="card-body">
            <Link to="/sell">
              <h4 className="card-title">Sell old books</h4></Link>
              <p>
                <strong>Have dozens of old books just sitting around?</strong>
                <br />
                <br />
                Sell your books today and make some quick cash
              </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
