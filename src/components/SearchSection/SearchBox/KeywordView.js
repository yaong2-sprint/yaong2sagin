export default class Keyword {
  constructor({ $target, data, onSearch }) {
    this.$target = $target;
    this.data = data;
    this.onSearch = onSearch;

    this.render();
  }

  render() {
    const { id, name } = this.data;

    const $SuggestionItem = document.createElement('div');
    $SuggestionItem.className = 'suggestion-item';
    $SuggestionItem.id = id;
    $SuggestionItem.textContent = name;

    const $RemoveItemButton = document.createElement('span');
    $RemoveItemButton.textContent = 'X';
    $RemoveItemButton.className = 'remove-item';
    $SuggestionItem.appendChild($RemoveItemButton);

    $SuggestionItem.addEventListener('click', (event) => {
      if (event.target.className === 'suggestion-item')
        this.onSearch({ keyword: this.breed });
      else if (event.target.className === 'remove-item') {
        /** TODO
         * localStorage에서 최근검색어 삭제
         * View에서 최근검색어 삭제
         */
        console.log(event.target);
      }
    });

    this.$target.appendChild($SuggestionItem);
  }
}
