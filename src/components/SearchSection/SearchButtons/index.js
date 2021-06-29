import RandomSearchButton from './RandomSearchButton';
import SearchButton from './SearchButton';

export default class SearchButtons {
  constructor({ $target, userInput, onSearch, onRandom }) {
    this.$target = $target;
    this.userInput = userInput;
    this.onSearch = onSearch;
    this.onRandom = onRandom;

    this.render();
  }

  render() {
    this.$buttonsWrapper = document.createElement('div');
    this.$buttonsWrapper.className = 'button-group';

    this.$searchButton = new SearchButton({
      $target: this.$buttonsWrapper,
      userInput: this.userInput,
      onSearch: this.onSearch,
    });
    this.$randomSearchButton = new RandomSearchButton({
      $target: this.$buttonsWrapper,
      onRandom: this.onRandom,
    });
    this.$target.appendChild(this.$buttonsWrapper);
  }
}
