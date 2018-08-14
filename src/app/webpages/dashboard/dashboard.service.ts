export class DashboardService {
    // private dashboardData = {
    //         personalDetail: {
    //             name: "Testmon",
    //             organization: "Testmon Inc.",
    //             users: 10,
    //             mobile: "1231231231",
    //             email: "testmon@example.com",
    //             Address: "NA"
    //         },
    //         SoftwareStatus: [
    //             {
    //                 product: 1,
    //                 status: "Unsubscribed",
    //                 active: 0,
    //                 try: "www.example.com",
    //                 buy: "www.example.com"
    //             },
    //             {
    //                 product: 3,
    //                 status: "Unsubscribed",
    //                 active: 0,
    //                 try: "www.example.com",
    //                 buy: "www.example.com"
    //             }
    //         ]
    // };

    private erpData = [
        {
            "product": 1,
            "name": "Skill Passport",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/dummyicon.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Days Remaining",
            "day": 22,
            "active": 5,
            "btn1": {
                "name": "Access",
                "link": "www.example.com"
            }
        },
        {
            "product": 2,
            "name": "Finance",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/finance.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        },
        {
            "product": 3,
            "name": "HRMS",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/hrms.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        },
        {
            "product": 4,
            "name": "e-Invoicing",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/invoice.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        },
        {
            "product": 5,
            "name": "LMS",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/lms.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        },
        {
            "product": 6,
            "name": "EasyShip",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/dummyicon.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        },
        {
            "product": 6,
            "name": "Accounting",
            "version": "123.12.311.112",
            "img": "/assets/images/icons/account.png",
            "content": "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
            "status": "Unsubscribed",
            "day": 0,
            "active": 0,
            "btn1": {
                "name": "Try Now",
                "link": "www.example.com"
            },
            "btn2": {
                "name": "Buy Now",
                "link": "www.example.com"
            }
        }
    ];


    // getPersonalDetails(){
    //     return this.dashboardData;
    // }
    // setPersonalDetails(details){
    //     this.dashboardData = details;
    // }
    getSoftwareStatus(){
        return this.erpData;
    }
    setSoftwareStatus(data){
        this.erpData = data;
    }
}