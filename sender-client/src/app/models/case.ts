import { User } from './user';
import { Image } from './image';
import { Patient } from './patient';

export class Case {
    user: User;
    images: Image[];
    caseNr: string;
    randomtest: string;
    patientForm: Array<{question: string, storedValue: boolean, value: boolean}> = [];
    patientInfo: string[] = [];
    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.user= new User();
        this.images= [];
        this.caseNr= "";
        this.patientInfo = ["", "", ""];

    }

  }
