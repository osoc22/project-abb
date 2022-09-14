import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MunicipalityDecisionsSubscribe extends Controller {
  @tracked openModal = true;
  @service router: any;
  @action closeModal() {
    // this.openModal = false;
    this.router.transitionTo('municipality.decisions');
  }
}
