export default class SearchHistory {
  constructor($target, history) {
    this.searchHistory = document.createElement('div');
    this.searchHistory.className = 'search-history';
    this.history = history;
    if (history) {
      this.history.forEach((word) => {
        const keyword = document.createElement('div');
        keyword.className = 'keyword';
        keyword.innerText = word;

        const removeKeywordButton = document.createElement('span');
        removeKeywordButton.innerText = 'X';
        removeKeywordButton.className = 'remove-keyword';
        keyword.appendChild(removeKeywordButton);

        keyword.addEventListener('click', (event) => {
          if (event.target.className === 'keyword') this.onSearch(word, true);
          else if (event.target.className === 'remove-keyword')
            this.removeKeyword(word);
        });

        history.appendChild(keyword);
      });
    }

    $target.appendChild(this.searchHistory);
  }
}
