import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { ApiService } from './../../../services/http/api.service';
import { Response } from '@angular/http';
import { ModuleService } from './../../../services/model/module.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionFrom, OrganizeInfo, UserAddress } from '../../../services/model/subscriptionForm.model';




@Component({
  selector: 'app-services-all',
  templateUrl: './services-all.component.html',
  styleUrls: ['./services-all.component.less']
})
export class ServicesAllComponent implements OnInit {
  // status
  // 1: loading
  // 2: success
  // 3: warning
  // 4: error
  finalStatus: number = 1;
  statusMessage: string = "Please wait...";
  formstep: number = 1;
  // Form
  subscriptionFrom: FormGroup;
  formdata: SubscriptionFrom;
  subscriptiontype: string = '';

  // Product
  totalPrice: number = 0;
  totalProduct: number = 0;
  
  services: any;
  productIds = [];
  responseStatus: string = "";
  status: boolean;
  prodSet = new Set<number>();
  totalProdList = [];
  selectedList = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private moduleser: ModuleService,
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(
      (data: Data) => {
        this.services = data.serviceData
      }
    );
  }

  setSubcriptionType(data: string){
    this.subscriptiontype = data;
    console.log(this.subscriptiontype);
  }

  ngOnInit() {
    this.services.map(data => {
      this.totalProdList = [...this.totalProdList, ...data['productDetails']];
    });

    this.subscriptionFrom = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'mobile': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")])
      }),
      'orgData': new FormGroup({
        'orgname': new FormControl(null, Validators.required),
        'usersNo': new FormControl(null, Validators.required),
        'gstin': new FormControl(null),
        'organizationType': new FormControl("University")
      })
    });

    this.title.setTitle("MacTec IT Solutions");
    this.meta.updateTag({ name: "description", content: "We are global Smart Employee Services (SeS) provider with state-of-the-art technology and able human resources. Our spectrum of services branded as Smart" });
    this.meta.updateTag({ name: "keywords", content: "MacTec, Mac Tec, courses, elearning, platform, tool online, test platform" });


    $(document).ready(() => {
      const $cartbtn = $('.cart-button');
      const $cartclose = $('.cart-close');
      const $pricebox = $('.price-container');
      $cartbtn.on('click', function (e) {
        e.preventDefault();
        $pricebox.addClass("mobishow");
      })
      $cartclose.on('click', function (e) {
        e.preventDefault();
        $pricebox.removeClass("mobishow");
      })
    });
  }

  productAccUser(val) {
    console.log(val)
    this.totalPrice*=parseInt(val.target.value);
  }

  nextStep() {
    this.formstep += 1;
    console.log("next");
  }

  prevStep() {
    this.formstep -= 1;
    console.log("prev");
  }

  getSelectedProd(data) {
    var count = 0;
    var price = 0;
    if (data.target.checked) {
      this.prodSet.add(data.target.value);
    } else {
      this.prodSet.delete(data.target.value)
    }
    this.productIds = [...Array.from(this.prodSet)];
    this.selectedList = this.productIds.map(pdata => {
      var result = [];
      this.totalProdList.map((data) => {
        if (data['productId'] == pdata) {
          result.push(data);
        }
      })
      return result;
    }).map(data => {
      count++;
      price += data[0]["price"];
      return data[0];
    });

    this.totalPrice = price + price * 0.18;
    this.totalProduct = count;
  }

  onFormSubmit() {
    this.formstep = 3;

    this.formdata = new SubscriptionFrom(
      this.subscriptionFrom.get('userData.name').value,
      this.subscriptionFrom.get('userData.email').value,
      this.subscriptionFrom.get('userData.mobile').value,
      new OrganizeInfo(
        this.subscriptionFrom.get("orgData.orgname").value,
        this.subscriptionFrom.get("orgData.usersNo").value,
        this.subscriptionFrom.get("orgData.gstin").value,
        this.subscriptionFrom.get("orgData.organizationType").value
      ),
      new UserAddress(
        '',
        '',
        '',
        '',
        ''
      ),
      this.productIds,
      this.subscriptiontype
    );

    this.api.postSubscriptionData(this.formdata).subscribe(
      (response: any) => {
        if(response['status'] == "ALREADY_REPORTED") {
          this.finalStatus = 3;
          this.statusMessage = response['message'];
        } else if(response['status'] == "Success") {
          this.finalStatus = 2;
          this.statusMessage = response['message'];
        } else {
          this.finalStatus = 4;
          this.statusMessage = "Something went wrong. Please try again";
        }
      },
      error => {
        this.finalStatus = 4;
        this.statusMessage = "Something went wrong. Please try again";
        return;
      }
    );
  }
}
