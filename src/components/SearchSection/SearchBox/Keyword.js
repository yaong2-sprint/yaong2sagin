import KeywordView from './KeywordView';

export default class Keyword {
  constructor({ $target, keyword, onSearch }) {
    this.$target = $target;
    this.keyword = keyword;
    this.onSearch = onSearch;

    this.keywordView = new KeywordView({ $target: this.$target });
  }

  /**
   * 이벤트 관련 함수 관리
   * keydown
   * click
   */
}
