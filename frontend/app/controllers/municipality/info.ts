import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {
  decisionAmountPerYear,
  revenuePerCategory,
  revenuePerYear,
} from '../../helpers/apiInterface';
import MunicipalitiesService from '../../services/municipalities';
import { action } from '@ember/object';
import { GraphOptions } from 'index';
import { infoTypes } from 'frontend/data/constants';
import axios from 'axios';

export default class MunicipalityInfo extends Controller {
  @service declare municipalities: MunicipalitiesService;
  @tracked thuiswerken: any;
  @tracked infoTypes = infoTypes;
  @service router: any;
  @tracked selected: any;
  @action handleSelect(value: any) {
    this.selected = value;

    switch (value) {
      case 'Alle Indicatoren':
        this.router.transitionTo('municipality.info.alle-indicatoren');
        break;
      case 'Lokaal Bestuur':
        this.router.transitionTo('municipality.info.lokaal-bestuur');
        break;
      case 'Onderwijs en Vorming':
        this.router.transitionTo('municipality.info.onderwijs-en-vorming');
        break;
      case 'Werk':
        this.router.transitionTo('municipality.info.werk');
        break;
      case 'Wonen en Woonomgeving':
        this.router.transitionTo('municipality.info.wonen-en-woonomgeving');
        break;
    }
  }

  @action setup() {
    axios
      .get(
        `http://localhost:3000/alle_indicatoren/thuiswerk?gemeente=${this.municipalities?.modalData?.title.toLowerCase()}`
      )
      .then((resp: any) => {
        this.thuiswerken = resp.data.Response[0]['2 dagen of meer (%)'];
      });
    revenuePerYear(this.municipalities?.modalData?.title).then((resp): any => {
      this.graphData1 = {
        x: 'x',
        columns: resp.reduce(
          (acc: any, curr: any) => {
            acc[0].push(`${curr[0]}-01-01`);
            acc[1].push(parseFloat(curr[1]));
            return acc;
          },
          [['x'], ['Omzet']]
        ),
        type: 'line',
      };
    });

    decisionAmountPerYear(this.municipalities?.modalData?.title).then(
      (resp): any => {
        this.graphData3 = {
          x: 'x',
          columns: resp.reduce(
            (acc: any, curr: any) => {
              acc[0].push(`${curr[0]}-01-01`);
              acc[1].push(parseFloat(curr[1]));
              return acc;
            },
            [['x'], ['Aantal beslissingen']]
          ),
          type: 'line',
        };
      }
    );

    revenuePerCategory(this.municipalities?.modalData?.title).then((resp) => {
      this.graphData2 = {
        columns: resp,
        type: 'pie',
      };
    });
  }

  @tracked axis = {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y',
      },
    },
  };

  @tracked graphData1: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'line',
  };
  @tracked graphData2: GraphOptions = {
    columns: [],
    type: 'pie',
  };
  @tracked graphData3: GraphOptions = {
    x: 'x',
    columns: [],
    type: 'line',
  };

  @tracked graphTitle1 = { text: 'Omzet per jaar' };
  @tracked graphTitle2 = { text: 'Omzet per categorie' };
  @tracked graphTitle3 = { text: 'Aantal beslissingen in 2022' };

  padding = { top: 20 };
}
