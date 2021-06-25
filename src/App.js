import Search from './components/Search';

export default class App {
  constructor($target) {
    this.target = $target;
    this.searchSection = new Search($target);
    // this.resultSection = new ResultSection($target, initialData);
  }
}
