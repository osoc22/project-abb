import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import axios from 'axios';
import { Municipality } from 'index';
import { municipality_data } from '../data/municipality-data';

export default class BesluitenForm extends Controller {
  @tracked name: string = 'Titel';
  @tracked body: string = 'Lorem ipsum.';
  @tracked accepted: boolean = true;
  @tracked query: any = 'Antwerpen';
  @tracked municipalityData = municipality_data;

  @action toggleAccepted() {
    this.accepted = !this.accepted;
  }

  @action searchRepo(term: string) {
    if (term === '') {
      return this.municipalityData;
    }
    return this.municipalityData.filter((municipality: Municipality) =>
      municipality.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  @action submitDecision() {
    axios.post(
      `http://localhost:3000/municipality/${this.query.title.toLowerCase()}/besluiten`,
      {
        name: this.name,
        body: this.body,
        accepted: this.accepted,
      }
    );
  }
}
