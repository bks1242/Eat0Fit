export class Recipe {
    public name;
    public description;
    public imgPath;
    constructor(name: string, description: string, imgPath: string){
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
    }
}