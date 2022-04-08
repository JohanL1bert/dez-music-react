import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { API } from 'entities/tracks/deezMusic';

export const Chart = observer(() => {
  const chartLoader = () => {
    console.log('1');
    console.log(API);
  };

  useEffect(() => {
    chartLoader();
  }, []);

  return (
    <div className="chart">
      <div className="chart__inner">
        <div className="chart__select">1</div>
        <div className="chart__items" onLoad={chartLoader} />
      </div>
    </div>
  );
});
