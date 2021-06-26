import SearchInput from './SearchInput';
import RandomSearchButton from './RandomSearchButton';
import SearchHistory from './SearchHistory';

export default class Search {
  constructor($target) {
    this.$target = $target;

    this.$searchSection = document.createElement('section');
    this.$searchSection.className = 'search-section';

    this.render();
  }

  render() {
    this.$searchInputWrapper = document.createElement('div');
    this.$searchInputWrapper.className = 'search-input-wrapper';
    this.inputComponents = [
      new SearchInput(this.$searchInputWrapper),
      new RandomSearchButton(this.$searchInputWrapper),
    ];
    this.$searchSection.appendChild(this.$searchInputWrapper);

    this.$searchHistory = new SearchHistory(this.$searchSection);

    this.$target.append(this.$searchSection);
  }
}
