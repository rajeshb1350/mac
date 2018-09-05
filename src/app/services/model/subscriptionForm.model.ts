export class SubscriptionFrom { 
    constructor(
        public name: string ,
        public email: string ,
        public phoneNum: number ,
        public organizeInfo: OrganizeInfo ,
        public userAddress: UserAddress
    ){}
}

export class OrganizeInfo { 
    constructor(
        public orgname: string ,
        public usersNo: number,
        public gstin: number
    ){}
}

export class UserAddress { 
    constructor(
        public addressOne: string , 
        public addressTwo: string , 
        public state: string , 
        public country: string , 
        public pincode: string 
    ){}
}
