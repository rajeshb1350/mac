export class JobpostFromModel{
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public mobileNumber: string,
        public designation: string,
        public resume: File
    ){}
}