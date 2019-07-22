import * as geohash from 'ngeohash';
import { configuration } from './config';
import { sanitize } from './utils';

interface IPlace {
  id?: string;
  ancestor_id?: string;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  type: string; //  tslint:disable-line: no-reserved-keywords
}

/**
 * {@inheritDoc}
 * @description gpuid Generator.
 */
export class Generator {

  /**
   * @description Returns places with GPUIDs.
   * @param data {IPlace | IPlace[]}
   * @return {IPlace[]}
   */
  public gpuid(data: IPlace | IPlace[]): IPlace[] {
    if(!Array.isArray(data)) {
      return this.process([data]);
    }

    return this.process(data);
  }

  /**
   * @description Switch words order.
   * @param nameSplit {string[]}
   * @return {string[]}
   */
  private switchWordsOrder(nameSplit: string[]): string[] {
    const nameSplittedToRet = [...nameSplit];
    const lastElement = nameSplittedToRet[nameSplittedToRet.length - 1];
    nameSplittedToRet.splice(3, 0, lastElement);
    nameSplittedToRet.splice(-1, 1);

    return nameSplittedToRet;
  }
  /**
   * @description Round coordinate.
   * @param coordinate {string}
   * @param coordinateType {string}
   * @return {string}
   */
  private roundCoord(coordinate: number, coordinateType: string): string {
    // tslint:disable-next-line: no-unsafe-any
    return parseFloat(coordinate.toString()).toFixed(configuration[coordinateType].coord_precision);
  }

  /**
   * @description Returns informations.
   * @param str {string}
   * @param coordinateType {string}
   * @return {[number, number]}
   */
  private getInformations(str: string[], coordinateType: string): [number, number] {
    const iteration = str.length;
    const keep = Math.ceil(configuration[coordinateType].name_length / iteration); // tslint:disable-line: no-unsafe-any

    return [iteration, keep];
  }

  /**
   * @description Returns cut name.
   * @param name {string}
   * @param iteration {number}
   * @param keep {number}
   * @param coordinateType {string}
   * @return {string}
   */
  private cutName(name: string[], iteration: number, keep: number, coordinateType: string): string {
    let nameCutted = '';

    for (let i = 0; i < iteration; i += 1) {
      const word = name[i];
      const wordToRet = keep > word.length ? word : word.substring(0, keep);
      nameCutted = `${nameCutted}${wordToRet}`;
    }

    if (nameCutted.length < configuration[coordinateType].name_length) { // tslint:disable-line: no-unsafe-any
      // tslint:disable-next-line: no-unsafe-any
      const fillWithUnderscore: string = '_'.repeat(configuration[coordinateType].name_length - nameCutted.length);

      return `${nameCutted}${fillWithUnderscore}`;
    }

    if (nameCutted.length > configuration[coordinateType].name_length) { // tslint:disable-line: no-unsafe-any
      // tslint:disable-next-line: no-unsafe-any
      return nameCutted.substring(0, configuration[coordinateType].name_length);
    }

    return nameCutted;
  }

  /**
   * @description Returns split name.
   * @param name {string}
   * @param coordinateType {string}
   * @param countryCode {string}
   * @return {string[]}
   */
  private getSplitName(name: string, coordinateType: string, countryCode: string): string[] {
    const nameToSanitize: string = coordinateType === 'cluster' ? name.split(',')[0] : name.replace(/,/gi, ' ');
    const nameSanitize: string  = sanitize(nameToSanitize, countryCode);

    return nameSanitize.split(' ').filter(Boolean);
  }

  /**
   * @description Returns hash.
   * @param name {string}
   * @param coordinateType {string}
   * @param countryCode {string}
   * @return {string}
   */
  private hash(name: string, coordinateType: string, countryCode: string): string {
    let sainNameSplitted: string[] = this.getSplitName(name, coordinateType, countryCode);
    sainNameSplitted = this.switchWordsOrder(sainNameSplitted);
    const cutInfos  = this.getInformations(sainNameSplitted, coordinateType);
    const iteration = cutInfos[0];
    const keep = cutInfos[1];
    const nameCutted = this.cutName(sainNameSplitted, iteration, keep, coordinateType);

    return `${countryCode.toUpperCase()}${nameCutted}`;
  }

  /**
   * @description Returns id from place.
   * @param place {IPlace}
   * @return {string}
   */
  private getId(place: IPlace): string {
    const hashname: string = this.hash(place.name, place.type, place.country_code);
    const roundedLat: string = this.roundCoord(place.latitude, place.type);
    const roundLng: string = this.roundCoord(place.longitude, place.type);

    // tslint:disable-next-line: no-unsafe-any
    const placeGeohash: string = geohash.encode(roundedLat, roundLng, configuration[place.type].hash_precision);

    // tslint:disable-next-line: no-unsafe-any
    const prefix: string = configuration[place.type].prefix;

    return `${prefix}${hashname}@${placeGeohash}`;
  }

  /**
   * @description Returns places with GPUIDs.
   * @param places {IPlace[]}
   * @return {IPlace[]}
   */
  private process(places: IPlace[]): IPlace[] {
    return places.map((place: IPlace) => {
      let placeTmp = place;
      if(place.id !== undefined) {
        placeTmp = { ancestor_id: place.id, ...place};
      }

      placeTmp.id = this.getId(place);

      return placeTmp;
    });
  }
}
