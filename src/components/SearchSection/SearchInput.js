export default class SearchInput {
  constructor({ $target, onSearch, setUserInput }) {
    this.setUserInput = setUserInput;

    this.$searchInput = document.createElement('input');
    this.$searchInput.className = 'search-input';
    this.$searchInput.placeholder = '고양이를 찾아봅시다';
    this.$searchInput.autofocus = true;

    // this.$searchInput.addEventListener('change', (e) => {
    //   this.setUserInput(e.target.value);
    // });

    this.$searchInput.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') onSearch({ keyword: e.target.value });
    });

    $target.appendChild(this.$searchInput);
  }
}
