import { User } from './user';
import { Image } from './image';
import { Patient } from './patient';

export class Case {
    user: User;
    images: File[];
    caseNr: number;
    
    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.user= new User();
        this.images= [new File(["test"], "test.html")];
        this.caseNr= 12345;
        
    }

  }


