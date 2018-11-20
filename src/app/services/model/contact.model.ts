export class ContactModel {
    constructor(
        public contactName: string,
        public email: string,
        public contactNumber: string,
        public message: string,
        public servicesList: Array<any>,
        public sizeOfBusiness: string,
        public designation: string
    ){} 
}