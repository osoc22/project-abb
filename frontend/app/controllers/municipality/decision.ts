import Controller from '@ember/controller';
// import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MunicipalityDecision extends Controller {
  @tracked data = {
    columns: [
      ['Voor', 71.4],
      ['Niet gestemd', 20],
      ['Tegen', 8.6],
    ],
    type: 'donut',
  };

  color = {
    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
  };

  size = {
    height: 180,
  };

  // chart title
  title = { text: 'Stemming' };
  padding = { top: 20 };
}
