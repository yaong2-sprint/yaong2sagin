import SearchInput from './SearchInput';
import RandomSearchButton from './RandomSearchButton';
import SearchHistory from './SearchHistory';

export default class Search {
  constructor($target) {
    this.target = $target;

    this.searchSection = document.createElement('section');
    this.searchSection.className = 'search-section';

    this.children = [
      new SearchInput(this.searchSection),
      new RandomSearchButton(this.searchSection),
      new SearchHistory(this.searchSection),
    ];
    this.render();
  }

  render() {
    this.target.appendChild(this.searchSection);
  }
}
