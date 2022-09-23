import http from "../http-common";

class ArticleService {
  getTopHeadlinesByCountry(countryId: string) {
    return http.get(`/top-headlines?country=${countryId}`);
  }
}

export default new ArticleService();
