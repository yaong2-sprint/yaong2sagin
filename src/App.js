import Loader from '@components/Loader';
import Slider from '@components/Slider';
import SearchBar from '@components/SearchBar';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.loader = new Loader({
      $target,
    });
    this.slider = new Slider({ $target });
    this.searchSection = new SearchBar({ $target });
    // this.resultSection = new ResultSection($target, initialData);
  }
}
