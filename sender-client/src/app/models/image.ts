export class Image {
    path: string;
    file: File;

    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.path = "";
        this.file = new File([""], "test.png")
    }

  }
