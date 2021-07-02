import SuggestionKeyword from './Keyword';

export default class SearchBox {
  constructor({ $target, keyword = '', onSearch }) {
    this.$target = $target;
    this.keyword = keyword;
    this.keywords = [];
    this.onSearch = onSearch;

    this.$SearchSuggestion = document.createElement('div');
    this.$SearchSuggestion.className = 'search-suggestion';

    this.render();
  }

  async getKeywords() {
    /**
     * TODO
     * api 호출 : keyword 관련 고양이 종류 정보 가져오기
     */
    console.log(this.keyword);
  }

  async getRecentKeywords() {
    /**
     * TODO
     * 로컬스토리지 최근 검색 데이터 가져오기
     */
    console.log(this.keyword);
  }

  render() {
    if (this.keyword.length) {
      /**
       * 키워드를 입력했을 경우
       */
      this.keywords = this.getKeywords();
    } else {
      /**
       * 키워드를 입력하지 않고 검색창이 focus될 경우
       * 스토리지에 있는 최근 검색어를 가져온다
       */
      this.keywords = this.getRecentKeywords();
      if (this.keywords.length === 0) {
        this.$SearchSuggestion.textContent = '최근 검색한 고양이가 없습니다🐾';
      }
    }
    this.keywords.length &&
      this.keywords.map(
        (keyword) =>
          new SuggestionKeyword({
            $target: this.$target,
            onSearch: this.onSearch,
            keyword,
          }),
      );
  }
}
