import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import MunicipalitiesService from 'frontend/services/municipalities';
import ToasterService from 'frontend/services/toaster';

export default class MunicipalitySubscribe extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @service declare toaster: ToasterService;

  @action clickButton() {
    this.toaster.success(
      `U krijgt nu emails rond besluiten in ${this.model}!`,
      'Success'
    );
  }
}
