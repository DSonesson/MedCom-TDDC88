export class Image {
    path: string;
    file: Blob;

    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.path = "";
        this.file = new Blob(["test"], { type: 'unknown' });
    }

  }
