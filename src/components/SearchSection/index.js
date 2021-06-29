import SearchInput from './SearchInput';
import SearchButtons from './SearchButtons';
import SearchSuggestion from './SearchBox';

export default class SearchSection {
  constructor({ $target, onSearch }) {
    this.$target = $target;
    this.onSearch = onSearch;

    this.userInput = '';
    this.keywords = JSON.parse(sessionStorage.getItem('keywords'));

    this.$searchSection = document.createElement('section');
    this.$searchSection.className = 'search-section';

    this.render();
  }

  setUserInput(value) {
    console.log(this.userInput);
    this.userInput = value;
  }

  render() {
    this.$searchInputWrapper = document.createElement('div');
    this.$searchInputWrapper.className = 'search-input-wrapper';
    this.inputComponents = [
      new SearchInput({
        $target: this.$searchInputWrapper,
        onSearch: this.onSearch,
        setUserInput: this.setUserInput,
      }),
      new SearchButtons({
        $target: this.$searchInputWrapper,
        userInput: this.userInput,
        onSearch: this.onSearch,
        onRandom: this.onRandom,
      }),
    ];
    this.$searchSection.appendChild(this.$searchInputWrapper);

    this.$SearchSuggestion = new SearchSuggestion({
      $target: this.$searchSection,
      onSearch: this.onSearch,
    });

    this.$target.append(this.$searchSection);
  }
}
