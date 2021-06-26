export default class Slider {
  constructor({ $target }) {
    this.$target = $target;

    this.currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light';
    this.$wrapper = document.createElement('header');
    this.$wrapper.className = 'slider-wrapper';
    this.$target.appendChild(this.$wrapper);

    this.render();
  }

  setTheme(mode) {
    this.currentTheme = mode;
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    this.setExplainText();
  }

  setExplainText() {
    this.$explainText.innerText =
      this.currentTheme === 'dark' ? '라이트모드로 전환' : '다크모드로 전환';
  }

  render() {
    this.$label = document.createElement('label');
    this.$label.className = 'slider-label';
    this.$label.setAttribute('for', 'checkbox');

    this.$toggleSwitch = document.createElement('input');
    this.$toggleSwitch.className = 'slider-input';
    this.$toggleSwitch.id = 'checkbox';
    this.$toggleSwitch.type = 'checkbox';
    if (this.currentTheme === 'dark')
      this.$toggleSwitch.setAttribute('checked', true);
    this.$toggleSwitch.addEventListener(
      'change',
      (e) => {
        e.stopPropagation(); // 상위 DOM으로 이벤트 전파 방지
        this.setTheme(e.target.checked ? 'dark' : 'light');
      },
      false,
    );

    this.$slider = document.createElement('div');
    this.$slider.classList.add('slider', 'round');

    this.$explainText = document.createElement('em');

    this.setTheme(this.currentTheme);
    this.$label.append(this.$toggleSwitch, this.$slider);
    this.$wrapper.append(this.$label, this.$explainText);
  }
}
