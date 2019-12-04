import { Injectable } from '@angular/core';

/**
 * This service generates a case number.
 */
@Injectable({
  providedIn: 'root'
})
export class CaseNrService {

  /**
   * Creates a instance of CaseNrService.
   */
  constructor() { }


  /**
   * Computes the case number from a telephone number and the current time stamp.
   * @param {string} teleNum A 10 digit telephone number to compute the case number for.
   *
   * @returns The computed 8 digit case number as a string.
   */
  getCaseNr(teleNum:string):string {
    if (isNaN(Number(teleNum)))
    {
      return "Uncorrect telephone number!";
    }
    var dateNow = new Date();
    var timeStamp = String(dateNow.getTime()).substr(0,10)
    let id = Number(timeStamp.substr(2,12) +  teleNum.substr(4,6))
    let dict64:string[] = ['0','1','2','3','4','5','6','7','8','9',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      '-','+']
    var uuid:string = ''
    let last = 0

    while (id > 0){
      console.log(id)
      last = id % 64
      uuid = uuid.concat(String(dict64[last]))
      id = (id - last) / 64
    }

   if(uuid.length!=8)
    {
      return "Uncorrect telephone number!"; 
    }
    return uuid
  }
}
