export type Decision = {
  category?: string;
  document: string;
  date: string;
  actief: true | false;
};

export type Tax = {
  year: number;
  totalRevenue: number;
  averageRevenue: number;
};

export type Municipality = {
  title: string;
  taxData: Array<Tax>;
  decisionData: Array<Decision>;
};

export type GraphOptions = {
  x?: string;
  columns: Array<any>;
  type: 'pie' | 'line' | 'bar' | 'spline';
};
