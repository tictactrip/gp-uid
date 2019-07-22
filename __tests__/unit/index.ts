import { Generator } from "../../src";

describe("Ground place unique id generation", () => {

  describe("Default configuration", () => {
    const generator: Generator = new Generator();

    it('Should return Paris gpuid', () => {
      const gpuid = generator.gpuid({
        name: 'Paris, Île-de-France, France',
        latitude: 49.00443,
        longitude: 2.51703,
        country_code: 'fr',
        type: 'cluster',
      });

      expect(gpuid).toEqual([
        {
          country_code: 'fr',
          id: 'c|FRparis___@u09yc',
          latitude: 49.00443,
          longitude: 2.51703,
          name: 'Paris, Île-de-France, France',
          type: 'cluster',
        },
      ]);
    });

    it('Should return Paris gpuid', () => {
      const gpuid = generator.gpuid({
        name: 'Paris - Gare De Lyon',
        latitude: 48.845784,
        longitude: 2.373606,
        country_code: 'fr',
        type: 'group',
      });

      expect(gpuid).toEqual([{
        country_code: 'fr',
        id: 'g|FRpargarly@u09tyh',
        latitude: 48.845784,
        longitude: 2.373606,
        name: 'Paris - Gare De Lyon',
        type: 'group',
      }]);
    });

    it('Should return array of gpuid', () => {
      const places = [
        {
          name: 'Coimbra, Centro, Portugal',
          latitude: 40.2162879,
          longitude: -8.4368065,
          country_code: 'pt',
          type: 'cluster',
        },
        {
          name: 'Troyes, Grand Est, France',
          latitude: 48.32633,
          longitude: 4.11027,
          country_code: 'fr',
          type: 'cluster',
        },
        {
          name: 'Bakersfield, CA, California, United States of America',
          latitude: 35.3732921,
          longitude: -119.0187125,
          country_code: 'us',
          type: 'cluster',
        },
        {
          name: 'Bannemin, Mecklenburg-Vorpommern, Deutschland',
          latitude: 54.0660299,
          longitude: 13.8531323,
          country_code: 'de',
          type: 'cluster',
        },
        {
          name: 'Bardolino, Veneto, Italia',
          latitude: 45.5453076,
          longitude: 10.6914197,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Barstow, CA, California, United States of America',
          latitude: 34.8957957,
          longitude: -117.0172826,
          country_code: 'us',
          type: 'cluster',
        },
        {
          name: 'Bassano del Grappa, Veneto, Italia',
          latitude: 45.7657286,
          longitude: 11.7272747,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Bellaria-Igea Marina, Emilia-Romagna, Italia',
          latitude: 44.1343597,
          longitude: 12.4667204,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Bitburg, Rheinland-Pfalz, Deutschland',
          latitude: 49.9664145,
          longitude: 6.5298603,
          country_code: 'de',
          type: 'cluster',
        },
        {
          name: 'Blythe, CA, California, United States of America',
          latitude: 33.6177725,
          longitude: -114.5882607,
          country_code: 'us',
          type: 'cluster',
        },
        {
          name: 'Borgo Valsugana, Trentino-Alto Adige, Italia',
          latitude: 46.0528053,
          longitude: 11.4626055,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Brenzone sul Garda, Veneto, Italia',
          latitude: 45.7084285,
          longitude: 10.7675388,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Bullhead City, AZ, Arizona, United States of America',
          latitude: 35.1359386,
          longitude: -114.5285981,
          country_code: 'us',
          type: 'cluster',
        },
        {
          name: 'Burbank, CA, California, United States of America',
          latitude: 34.1808392,
          longitude: -118.3089661,
          country_code: 'us',
          type: 'cluster',
        },
        {
          name: 'B\\u00fcsum, Schleswig-Holstein, Deutschland',
          latitude: 54.1346218,
          longitude: 8.8585913,
          country_code: 'de',
          type: 'cluster',
        },
        {
          name: 'Castelfranco Veneto, Veneto, Italia',
          latitude: 45.6716942,
          longitude: 11.9282388,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name: 'Cavallino-Treporti, Veneto, Italia',
          latitude: 45.4581725,
          longitude: 12.4616076,
          country_code: 'it',
          type: 'cluster',
        },
        {
          name:
            'Cerik, Br\\u010dko distrikt Bosne i Hercegovine, Bosna i Hercegovina  \\u0411\\u043e\\u0441\\u043d\\u0430 \\u0438 \\u0425\\u0435\\u0440\\u0446\\u0435\\u0433\\u043e\\u0432\\u0438\\u043d\\u0430',
          latitude: 44.816249,
          longitude: 18.530346,
          country_code: 'ba',
          type: 'cluster',
        },
        {
          name: 'Cesenatico',
          latitude: 44.200847,
          longitude: 12.4052023,
          country_code: 'it',
          type: 'group',
        },
        {
          name: 'Cisano',
          latitude: 45.528962,
          longitude: 10.7272055,
          country_code: 'it',
          type: 'group',
        },
        {
          name: 'João Pessoa, Portugal',
          latitude: -7.157990,
          longitude: -34.880901,
          country_code: 'pt',
          type: 'cluster',
        },
        {
          name: 'Bisschopsstraat 14, 1000 Brussel',
          latitude: 50.850346,
          longitude: 4.351721,
          country_code: 'be',
          type: 'cluster',
        },
        {
          id: 'fakeId',
          name: '73 Rue Victor Hugo, Pontault-Combault, 77340',
          latitude: 48.784780,
          longitude: 2.611250,
          country_code: 'fr',
          type: 'cluster',
        },
      ];

      const gpuids = generator.gpuid(places);
      expect(gpuids).toEqual([
        {
          name: 'Coimbra, Centro, Portugal',
          latitude: 40.2162879,
          longitude: -8.4368065,
          country_code: 'pt',
          type: 'cluster',
          id: 'c|PTcoimbra_@ez1uz',
        },
        {
          name: 'Troyes, Grand Est, France',
          latitude: 48.32633,
          longitude: 4.11027,
          country_code: 'fr',
          type: 'cluster',
          id: 'c|FRtroyes__@u0dfv',
        },
        {
          name: 'Bakersfield, CA, California, United States of America',
          latitude: 35.3732921,
          longitude: -119.0187125,
          country_code: 'us',
          type: 'cluster',
          id: 'c|USbakersfi@9q735',
        },
        {
          name: 'Bannemin, Mecklenburg-Vorpommern, Deutschland',
          latitude: 54.0660299,
          longitude: 13.8531323,
          country_code: 'de',
          type: 'cluster',
          id: 'c|DEbannemin@u39ge',
        },
        {
          name: 'Bardolino, Veneto, Italia',
          latitude: 45.5453076,
          longitude: 10.6914197,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITbardolin@u0pe5',
        },
        {
          name: 'Barstow, CA, California, United States of America',
          latitude: 34.8957957,
          longitude: -117.0172826,
          country_code: 'us',
          type: 'cluster',
          id: 'c|USbarstow_@9qhy9',
        },
        {
          name: 'Bassano del Grappa, Veneto, Italia',
          latitude: 45.7657286,
          longitude: 11.7272747,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITbassgrap@u20k6',
        },
        {
          name: 'Bellaria-Igea Marina, Emilia-Romagna, Italia',
          latitude: 44.1343597,
          longitude: 12.4667204,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITbeligema@srbg5',
        },
        {
          name: 'Bitburg, Rheinland-Pfalz, Deutschland',
          latitude: 49.9664145,
          longitude: 6.5298603,
          country_code: 'de',
          type: 'cluster',
          id: 'c|DEbitburg_@u0usk',
        },
        {
          name: 'Blythe, CA, California, United States of America',
          latitude: 33.6177725,
          longitude: -114.5882607,
          country_code: 'us',
          type: 'cluster',
          id: 'c|USblythe__@9myx2',
        },
        {
          name: 'Borgo Valsugana, Trentino-Alto Adige, Italia',
          latitude: 46.0528053,
          longitude: 11.4626055,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITborgvals@u20ju',
        },
        {
          name: 'Brenzone sul Garda, Veneto, Italia',
          latitude: 45.7084285,
          longitude: 10.7675388,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITbrengard@u0psj',
        },
        {
          name: 'Bullhead City, AZ, Arizona, United States of America',
          latitude: 35.1359386,
          longitude: -114.5285981,
          country_code: 'us',
          type: 'cluster',
          id: 'c|USbullcity@9qnxc',
        },
        {
          name: 'Burbank, CA, California, United States of America',
          latitude: 34.1808392,
          longitude: -118.3089661,
          country_code: 'us',
          type: 'cluster',
          id: 'c|USburbank_@9q5f7',
        },
        {
          name: 'B\\u00fcsum, Schleswig-Holstein, Deutschland',
          latitude: 54.1346218,
          longitude: 8.8585913,
          country_code: 'de',
          type: 'cluster',
          id: 'c|DEb\\u00fcs@u1w7c',
        },
        {
          name: 'Castelfranco Veneto, Veneto, Italia',
          latitude: 45.6716942,
          longitude: 11.9282388,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITcastvene@u207z',
        },
        {
          name: 'Cavallino-Treporti, Veneto, Italia',
          latitude: 45.4581725,
          longitude: 12.4616076,
          country_code: 'it',
          type: 'cluster',
          id: 'c|ITcavatrep@u20fe',
        },
        {
          name:
            'Cerik, Br\\u010dko distrikt Bosne i Hercegovine, Bosna i Hercegovina  \\u0411\\u043e\\u0441\\u043d\\u0430 \\u0438 \\u0425\\u0435\\u0440\\u0446\\u0435\\u0433\\u043e\\u0432\\u0438\\u043d\\u0430',
          latitude: 44.816249,
          longitude: 18.530346,
          country_code: 'ba',
          type: 'cluster',
          id: 'c|BAcerik___@srvnv',
        },
        {
          name: 'Cesenatico',
          latitude: 44.200847,
          longitude: 12.4052023,
          country_code: 'it',
          type: 'group',
          id: 'g|ITcesenati@srbg6q',
        },
        {
          name: 'Cisano',
          latitude: 45.528962,
          longitude: 10.7272055,
          country_code: 'it',
          type: 'group',
          id: 'g|ITcisano__@u0peh0',
        },
        {
          country_code: "pt",
          id: "c|PTjoaopess@7nxpq",
          latitude: -7.15799,
          longitude: -34.880901,
          name: "João Pessoa, Portugal",
          type: "cluster",
        },
        {
          country_code: "be",
          id: "c|BEbiss14__@u1516",
          latitude: 50.850346,
          longitude: 4.351721,
          name: "Bisschopsstraat 14, 1000 Brussel",
          type: "cluster",
        },
        {
          ancestor_id: "fakeId",
          country_code: "fr",
          id: "c|FR73ruvihu@u09ve",
          latitude: 48.78478,
          longitude: 2.61125,
          name: "73 Rue Victor Hugo, Pontault-Combault, 77340",
          type: "cluster",
        },
      ]);
    });
  });
});
