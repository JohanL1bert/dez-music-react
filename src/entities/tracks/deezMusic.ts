import { makeObservable, observable, action } from 'mobx';

class ApiCaller {
  @observable loading = true;

  @observable chartStore = {};

  constructor() {
    makeObservable(this);
  }

  @action chartStoreTrack = {};
}

const API = new ApiCaller();

export { API };
