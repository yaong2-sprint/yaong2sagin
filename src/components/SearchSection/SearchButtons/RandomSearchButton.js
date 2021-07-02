export default class RandomSearchButton {
  constructor({ $target, onRandom }) {
    this.$randomSearchButton = document.createElement('button');
    this.$randomSearchButton.className = 'random-search-button';
    this.$randomSearchButton.textContent = '😼';
    this.$randomSearchButton.addEventListener('click', onRandom);

    $target.appendChild(this.$randomSearchButton);
  }
}
