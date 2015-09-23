import React from 'react';

const App = React.createClass({
  getInitialState: function () {
    return {
      results: []
    };
  },

  handleSubmit (e) {
    e.preventDefault();

    let query = this.refs.searchInput.getDOMNode().value;
    this.executeSearch(query);
  },

  executeSearch (query) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', (e)=>{
      this.handleSearchResponse(e.target.response);
    });
    req.open('GET', `https://api.foursquare.com/v2/venues/explore?client_id=3TQPQPXQALXW3BZNBFFURAWCT4T5UWP4DW5PWJEAE3YBMZZE&client_secret=VTXV5ASAD35D3AJC2YRKRVOOM2BOJC1TGQFZOVNN4IZ3H0CV&v=20150922&ll=40.74,-73.99&radius=3000&intent=browse&venuePhotos=1&section=food&limit=50&query=${query}`);
    req.send();
  },

  handleSearchResponse (res) {
    let response = JSON.parse(res);

    console.log(response);

    if ( response && response.response && response.response.groups && response.response.groups[0] && response.response.groups[0].items ) {
      this.setState({
        results: response.response.groups[0].items
      });
    }
  },

  render () {
    let { results } = this.state;
    console.log(results);

    return (
      <main>
        <header className='page-header'>
          <h1>Redux Ration</h1>
        </header>
        <section className='search-form'>
          <form onSubmit={this.handleSubmit}>
            <input ref='searchInput' type='search' placeholder='Enter type of food' autoFocus={true} />
            <input type='submit'  value='search' />
          </form>
        </section>
        <section className='search-results'>
          {()=>{
            return results.map((result)=>{
              return (
                <p key={result.venue.id}>{result.venue.name}</p>
              );
            });
          }()}
        </section>
      </main>
    );
  }
});

export default App;
