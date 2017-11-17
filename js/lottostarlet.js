// create lottoStarlet ##object
const lottoStarlet = {
	// validate control ##function
	validControl: () =>{
			// status control ##variable
			let status;
			// error check control ##function
			const errorCheck = (status) =>{
				if(!status){
					// if have error
					$(".error").fadeIn();
					$("#login-content").addClass("has-error");
				}else{
					// if haven't error
					$(".first-step").animate({opacity: 0}, 200, function(){
						$(this).hide();
						$(".timeout-step").show();
					});
					$("#login-content").removeClass("has-error");
				}
			};
			// mail value control ##function
			const mailControl = () => {
				let emailVal = $(".email").val();
				if(emailVal.indexOf("@") != -1 && emailVal.indexOf(".") != -1 && $(".email").val().split(".")[1].length > 0){
					return true;
				}else{
					return false;
				};
			};
			
			// input val and mail standarts (@, .) control
			if($(".email").val().length > 0 && $(".password").val().length > 0 && mailControl() ){
				errorCheck(true)
			}else{
				errorCheck(false);
			}
	},
	// create valid ##function
	validAction: () =>{
		// button click and validControl function run
		$(".login").click( () =>{
			lottoStarlet.validControl();
		});
		// keyboard press "enter" and validControl function run
		$(document).keypress(function(e) {
		    if(e.which == 13) {
				lottoStarlet.validControl();
		    }
		});
	},
	// create custom tab ##function
	customTab: () => {
		const accordionControl = (number) => {
			$(".tab-content").hide().removeClass("active");
			$(".tab-content").eq(number).show().addClass("active");

			$("#tab-button a.active").removeClass("active");
			$("#tab-button a").eq(number).addClass("active");
		};
		$("#tab-button a").click( function() {
			let index = $(this).index();
			accordionControl(index);
		});
	},
	// create custom place holder ##function
	placeHolder: () =>{
		$("label").click( (el) =>{
			$(el.target).addClass("active");
			$(el.target).prev().focus();
		});
		$("input").on("click focus", (el) => {
			$(el.target).next().addClass("active");
			$(el.target).focusin();
		});
		$("input").blur(function(){
			$(this).val().length == 0 ? $(this).next().removeClass("active") : "";
		});

	},
	init: () => {
		// run required my function
		lottoStarlet.placeHolder();
		lottoStarlet.customTab();
		lottoStarlet.validAction();
	}
}

$(document).ready(() => {
	// My main object initialize
	lottoStarlet.init();
});