// SC-19
// Author: Wesley Chen
// Date: 2019.10.24
// Generate the case number(uuid) for each case

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaseNumberService {

  constructor() { }

  getCaseNr(teleNum:String):String{
	var dateNow = new Date();
	var timeStamp = String(dateNow.getTime()).substr(0,10)
	console.log(timeStamp)
	let id = Number(timeStamp.substr(2,12) +  teleNum.substr(4,6))
	console.log(id)


	let dict64:String[] = ['0','1','2','3','4','5','6','7','8','9',
							'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
							'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
							'-','+']


	var uuid:String = ''
	
	console.log(uuid)
	let last = 0
	
	while (id > 0){
		console.log(id)
		last = id % 64
		uuid = uuid.concat(String(dict64[last]))
		id = (id - last) / 64
	}

	console.log(uuid)
	return uuid
	}
}
