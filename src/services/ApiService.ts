import $api from 'services/http.service';

export default class ApiService {
  static async getAlbum() {
    return $api.get<any>(`/album`);
  }

  static async getArtist() {
    return $api.get<any>(`/artist`);
  }

  static async getChart() {
    return $api.get<any>(`/chart`);
  }

  static async getEditorial() {
    return $api.get<any>(`/editorial`);
  }

  static async getGenre() {
    return $api.get<any>(`/genre`);
  }

  static async getInfos() {
    return $api.get<any>(`/infos`);
  }

  static async getOptions() {
    return $api.get<any>(`/options`);
  }

  static async getPlaylist() {
    return $api.get<any>(`/playlist`);
  }

  static async getRadio() {
    return $api.get<any>(`/radio`);
  }

  static async getSearch(searchValue: string) {
    return $api.get<any>(`/search?q=${searchValue}`);
  }

  static async getTrack() {
    return $api.get<any>(`/track`);
  }

  static async getUser() {
    return $api.get<any>(`/user/me`);
  }
}
