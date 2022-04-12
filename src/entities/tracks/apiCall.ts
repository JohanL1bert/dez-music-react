import { action, makeObservable, observable } from 'mobx';

class ApiCaller {
  loading: boolean = true;

  chartStore = [];

  constructor() {
    makeObservable(this, {
      loading: observable,
      chartStore: observable,
      getChartTrack: action,
    });
  }

  getChartTrack = async (queryParam: string) => {
    this.loading = true;
    try {
      const respChartTrack: Response = await fetch(`https://api.deezer.com/chart/0/${queryParam}`, {
        method: 'GET',
        mode: 'no-cors',
      });
      console.log(respChartTrack);
    } catch (error) {
      console.warn(error);
    } finally {
      this.loading = false;
    }
  };
}

const storeMobx = new ApiCaller();

export { storeMobx };
