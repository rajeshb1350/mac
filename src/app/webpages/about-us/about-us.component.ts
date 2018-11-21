import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { SeoService } from '../../services/digital-marketing/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  teamdata = [
    {
      name: 'Ravi Krovvidi',
      desg: 'Founder and CEO',
      content: `Ravi is at the helm of Strategic Planning of MacTec. With an astounding career spanning over 20 years in the areas
      of Finance & Accounting and Project Management, he is a Chartered Accountant with a varied industry experience
      with global Pharma, IT and Service companies. He is a Subject Matter Expert on Financial Planning & Analysis
      process equipped with wide and extensive insight on F&A domain coupled with business acumen on Service Delivery
      and Process Transformation. Ravi is instrumental in building MacTec IT Solutions as a brand that envisions partnering
      for success.`,
      img: '/assets/images/leads/ravi.png'
    },
    {
      name: 'Sumanthi Parakala',
      desg: 'Director',
      content: `Sumanthi has been associated with MacTec IT Solutions since the inception. She is the anchor of the ship. Having
      done everything with regards to HR operations, Recruitment, Products, Strategy and day-to-day operations, Sumanthi
      is instrumental in taking MacTec to a stature where the organisation is today, through her sheer competency to
      execute and accomplish. Sumanthi role entails Business Development, Product Development, Technical consultation
      and strategy. She holds a Masters Degree from Scotland in Information Technology with major specialization in
      Computer Aided Engineering.`,
      img: '/assets/images/leads/sumanthi.jpg'

    },
    {
      name: 'Rajeev Dubey',
      desg: 'Chief Technology Officer',
      content: `Rajeev is a certified expert in Adobe AEM with a strong experience in varied technological platforms for over
      17 years. As the CTO, Rajeev is the key member of MacTec being the design head for the state-of-the-art
      products Order Ezi <sup>®</sup>, Campus Champs <sup>®</sup>, City Blaze <sup>®</sup>, SmartOpx <sup>®</sup>, SBuS <sup>®</sup> and SkillPassport <sup>®</sup> .Rajeev is chief contributor in expansion of the
      technology portfolio of MacTec for the client servicing businesses in the areas of product design and development.
      Being the lead, he is the mentor and the guide of the development team in MacTec.`,
      img: '/assets/images/leads/rajeev.jpg'
    },
    {
      name: 'Ron (Ramakrishnan)',
      desg: 'L & D | Operations',
      content: `Ron is an expert in Learning & Development and Customer Service Operations domain with career spanning over 14 years specializing in Training functions. He is a Certified Trainer on array of Soft-skills and Behavioural interventions.Besides, he brings in rich experience in business transitions and knowledge transfer practices. Ron’s core expertise lies in human development & transformation and client service management.As a key member of MacTec, Ron plays a pivotal role in expansion of the L&D functions and product operations.`,
      img: '/assets/images/leads/rajeev.jpg'
    },
    {
      name: 'Abhishek Jangid',
      desg: 'Head UX Design',
      content: `UX strategist with a demonstrated history of working in the computer software industry. Skilled in strategising user journey and information architecture with creativity & innovative ideas.`,
      img: '/assets/images/leads/rajeev.jpg'
    },
    {
      name: 'Swaroop Suravarapu',
      desg: 'Head of Operation',
      content: `Swaroop leads the Operations at MacTec by the virtue of his long drawn experience in Operations Management. He holds a Master’s degree in Technology and Electronics from a premier university in India. With a industry experience  of over 6 years, Swaroop has extensive field operations expertise as well as infra management.`,
      img: '/assets/images/leads/rajeev.jpg'
    },
    {
      name: 'Ramakrishna',
      desg: 'Head Frontend Development',
      content: `Ramakrishna is the engine of sorts of the development vertical of MacTec IT Solutions. He is the most significant contributory force for the development and implementation of the technology products that we have built. With a Bachelors Degree in Engineering, Ramakrishna’s core competency lies in mobile technologies and building cross platform applications through Phone Gap technology. His keen eye on emerging trends and platforms gives him the added advantage that makes the vertical stronger. His role and contribution creates the key differentiator for MacTec products which sets us apart from the competition.`,
      img: '/assets/images/leads/rajeev.jpg'
    }
  ];

  servOffer = [
    {
      heading: 'Why MacTec',
      modules: 'Enterprise Solutions',
      seclist: [
        {
          header: 'Service',
          color: '#F07615',
          feature: [
            'We treat engagements as lasting partnerships and not contracts',
            'We strive to delight our customers by looking beyond the "needs" & "wants"',
          ],
        },
        {
          header: 'Values',
          color: '#002C4E',
          feature: [
            'Our Value system "Teamwork & Collaboration" is a crucial pillar to the success',
            'Selected and imbibed in every associate who are part of the fabric "MacTec"',
          ],
        },
        {
          header: 'Knowledge',
          color: '#FF1B1B',
          feature: [
            'Best practices capable for business process optimization',
            'Delivers unmatched business value to customers ',
          ],
        },
        {
          header: 'Technical Excellence',
          color: '#333333',
          feature: [
            'We think outside the box to solve our client\'s challenges innovatively',
            'New Dimensional products implementation and support',
          ],
        },
        {
          header: 'Commitment',
          color: '#FF1B1B',
          feature: [
            'On-time delivery',
            'Guaranteed deliverabl',
            'Customer focuse',
            'Whatever it takes is our Motto',
          ],
        },
        {
          header: 'Associates',
          color: '#F07615',
          feature: [
            'Highly skilled associates and ramping up continuously',
            'More than 500 + Certified resources ',
          ],
        },
        {
          header: 'Strong Leadership',
          color: '#333333',
          feature: [
            'Leadership that believes in and empowers the workforce',
            'Diverse experience allowing them to view with "a day in your shoes" concept',
          ],
        },
        {
          header: 'Value Proposition',
          color: '#002C4E',
          feature: [
            'Flexible resource ramp up & down option',
            'Leverage our Global Presence to bring the best value & lower the ROI & TCO',
            'Invest in POCs & new dimensional products at NO cost to Clients',
          ],
        },
      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    }
  ];

  visiondata =
    {
      id: 'vision',
      height: 'medium',
      listdata:
        [
          {
            heading: 'Vision',
            img: '/assets/images/vision/vision.png',
            content: `Uberization of Workforce through Smart Business Solutions – SBuS ®. Provide Best-in-Class and an innovative access to People,
          Processes and Technology. We aim to position MacTec as a Global Hub and driving force for Efficiency, Reliability,
          Cost-Effective and Highly Qualitative Solutions through onsite and offshore resource management processes.`
          }, {
            heading: 'Values',
            img: '/assets/images/vision/values.png',
            content: `Our values are Accountability, Collaboration, Customer-Centric, Integrity, Innovation, and Pursuit of Excellence.`
          }, {
            heading: 'Mission',
            img: '/assets/images/vision/mission.png',
            content: `Add value to our clients’ business through our services and products. Simplification of complex and deferrable processes.
          Set benchmark strategic solutions, and then drive to process excellence, for augmented ROI of time, money and effort
          of the management.
          We are an opportunity and knowledge hub with an objective and reputation in workforce transformation, process
          enhancements and technology Solutions.`
          }
        ]
    };

  benefitdata = [
    {
      heading: 'Operational Flexibility',
      content: `We are not mere a vendor providing services to marginalize your cost. We strive to be a domain expert and aim
      to be a partner in success of our customers.`
    },
    {
      heading: 'Certified Staff',
      content: `MacTec has a wide pool of highly qualified Graduates and Post Graduates with valued industry certifications who
      have the right expertise and talent for leveraging the appropriate knowledge base.`
    },
    {
      heading: 'Training & Development',
      content: `Our robust L&D mechanism is designed to deliver learning interventions that ensures enhanced execution in sync
      with our customers’ expectations.`
    },
    {
      heading: 'Transparency',
      content: `MacTec believes in Zero Surprises Operational mechanism where we keep out communication open and transparent ensuring
      client satisfaction. Our governance process ensures clear communication.`
    },
    {
      heading: 'Secured Operations',
      content: `We have a state-of-the-art surveillance mechanism and robust background check verification of our employees and
      top notch data security protocols to safeguard client information.`
    },
    {
      heading: 'Time Zone Coverage',
      content: `Supporting global operations cannot have any time zone boundaries. Our services are not bound by this natural
      limitation and hence we are open 24/7 with complete resource support.`
    },
    {
      heading: 'Niche Skills',
      content: `Academic qualifications and industry certifications apart, the significant aspect of a strong pool of experts
      in niche skill which can be leveraged for critical and high value projects.`
    },
    {
      heading: 'Cost Reducation',
      content: `MacTec stands by the philosophy of marginalised cost with no compromise in quality. We provides the services at
      a competitive price to significantly reduce the staffing cost.`
    },
    {
      heading: 'Proven Success',
      content: `With a fervent partnership with our erstwhile and existing clients, we have proven track record of not just seamless
      delivery but also adding value proposition to our clients’ business.`
    }
  ];

  private currentsec = '';

  constructor(
    private route: ActivatedRoute,
    private seo: SeoService
  ) {
    seo.setDmTags(window.location.pathname.slice(1));
  }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.currentsec = data.path;
        this.scrolltopath(this.currentsec);
      }
    );

    function debounce(func) {
      var wait = 50;
      var immediate = true;
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      }
    }

    $(document).ready(function (e) {
      const $journey = $('.about_sec9');
      const $jcircle = $('.about_sec9 .yeardata');
      const journeytop = $journey.offset().top - $journey.height() / 3;
      window.addEventListener('scroll', debounce(function () {
        var currpos = window.scrollY;
        if (currpos + 20 > journeytop) {
          $jcircle.addClass('active');
        }
      }));
    });
  }

  ngAfterViewInit() {
  }

  scrolltopath(path) {
    if (this.currentsec != undefined) {
      const $ele = $('#' + path);
      $('html,body').animate({ scrollTop: $ele.offset().top - 70 }, 'slow');
    } else {
      return;
    }
  }
}
