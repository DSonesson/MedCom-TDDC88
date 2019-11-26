export class User {
    name: string;
    email: string;
    phone: string;

    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.name = "";
        this.email = "";
        this.phone  = "";
    }
  }
