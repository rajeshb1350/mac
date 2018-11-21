import { Title, Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class SeoService {
    private dmData={
        "index": {
            "title": "MacTec IT Solutions",
            "description": "Lorem ipsum, error officia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "sbus index,sbus home, smart bussiness solutions home,MacTecit home,smart erp,rite erp,eassy erp,erp,erp solution,mac tec it solutions home,MacTec erp home,sd MacTec it solutions home,sd MacTec it home,finance module erp,",
            "og": {
                "title": "MacTec | Home",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "sbus-strategy": {
            "title": "Our Strategy",
            "description": "Lorem ipsum, error officia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "Our Strategy sbus,sbus, smart bussiness solutions Our Strategy,MacTecit Our Strategy,smart erp Our Strategy,rite erp,eassy erp,erp,erp solution,mac tec it solutions,MacTec erp,sd MacTec it solutions Our Strategy,sd MacTec it Our Strategy,",
            "og": {
                "title": "MacTec | Strategy",
                "creater": "@author_name123",
                "card": "anything",
                "site": "@publisher_handle1",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet elit. Perspiciatis ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "sbus-service": {
            "title": "SBuS Services",
            "description": "Lorem ipsum, error officia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "sbus,SBuS Services, smart bussiness solutions ,MacTecit,smart erp,rite erp,eassy erp,erp,erp solution,mac tec it solutions,MacTec erp,sd MacTec it solutions,sd MacTec it,",
            "og": {
                "title": "SBuS Services",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "all-products": {
            "title": "MacTec Products",
            "description": "Lorem ipsum, error officia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "products,sbus products, smart bussiness solutions ,MacTecit products,smart erp products,rite erp products,eassy erp,erp,erp solution,mac tec it solutions products,MacTec erp,sd MacTec it solutions products,sd MacTec it products,",
            "og": {
                "title": "SBuS Products",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "careers": {
            "title": "MacTec | Career",
            "description": "adipisicing elit. Perspiciatis illo nihil.",
            "keywords": "sbus careers,careers,it careers,it careers hydreabad, smart bussiness solutions ,MacTecit careers,smart erp,rite erp,eassy erp,erp,erp solution,mac tec it solutions,MacTec erp careers,sd MacTec it solutions careers,sd MacTec it careers,",
            "og": {
                "title": "Career",
                "creater": "@authorname123",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type2",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": " adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "joblist": {
            "title": "MacTec | Career",
            "description": "adipisicing elit. Perspiciatis illo nihil.",
            "keywords": "sbus careers,careers,it careers,it careers hydreabad, smart bussiness solutions ,MacTecit careers,smart erp,rite erp,eassy erp,erp,erp solution,mac tec it solutions,MacTec erp careers,sd MacTec it solutions careers,sd MacTec it careers,",
            "og": {
                "title": "Career",
                "creater": "@authorname123",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type2",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": " adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "contact": {
            "title": "MacTec | Contact",
            "description": "Lorem ipsumfficia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "contact, contact us, sbus contact, smart bussiness solutions ,MacTecit,smart erp,rite erp contact,eassy erp,erp contact,erp solution,mac tec it solutions contact,MacTec erp contact,sd MacTec it solutions contact,sd MacTec it contact,",
            "og": {
                "title": "Contact us",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "finance-accounting": {
            "title": "Finance & Accounting",
            "description": "Lorem ipsumfficia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "contact, contact us, sbus contact, smart bussiness solutions ,MacTecit,smart erp,rite erp contact,eassy erp,erp contact,erp solution,mac tec it solutions contact,MacTec erp contact,sd MacTec it solutions contact,sd MacTec it contact,",
            "og": {
                "title": "Finance & Accounting",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "technology-services": {
            "title": "Technology Services",
            "description": "Lorem ipsumfficia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "contact, contact us, sbus contact, smart bussiness solutions ,MacTecit,smart erp,rite erp contact,eassy erp,erp contact,erp solution,mac tec it solutions contact,MacTec erp contact,sd MacTec it solutions contact,sd MacTec it contact,",
            "og": {
                "title": "Technology Services",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "operation-excellence": {
            "title": "Operation Excellence",
            "description": "Lorem ipsumfficia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "contact, contact us, sbus contact, smart bussiness solutions ,MacTecit,smart erp,rite erp contact,eassy erp,erp contact,erp solution,mac tec it solutions contact,MacTec erp contact,sd MacTec it solutions contact,sd MacTec it contact,",
            "og": {
                "title": "Operation Excellence",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        },
        "aboutus": {
            "title": "MacTec | About us",
            "description": "Lorem ipsumfficia consequuntur nam quidem doloremque tempora nostrum.",
            "keywords": "contact, contact us, sbus contact, smart bussiness solutions ,MacTecit,smart erp,rite erp contact,eassy erp,erp contact,erp solution,mac tec it solutions contact,MacTec erp contact,sd MacTec it solutions contact,sd MacTec it contact,",
            "og": {
                "title": "MacTec | About us",
                "creater": "@author_name",
                "card": "product",
                "site": "@publisher_handle",
                "type": "type1",
                "url": "http://www.mactecit.com",
                "image": "/assets/images/applicationLogos/logo-blue.png",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo nihil minus ullam, itaque error officia consequuntur nam quidem doloremque tempora nostrum."
            }
        }

     

        
    };

    constructor(
        private title: Title, 
        private meta: Meta
    ) { }
        
    setDmTags(path: string){
        this.title.setTitle( this.dmData[path]['title']);
        this.meta.updateTag({ 
            name: "description", 
            content:  this.dmData[path]['description']
        });
        this.meta.updateTag({ 
            name: "keywords", 
            content:  this.dmData[path]['keywords'] 
        });

        // Twitter
        this.meta.updateTag({ 
            name:"twitter:card", 
            content:  this.dmData[path]['og']['card'] 
        });
        this.meta.updateTag({ 
            name:"twitter:site", 
            content:  this.dmData[path]['og']['site'] 
        });
        this.meta.updateTag({ 
            name:"twitter:title", 
            content:  this.dmData[path]['og']['title'] 
        });
        this.meta.updateTag({ 
            name:"twitter:description", 
            content:  this.dmData[path]['og']['title'] 
        });
        this.meta.updateTag({ 
            name:"twitter:creator", 
            content:  this.dmData[path]['og']['creater'] 
        });
        this.meta.updateTag({ 
            name:"twitter:image", 
            content:  this.dmData[path]['og']['image'] 
        });

        // OpenGraph data
        this.meta.updateTag({ 
            property:"og:title", 
            content:  this.dmData[path]['og']['title'] 
        });
        this.meta.updateTag({ 
            property:"og:type", 
            content:  this.dmData[path]['og']['type'] 
        });
        this.meta.updateTag({ 
            property:"og:url", 
            content:  this.dmData[path]['og']['url'] 
        });
        this.meta.updateTag({ 
            property:"og:image", 
            content:  this.dmData[path]['og']['image'] 
        });
        this.meta.updateTag({ 
            property:"og:description", 
            content:  this.dmData[path]['og']['description'] 
        });    
    }
}
