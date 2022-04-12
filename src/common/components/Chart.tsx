import React from 'react';
import { observer } from 'mobx-react';
/* import { storeMobx } from 'entities/tracks/apiCall'; */
import { ChartItems } from 'common/components/ChartItems';

export const Chart = observer(() => {
  return (
    <div className="chart">
      <div className="chart__inner">
        <div className="chart__select">
          <select name="select-option-chart" className="chart__select-menu">
            <option value="tracks" aria-label="1">
              tracks
            </option>
            <option value="albums" aria-label="1">
              albums
            </option>
            <option value="artists" aria-label="1">
              artists
            </option>
            <option value="playlists" aria-label="1">
              playlists
            </option>
            <option value="podcasts" aria-label="1">
              podcasts
            </option>
          </select>
        </div>
        <div className="chart__items">
          <div className="chart__items__inner">
            <ChartItems />
          </div>
        </div>
      </div>
    </div>
  );
});
