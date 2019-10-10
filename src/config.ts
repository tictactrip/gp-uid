interface IConfiguration {
  cluster: {
    prefix: string;
    coord_precision: number;
    hash_precision: number;
    name_length: number;
  };
  group: {
    prefix: string;
    coord_precision: number;
    hash_precision: number;
    name_length: number;
  },
  require_field: string[],
}

const configuration: IConfiguration = {
  cluster: {
    prefix: 'c|',
    coord_precision: 2,
    hash_precision: 5,
    name_length: 8,
  },
  group: {
    prefix: 'g|',
    coord_precision: 4,
    hash_precision: 6,
    name_length: 8,
  },
  require_field: ['name', 'type', 'latitude', 'longitude', 'countryCode'],
};

export {
  IConfiguration,
  configuration,
}
