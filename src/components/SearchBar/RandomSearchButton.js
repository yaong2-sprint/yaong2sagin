export default class RandomSearchButton {
  constructor($target) {
    this.randomSearchButton = document.createElement('button');
    this.randomSearchButton.className = 'random-search-button';
    this.randomSearchButton.innerText = '🐱';
    $target.appendChild(this.randomSearchButton);
  }
}
