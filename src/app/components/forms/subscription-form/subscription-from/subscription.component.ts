import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { SubscriptionFrom, OrganizeInfo, UserAddress } from '../../../../services/model/subscriptionForm.model';
import { ApiService } from '../../../../services/http/api.service';
import { Response } from '@angular/http';
import { ModuleService } from '../../../../services/model/module.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {
    private trailactive:boolean = false;
    loader: boolean = false;

    @Input() services: any;
    formdata: SubscriptionFrom;
    responseStatus: any;
    status: boolean;
    subscriptionFrom: FormGroup;

    constructor(
        private api: ApiService, private  moduleser:  ModuleService
    ){}

    setStatusVal(statusval: any){
        this.responseStatus = statusval;
    }

// Responses GET--------------------------------
// OK Responses
// {"status":"OK","message":"Success","response":{"id":12,"registrationId":"GP-210818100033","organizationName":"org","firstName":"Admin","lastName":"Admin","emailId":"admin@mail.com","mobile":1231231231,"type":"General"}}
// ALREADY_REPORTED
// {"status":"ALREADY_REPORTED","message":"Already Exist","response":"This email id is already registered.Please give another email"}





    onFormSubmit(){
        this.loader = true;

        var productIds=[]; 
     
      
        $(".productCheckbox").each(function() {
			if($(this).is(':checked')==true){
				productIds.push($(this).val());
			}
        });
        this.formdata = new SubscriptionFrom(
            this.subscriptionFrom.get("userData.name").value,
            this.subscriptionFrom.get("userData.email").value,
            this.subscriptionFrom.get("userData.mobile").value,
            new OrganizeInfo(
                this.subscriptionFrom.get("orgData.orgname").value, 
                this.subscriptionFrom.get("orgData.usersNo").value,
                this.subscriptionFrom.get("orgData.gstin").value
            ),
            new UserAddress(
                "",
                "",
                "",
                "",
                ""
            ),
            productIds
        );

        this.api.postSubscriptionData(this.formdata).subscribe(
            (response: any) => {
                this.status = true;
                this.loader = false;
                this.setStatusVal(response);
            },
            error => { 
                this.loader = false;
                return; 
            }
        );
    }
  

    ngOnInit() {
        this.subscriptionFrom = new FormGroup({
            'userData': new FormGroup({
                'name': new FormControl(null, Validators.required),            
                'email': new FormControl(null, [Validators.required, Validators.email]),            
                'mobile': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")])            
            }),
            'orgData': new FormGroup({
                'orgname': new FormControl(null, Validators.required),
                'usersNo': new FormControl(null, Validators.required),
                'gstin': new FormControl(null)
            })
        });
        
        
        $.easing.jswing = $.easing.swing;
        $.extend($.easing, {
            easeInOutBack: function(e, f, a, i, h, g) {
                if (g == undefined) {
                    g = 1.70158
                }
                if ((f /= h / 2) < 1) {
                    return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
                }
                return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
            }
        });

        $(document).ready(()=>{
            //$ time
            var current_fs, next_fs, previous_fs; //fieldsets
            var left, opacity, scale; //fieldset properties which we will animate
            var animating; //flag to prevent quick multi-click glitches
         
            $(".next").click(function(){
               
                $('html,body').animate({
                    scrollTop: $("#msform").offset().top},
                    'slow');

                if(animating) return false;
                animating = true;
                
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
                
                //activate next step on progressbar using the index of next_fs
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
                //show the next fieldset
                next_fs.show(); 
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function(now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale current_fs down to 80%
                        scale = 1 - (1 - now) * 0.2;
                        //2. bring next_fs from the right(50%)
                        left = (now * 50)+"%";
                        //3. increase opacity of next_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                    'transform': 'scale('+scale+')',
                    'position': 'absolute'
                }).removeAttr('stylr');
                        next_fs.css({'left': left, 'opacity': opacity});
                    }, 
                    duration: 800, 
                    complete: function(){
                        current_fs.hide();
                        animating = false;
                    }, 
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
            });

            $(".previous").click(function(){
                if(animating) return false;
                animating = true;
                
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();
                
                //de-activate current step on progressbar
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
                
                //show the previous fieldset
                previous_fs.show(); 
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function(now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale previous_fs from 80% to 100%
                        scale = 0.8 + (1 - now) * 0.2;
                        //2. take current_fs to the right(50%) - from 0%
                        left = ((1-now) * 50)+"%";
                        //3. increase opacity of previous_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({'left': left});
                        previous_fs.css({'transform': 'scale('+scale+')',
                        'opacity': opacity
                        });
                    }, 
                    duration: 800, 
                    complete: function(){
                        current_fs.hide();
                        animating = false;
                    }, 
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
            });

            $(".submit").click(function(){
                return false;
            })
            // --------------------------------------------------
            // --------------------------------------------------
            let checkpert = $(".perchecknan");
            let clr_bg = $(".prdname");

            checkpert.each((id, element) => {
                $(element).on("click", (elem)=>{
                    const $this = $($(elem)[0].target).parents(".prdname");
                    if(this.trailactive) {
                        $this.hasClass("bg_yellow")?
                        $this.removeClass("bg_yellow"):
                        $this.addClass("bg_yellow");
                    }
                })
            });
        });
        
    }









    onfree(){
        let elements = document.querySelectorAll(".serpro");
        let freetrail = document.querySelector("#prosearch");
        this.trailactive = !this.trailactive;
        Array.from(elements).forEach(element => {
            element.classList.add("disblk");
        });
        freetrail.classList.add("serpro");
    }
       
    onsubmit(){
        var fram = setInterval(frames, 5);
        let subscrp = document.querySelector("#msform");
        let pronone = document.querySelector("#section-9");
        pronone.classList.add("dispnone");
        subscrp.classList.add("dispblk");
       

        window.scrollBy({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
     //   window.location.reload(true);
    }




}
