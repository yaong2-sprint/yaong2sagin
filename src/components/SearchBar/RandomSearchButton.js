export default class RandomSearchButton {
  constructor({ $target, onSearch }) {
    this.$randomSearchButton = document.createElement('button');
    this.$randomSearchButton.className = 'random-search-button';
    this.$randomSearchButton.innerText = '🐱';
    this.$randomSearchButton.addEventListener('click', onSearch);

    $target.appendChild(this.$randomSearchButton);
  }
}
