import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="aside__inner">
        <div className="aside__text">
          <div className="aside__header">You may like</div>
          <div className="aside__show-all">See more</div>
        </div>
        <div className="aside__artist">
          <div className="artist__inner">
            <ul className="artist__items">
              <li className="artist__item">
                <img src="" alt="" className="artist__img" />
                <div className="artist__track-name">name track</div>
                <div className="artist__name">name of artist</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="aside__music">
          <div className="aside__music__inner">
            <ul className="aside__music__items">
              <li className="aside__music__item">
                <div className="aside__music__number">1</div>
                <div className="aside__music__info">
                  <div className="aside__music__name">name of music</div>
                  <div className="aside__music__name-artist">name of artist</div>
                </div>
                <div className="aside__music__play">
                  <button
                    className="aside__music__play-btn"
                    aria-label="button to play music"
                    type="button"
                  >
                    1
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
