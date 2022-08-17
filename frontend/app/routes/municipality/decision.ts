import Route from '@ember/routing/route';

export default class MunicipalityDecision extends Route {
  model(params: any) {
    console.log(params);
    const { decision_id } = params;
    console.log(decision_id);
    return decision_id;
  }
}
