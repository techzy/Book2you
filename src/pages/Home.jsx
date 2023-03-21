import '../css/Home.css'
function Home() {
  return (
    <div >
      <header >
        <h1> Book 2 man</h1>
      </header>
      <div className="d-flex justify-content-end flex-column h-100">
        <div className="flex-fill card br-0 border-dark m-3 my-4">
          <div className="card-body">
            <a href="/sell">
              <h4 className="card-title">Sell old books</h4></a>
          </div>
        </div>
        <div className="flex-fill card br-0 border-dark m-3 ">
          <div className="card-body">
            <a href="/buy">
              <h4 className="card-title">Buy books</h4>

            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
