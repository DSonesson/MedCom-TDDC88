/**
 * This is the image class,
 * which defines data for a image
 */
export class Image {
    path: string;
    file: Blob;
    name: string;

    constructor() {
        this.dummyData();

    }

    dummyData() {
        this.path = "";
        this.file = new Blob(["test"], { type: 'unknown' });
        this.name = "bild";
    }

  }
