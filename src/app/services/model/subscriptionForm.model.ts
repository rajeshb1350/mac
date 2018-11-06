export class SubscriptionFrom { 
    constructor(
        public name: string ,
        public email: string ,
        public mobile: number ,
        public organizeInfo: OrganizeInfo ,
        public userAddress: UserAddress,
        public productIds: any,
       // public subscriptionType:string,
    ){}
}

export class OrganizeInfo { 
    constructor(
        public orgname: string ,
        public usersNo: number,
        public gstin: number,
        public organizationType: string
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
