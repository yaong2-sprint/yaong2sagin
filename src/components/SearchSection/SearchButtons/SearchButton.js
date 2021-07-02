export default class SearchButton {
  constructor({ $target, userInput, onSearch }) {
    this.$searchButton = document.createElement('button');
    this.$searchButton.className = 'search-button';
    this.$searchButton.textContent = '🔍';
    // this.$searchButton.addEventListener(
    //   'click',
    //   onSearch({ keyword: userInput }),
    // );

    $target.appendChild(this.$searchButton);
  }
}
