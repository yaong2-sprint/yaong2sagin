export default class SearchInput {
  constructor($target) {
    this.searchInput = document.createElement('input');
    this.searchInput.className = 'search-input';
    this.searchInput.placeholder = '고양이를 찾아봅시다';
    this.searchInput.autofocus = true;

    $target.appendChild(this.searchInput);
  }
}
