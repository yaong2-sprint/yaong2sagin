import Slider from '@components/Slider';
import SearchBar from '@components/SearchBar';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.$Slider = new Slider($target);
    this.$searchSection = new SearchBar($target);
    // this.resultSection = new ResultSection($target, initialData);
  }
}
