import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { SubscriptionFrom, OrganizeInfo, UserAddress } from '../../../../services/model/subscriptionForm.model';
import { ApiService } from '../../../../services/http/api.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit {
    formdata: SubscriptionFrom;
    responseStatus: string = "";
    status: boolean;
    subscriptionFrom: FormGroup;

    constructor(
        private api: ApiService
    ){}

// Responses GET--------------------------------
// OK Responses
// {"status":"OK","message":"Success","response":{"id":12,"registrationId":"GP-210818100033","organizationName":"org","firstName":"Admin","lastName":"Admin","emailId":"admin@mail.com","mobile":1231231231,"type":"General"}}
// ALREADY_REPORTED
// {"status":"ALREADY_REPORTED","message":"Already Exist","response":"This email id is already registered.Please give another email"}

    onFormSubmit(){
        this.formdata = new SubscriptionFrom(
            this.subscriptionFrom.get("userData.name").value,
            this.subscriptionFrom.get("userData.email").value,
            this.subscriptionFrom.get("userData.phone").value,
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
            )
        );

        this.api.postSubscriptionData(this.formdata).subscribe(
            (response: any) => {
                this.status = true;
                this.responseStatus = JSON.parse(response._body);
            },
            error => { return; }
        );
    }
  

    ngOnInit() {
        this.subscriptionFrom = new FormGroup({
            'userData': new FormGroup({
                'name': new FormControl(null, Validators.required),            
                'email': new FormControl(null, [Validators.required, Validators.email]),            
                'phone': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")])            
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

        $(document).ready(function(){
            //$ time
            var current_fs, next_fs, previous_fs; //fieldsets
            var left, opacity, scale; //fieldset properties which we will animate
            var animating; //flag to prevent quick multi-click glitches

            $(".next").click(function(){
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
        });
        
    }

}
