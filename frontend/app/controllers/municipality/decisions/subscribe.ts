import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from 'frontend/services/municipalities';
import ToasterService from 'frontend/services/toaster';

export default class MunicipalityDecisionsSubscribe extends Controller {
  @tracked openModal = true;
  @service router: any;
  @action closeModal() {
    this.router.transitionTo('municipality.decisions');
  }

  @service declare municipalities: MunicipalitiesService;
  @service declare toaster: ToasterService;

  @action clickButton() {
    this.toaster.success(
      `U krijgt nu emails rond besluiten in ${this.model}!`,
      'Success'
    );
  }
}
