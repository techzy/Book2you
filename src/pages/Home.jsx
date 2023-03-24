import '../css/Home.css'
function Home() {
  return (
    <div >
      
      <div className="d-flex justify-content-end flex-column " style={{height:'90vh'}}>
        <div className="flex-fill card br-0 border-dark m-3 my-4">
          <div className="card-body">
            <a href="/sell">
              <h4 className="card-title">Sell old books</h4></a>
              <p>
                <strong>Have donzens of old books just stting around?</strong>
                <br />
                <br />
                Sell your books today and make some quick cash
              </p>
          </div>
        </div>
        <div className="flex-fill card br-0 border-dark m-3 ">
          <div className="card-body">
            <a href="/buy">
              <h4 className="card-title">Buy books</h4>
            </a>


              <p>
                <strong>Can't afford a brand new book?</strong>
                <br />
                <br />
                Buy your book today for cheap price
              </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
