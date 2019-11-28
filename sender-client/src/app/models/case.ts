import { User } from './user';
import { Image } from './image';
import { Patient } from './patient';

export class Case {
    user: User;
    images: Image[];
    caseNr: string;
    randomtest: string;
    patientForm: Array<{question: string, storedValue: boolean, value: boolean, complementary?: string, complementaryFormData?: string[]}> = [];
    patientInfo: string[] = [];
    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.user= new User();
        this.images= [];
        this.caseNr= "";
        this.patientInfo = ["", "", ""];
        //patientForm needs to be initialized
        var comp: string[] = ["", "", "", "", "", "", "", "", "", "", ""];
        this.patientForm = [
            {question: "Har patienten en kroppstemperatur > 36° C?", storedValue: false, value: false},
            {question: "Är areriellt pO2 > 10 kPa?", storedValue: false, value: false}, 
            {question: "Är systoliskt blodtryck > 90 mm HG?", storedValue: false, value: false}, 
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false},
            {question: "Finns uppgift på vikt och längd?", storedValue: false, value: false, complementary: "formHeightWeight", complementaryFormData: comp},
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false},
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false},
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false},
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false},
            {question: "Har patienten en kroppstemperatur >36° C?", storedValue: false, value: false}
       ];

    }

  }
