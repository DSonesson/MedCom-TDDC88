export class User {
    /** The name of a user */
    name: string;
    /** The e-mail of a user */
    email: string;
    /** The phone nummber of a user. */
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
