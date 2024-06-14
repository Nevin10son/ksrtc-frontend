import React from 'react'

const SearchBus = () => {
  return (
    <div>
        <h1>Search Bus</h1>
        <br />
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Search bus by name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                <br />
            </div>
        </div>
      </div>
      <br /><br />
        <div className="footer">
                
            </div>
    </div>
  )
}

export default SearchBus

