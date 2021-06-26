import Loader from '@components/Loader';
import Slider from '@components/Slider';
import SearchBar from '@components/SearchBar';

export default class App {
  constructor({ $target }) {
    this.$target = $target;

    this.slider = new Slider({ $target });
    this.loader = new Loader({
      $target,
    });

    this.sleep = (ms) => new Promise((r) => setTimeout(r, ms)); // 로더 테스트용
    this.searchSection = new SearchBar({
      $target,
      onSearch: async (keyword, isRandom) => {
        this.loader.toggleLoader();
        console.log(keyword, isRandom);
        await this.sleep(3000); // TODO : 3초 뒤 로더 사라짐 -> api 호출
        this.loader.toggleLoader();
      },
    });
    // this.resultSection = new ResultSection($target, initialData);
  }
}
