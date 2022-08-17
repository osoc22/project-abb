import Route from '@ember/routing/route';
import MunicipalitiesService from 'frontend/services/municipalities';
import { inject as service } from '@ember/service';

export default class Subscribe extends Route {
  @service declare municipalities: MunicipalitiesService;
}
