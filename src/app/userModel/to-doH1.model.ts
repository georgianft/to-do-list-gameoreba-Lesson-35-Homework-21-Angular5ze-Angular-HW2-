export class userModel {
    id: number;
    fullName: string;
    age: number;
    constructor(id: number, fullName: string, age: number) {
        this.id = id;
        this.fullName = fullName;
        this.age = age;
    }
}