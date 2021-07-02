import Loader from '@components/Loader';
import Slider from '@components/Slider';
import SearchSection from '@components/SearchSection';
// import ResultSection from '@components/ResultSection';

import api from '@api';

export default class App {
  constructor({ $target }) {
    this.$target = $target;

    this.slider = new Slider({ $target });
    this.loader = new Loader({
      $target,
    });

    this.sleep = (ms) => new Promise((r) => setTimeout(r, ms)); // 로더 테스트용
    this.searchSection = new SearchSection({
      $target,
      onSearch: async ({ keyword = '' }) => {
        console.log(keyword);
        if (keyword.length <= 0) {
          alert('1글자 이상 적어주셔야 검색가능합니다😲');
          return;
        }
        this.loader.toggleLoader();
        const response = await api.getBreeds(keyword);
        // const response = await api.getCats(keyword);
        console.log(response);
        // await this.sleep(3000); // TODO : 3초 뒤 로더 사라짐 -> api 호출
        // this.loader.toggleLoader();
      },
      onRandom: async ({ keyword = '' }) => {
        this.loader.toggleLoader();
        console.log(keyword);
        await this.sleep(3000); // TODO : 3초 뒤 로더 사라짐 -> api 호출
        this.loader.toggleLoader();
      },
    });

    // this.resultSection = new ResultSection({ $target, data: initialData });
  }
}
