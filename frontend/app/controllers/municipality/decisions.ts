import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import MunicipalitiesService from 'frontend/services/municipalities';
import { Decision } from 'index';

export default class MunicipalityDecisions extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked decisionData: Array<Decision> = [];

  @tracked findMunicipalities = () => {
    axios
      .get(
        `http://localhost:3000/municipality/${this.municipalities?.modalData?.title.toLowerCase()}/besluiten`
      )
      .then((resp) => {
        this.decisionData = resp.data.docs;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
