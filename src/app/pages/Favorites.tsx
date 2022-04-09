import React from 'react';

export const Favorites = () => {
  return (
    <section className="favorites">
      <div className="favorites__inner">
        <div className="favorites__header">
          <div className="favorites__header-text">Favourites</div>
          <span className="favorites__header-icon">1</span>
          <span className="favorites__header-icon__info">Favorites tracks</span>
        </div>
        <div className="favorites-items">
          <div className="search-items__inner">
            <div className="serach__field">
              <div className="search__field__text">Songs</div>
              <input type="text" className="search__field__input" />
              <div className="search__field__filter">
                Filter
                <span className="search__field__filter-btn" />
              </div>
            </div>
            <div className="search-items">
              <div className="search-items__inner">
                <div className="search__item">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
