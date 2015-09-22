import React from 'react';

const App = React.createClass({
  handleSubmit (e) {
    e.preventDefault();
    console.log('entered search for: ', this.refs.searchInput.getDOMNode().value);
  },

  render () {
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
          search results
        </section>
      </main>
    );
  }
});

export default App;
