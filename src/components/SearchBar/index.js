import SearchInput from './SearchInput';
import RandomSearchButton from './RandomSearchButton';
import SearchHistory from './SearchHistory';

export default class SearchBar {
  constructor({ $target, onSearch }) {
    this.$target = $target;
    this.onSearch = onSearch;

    this.keywords = JSON.parse(sessionStorage.getItem('keywords'));

    this.$searchSection = document.createElement('section');
    this.$searchSection.className = 'search-section';

    this.render();
  }

  addKeyword(keyword) {
    this.keywords = [keyword, ...this.keywords];
  }

  removeKeyword(keyword) {
    this.keywords = [keyword, ...this.keywords];
  }

  render() {
    this.$searchInputWrapper = document.createElement('div');
    this.$searchInputWrapper.className = 'search-input-wrapper';
    this.inputComponents = [
      new SearchInput({ $target: this.$searchInputWrapper }),
      new RandomSearchButton({
        $target: this.$searchInputWrapper,
        onSearch: this.onSearch,
      }),
    ];
    this.$searchSection.appendChild(this.$searchInputWrapper);

    this.$searchHistory = new SearchHistory({ $target: this.$searchSection });

    this.$target.append(this.$searchSection);
  }
}
