import { makeObservable, observable } from 'mobx';

class ApiCaller {
  loading = true;

  chartStore = {};

  constructor() {
    makeObservable(this, {
      loading: observable,
      chartStore: observable,
    });
  }
}

const API = new ApiCaller();

export { API };
