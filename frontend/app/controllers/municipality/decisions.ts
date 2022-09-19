import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Municipality } from 'index';

export default class MunicipalityDecisions extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked id = 1;

  @action findMunicipalities() {
    return this.municipalities.municipalityData.find(
      (municipality: any) =>
        municipality.title.toUpperCase() ===
        this.municipalities.modalData?.title?.toUpperCase()
    );
  }

  @tracked municipality: Municipality | undefined = this.findMunicipalities();
}
