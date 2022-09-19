import Controller from '@ember/controller';
import { service } from '@ember/service';
// import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from 'frontend/services/municipalities';

export default class MunicipalityDecision extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked data = {
    columns: [
      ['Voor', 71.4],
      ['Niet gestemd', 20],
      ['Tegen', 8.6],
    ],
    type: 'donut',
  };

  color = {
    pattern: ['#60B044', '#F6C600', '#FF0000'],
  };

  // chart title
  title = { text: 'Stemming' };
}
