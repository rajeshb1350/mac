declare var require: any;
import {
	Component,
	OnInit
} from '@angular/core';
import * as $ from 'jquery';
import {
	ApiService
} from '../../../services/http/api.service';
import {
	Observable,
	Observer,
	throwError
} from 'rxjs';

export interface IWindow extends Window {
	webkitSpeechRecognition: any;
}
@Component({
	selector: 'app-chat-app',
	templateUrl: './chat-app.component.html',
	styleUrls: ['./chat-app.component.less']
})

export class ChatAppComponent implements OnInit {

	faqs: any;
	relatedQuestions: any;
	chatHistoryMessages: any;
	recognition: any;
	inputString: String;

	constructor(private apiservice: ApiService) {

		this.apiservice.getFAQList().subscribe(
			(data: any) => {
				this.faqs = [];
				this.faqs = data;
				localStorage.setItem('faqsList', JSON.stringify(data));
			},
			error => error
		)
		this.chatHistoryMessages = [];
		this.inputString = "";
		try {
			const {
				webkitSpeechRecognition
			}: IWindow = < IWindow > window;
			this.recognition = new webkitSpeechRecognition();
			this.recognition.interimResults = true;
			this.recognition.lang = 'en-IN';
      this.recognition.continuous = true;
      this.inputString="";

		} catch (e) {
			console.error(e);

		}

	}
	ngOnInit() {
		$(document).ready(function () {
			$(".chatIcon").find("i:first").on("click", function () {
				$(".chatWindow").toggleClass("d-none");
      });
    
   
		});
		// This block is called every time the Speech APi captures a line. 
		this.recognition.onresult =  (event) => {

			// event is a SpeechRecognitionEvent object.
			// It holds all the lines we have captured so far. 
			// We only need the current one.
			var current = event.resultIndex;

			// Get a transcript of what was said.
			var transcript = event.results[current][0].transcript;

			// Add the current transcript to the contents of our Note.
			// There is a weird bug on mobile, where everything is repeated twice.
			// There is no official solution so far so we have to handle an edge case.
			var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

			if (!mobileRepeatBug) {
      this.inputString += transcript;
        $("#inputText").val(transcript);
        $("#inputText").on('input', function() {
          $("#inputText") .val($(this).val());
        });
        
       
			}

		};


	}
	//camparing with the faq question for userr input
	comapareWithQuestions(e) {
		this.relatedQuestions = [];
		// var faqsList=JSON.parse(localStorage.getItem('faqsList'));
		var faqsList = this.faqs;
		var searchContent = e.target.value;
		var searchField = "question";
		var id = "id";
		var searchVal = searchContent.toLowerCase();
		var tagetSearch = [];
		var BreakException = {};
		try {
			faqsList.forEach(element => {
				var question = element[searchField].toLowerCase();
				if (question.includes(searchVal) || searchVal.includes(question)) {
					this.relatedQuestions.push(element);
					tagetSearch.push(element[id]);
					if (tagetSearch.length >= 3) throw BreakException;
				}

			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}


		if (tagetSearch.length == 1) {
			//  this.submitQuestion(tagetSearch[0]);        
		}
	}

	//getting answer for selected question
	submitQuestion(qtnId: number) {
		this.relatedQuestions = [];
		// var faqsList=JSON.parse(localStorage.getItem('faqsList'));
		var faqsList = this.faqs;
		$("#inputText").val("");
		var answer = "answer";
		var id = "id";
		var question = "question";
		var BreakException = {};
		try {
			faqsList.forEach(element => {
				if (element[id] == qtnId) {
					this.chatHistoryMessages.push({
						"messageFrom": "user",
						"chatMessage": element[question]
					});
					this.chatHistoryMessages.push({
						"messageFrom": "admin",
						"chatMessage": element[answer]
          });
					this.readOutLoud(element[answer]);
					throw BreakException;
				}
			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}
		$('.chatList').animate({
			scrollTop: $(document).height()
		}, "slow");
	}

	//submitting text box directly
	submitUserInput(inputTextElement) {

		this.relatedQuestions = [];
		var stringSimilarity = require('string-similarity');
		var faqsList = this.faqs;
		var searchField = "question";
		var answer = "answer";
		var input = "";
		if (inputTextElement.keyCode == 13) {
			input = $("#inputText").val().toLowerCase();
			$("#inputText").val("");
		} else {
			input = inputTextElement.value.toLowerCase();
			inputTextElement.value = '';
		}

		var isFount = false;
		var BreakException = {};
		try {
			faqsList.forEach(element => {
				var question = element[searchField].toLowerCase();
				var percetageMatch = stringSimilarity.compareTwoStrings(question, input);
				if (percetageMatch >= 0.8) {
					isFount = true;
					this.chatHistoryMessages.push({
						"messageFrom": "user",
						"chatMessage": element[searchField]
					});
					this.chatHistoryMessages.push({
						"messageFrom": "admin",
						"chatMessage": element[answer]
          });
       
					this.readOutLoud(element[answer]);
					throw BreakException;
				}
			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}
		if (isFount == false) {
      var chatMessage = "Sorry, could not understand that...";
      this.chatHistoryMessages.push({
        "messageFrom": "user",
        "chatMessage":input
      });
			this.chatHistoryMessages.push({
				"messageFrom": "admin",
				"chatMessage": chatMessage
			});
			this.readOutLoud(chatMessage);
		}
		$('.chatList').animate({
			scrollTop: $(document).height()
		}, "slow");
	}

	submitUserInputFromVoice(inputTextElement) {
   
    this.relatedQuestions = [];
		var stringSimilarity = require('string-similarity');
		var faqsList = this.faqs;
		var searchField = "question";
		var answer = "answer";
  		var input = $("#inputText").val().toLowerCase();
   	$("#inputText").val("");


		var isFount = false;
		var BreakException = {};
		try {
			faqsList.forEach(element => {
				var question = element[searchField].toLowerCase();
				var percetageMatch = stringSimilarity.compareTwoStrings(question, input);
				if (percetageMatch >= 0.8) {
					isFount = true;
					this.chatHistoryMessages.push({
						"messageFrom": "user",
						"chatMessage": element[searchField]
					});
					this.chatHistoryMessages.push({
						"messageFrom": "admin",
						"chatMessage": element[answer]
					});
					this.readOutLoud(element[answer]);
					throw BreakException;
				}
			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}
		if (isFount == false) {
      var chatMessage = "Sorry, could not understand that...";
      this.chatHistoryMessages.push({
        "messageFrom": "user",
        "chatMessage":input
      });
			this.chatHistoryMessages.push({
				"messageFrom": "admin",
				"chatMessage": chatMessage
			});
			this.readOutLoud(chatMessage);
    }
  
		$('.chatList').animate({
			scrollTop: $(document).height()
		}, "slow");
	}

	// showPromptForEmail(event) {
  //   var userEmail = window.prompt("Enter your email to send the chat history");
    
	// 	if (userEmail != null && userEmail != "") {
	// 		this.sendChatHistoryToUserMail(userEmail);
	// 	} else {
	// 		$(".chatWindow").addClass("d-none");
	// 		this.chatHistoryMessages = [];
	// 	}
  // }
  closeChat(event){
		event.value='';
    $("#closeMailPopUp").click();
		$(".chatWindow").addClass("d-none");
		this.chatHistoryMessages = [];
  }
  showModelForEmail(){
    if(this.chatHistoryMessages.length!=0){
		//	 $("#emailPopUp").modal('show');
		}else{
      return false;
    }
  }
  
 
	sendChatHistoryToUserMail(event) {
    var userEmail=event.value;
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!filter.test(userEmail)) {
      alert("Enter Correct Email Address"); 
			return false;
    }
    event.value='';
    $("#closeMailPopUp").click();
		$(".chatWindow").addClass("d-none");
		var arrayMesa = this.chatHistoryMessages;
		this.chatHistoryMessages = [];
		var chatHistory = "";
		var serch = "messageFrom";
		var mes = "chatMessage";
		arrayMesa.forEach(element => {
			var person = element[serch];
			if (person == 'admin') {
				chatHistory += "<li class='adminMsg'><label>MShri</label><div class='adMsg'>" + element[mes] + "</div></li>";
			} else {
				chatHistory += "<li class='userMsg'><label>User</label><div class='usMsg'>" + element[mes] + "</div></li>";
			}

		});
		var data = {
			"email": userEmail,
			"chatHistory": chatHistory
		}
		this.apiservice.sendChatHistoryToUser(data).subscribe(
			(data: any) => {
				console.log(data);
			},
			error => error
		)

	}

	/*-----------------------------
	      Speech Synthesis 
	------------------------------*/

	readOutLoud(message) {
    var windowObj=window;
    //windowObj.speechSynthesis.cancel();
		var speech = new SpeechSynthesisUtterance();
		// Set the text and voice attributes.
		speech.text = message;
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;
    speech.lang = 'en-IN';
    windowObj.speechSynthesis.speak(speech);

	}
	//Start voice recognition
	startRecordingVoice() {
    var curClass=this;
    this.recognition.start();
    setTimeout(function() {       
      curClass.stopRecordingVoice();
    }, 5000);
  

  }
  stopRecordingVoice(){
    this.recognition.stop();
    var text=$("#inputText") .val();
    if(text!=undefined && text!=""){
      this.submitUserInputFromVoice(text);
    }

  
  }


}