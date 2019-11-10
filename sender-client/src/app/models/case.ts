import { User } from './user';
import { Image } from './image';
import { Patient } from './patient';

export class Case {
    user: User;
    images: Image[];
    caseNr: number;
    randomtest: string;
    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.user= new User();
        this.images= [new Image()];
        this.caseNr= 12345;
        
    }

  }


