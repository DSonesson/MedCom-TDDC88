import { User } from './user';
import { Image } from './image';
import { Patient } from './patient';
import { FormControl } from '@angular/forms';

export class Case {
    user: User;
    images: Image[];
    caseNr: string;
    randomtest: string;
    patientForm: Array<{question: string, storedValue: boolean, value: boolean, noCheckBoxes?: boolean, complementary?: string, complementaryFormData?: string[]}> = [];
    patientInfo: string[] = [];
    dateofArrival =  new FormControl(new Date());
    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.user= new User();
        this.images= [];
        this.caseNr= "";
        this.patientInfo = ["", "", ""];
        //patientForm needs to be initialized
        this.patientForm = [
            {question: "Har patienten en kroppstemperatur > 36° C?", storedValue: false, value: false},
            {question: "Är areriellt pO2 > 10 kPa?", storedValue: false, value: false}, 
            {question: "Är systoliskt blodtryck > 90 mm HG?", storedValue: false, value: false}, 
            {question: "Har traumaröntgen eller andra undersökningar gjorts?", storedValue: false, value: false},
            {question: "Är prover tagna för etanol eller annan toxikologi?", storedValue: false, value: false, complementary: "formHeightWeight", complementaryFormData: ["", "", "", "", "", "", "", "", "", "", ""]},
            {question: "Är patienten vid medvetande?", storedValue: false, value: false},
            {question: "Om patienten är eller har varit medvetslös - har analys av COHb gjorts?", storedValue: false, value: false},
            {question: "Är patienten intuberad?", storedValue: false, value: false},
            {question: "Vilka läkemedel är pågående?", storedValue: false, value: false},
            {question: "Pågår vätskebehandling enligt Parklands formel?", storedValue: false, value: false},
            {question: "Finns uppgift på vikt och längd?", storedValue: false, value: false, complementary: "formHeightWeight", complementaryFormData: ["", "", "", "", "", "", "", "", "", "", ""]},
            {question: "Hur mycket vätska har infunderats innan avfärd?", storedValue: false, value: false, noCheckBoxes: true, complementary: "infunderatForm", complementaryFormData: ["", "", "", "", "", "", "", "", "", "", ""]},
            {question: "Hur stor totaldiures har patient haft till ", storedValue: false, value: false, noCheckBoxes: true, complementary: "totaldiuresForm", complementaryFormData: ["", "", "", "", "", "", "", "", "", "", ""]},
            {question: "Har patienten fått Tetanusvaccination?", storedValue: false, value: false},
            {question: "Är patienten bandaderad med salvkompressförband (t.ex Jelonet) eller torra, rena kompresser?", storedValue: false, value: false},
            {question: "Har brännskadade händer och huvud högläge?", storedValue: false, value: false},
            {question: "Har eskarotomi gjorts vid cirkulära skador efter samverkan med brännskadejour?", storedValue: false, value: false},
            {question: "Är köldskador polstrade?", storedValue: false, value: false}

       ];
       //this.dateofArrival = undefined;

    }

  }
