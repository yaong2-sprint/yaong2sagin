export default class Loader {
  constructor({ $target }) {
    this.$loaderWrapper = document.createElement('div');
    this.$loaderWrapper.className = 'box ';
    this.$loaderWrapper.style.display = 'none';
    $target.appendChild(this.$loaderWrapper);

    this.render();
  }

  toggleLoader() {
    this.$loaderWrapper.style.display =
      this.$loaderWrapper.style.display === 'none' ? '' : 'none';
  }

  render() {
    this.$loader = document.createElement('div');
    this.$loader.className = 'cat';
    this.$loaderWrapper.appendChild(this.$loader);

    ['cat__body', 'cat__body', 'cat__tail', 'cat__head'].forEach(
      (className) => {
        const $Node = document.createElement('div');
        $Node.className = className;
        this.$loader.appendChild($Node);
      },
    );
  }
}
