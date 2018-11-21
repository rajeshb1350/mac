export class JobpostFromModel{
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public flie: File,
        public designation: string,
        public message: string
    ){}
}