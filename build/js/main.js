$(document).ready(function(){$(".main-header__burger").click(function(n){$(".main-header__burger,.main-header__nav").toggleClass("active"),$("body").toggleClass("lock")})}),$(document).ready(function(){$(".main-info__sent-btn--click").click(function(n){$(".main-info__sent-btn--click,.fail-block,.send-block").toggleClass("active")})}),$(document).ready(function(){$(".fail-block,.send-block").click(function(n){$(".fail-block,.send-block").toggleClass("off"),$("body").toggleClass("lock")})});