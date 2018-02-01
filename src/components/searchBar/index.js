import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import '../utils/fadeInFromNone.css';

class SearchBar extends Component {

  onChangeHandler = ({ target }) => {
    const { changeSearchTextHandler } = this.props;
    changeSearchTextHandler(target.value);
  };

  onSubmitHandler = searchHandler => e => {
    e.preventDefault();
    searchHandler();
  };

  render() {
    const { searchValue, performSearch } = this.props;
    return (
      <div className="search-bar__container fadeIn">
        <form onSubmit={this.onSubmitHandler(performSearch)}>
          <input
            placeholder="This is where the magic begins.."
            onChange={this.onChangeHandler}
            className="search-bar__input-field"
            type="text"
            value={searchValue}
          />
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  changeSearchTextHandler: PropTypes.func.isRequired,
  performSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default SearchBar;
