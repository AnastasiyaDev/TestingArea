'use strict'

require('./index.less');
require('jquery-validation');
require('jquery-validation/dist/localization/messages_ru');

$('#form').html(require('./index.html'));
		
		$("#formContact").validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				company: {
					required: true
				},
				phone: {
					required: true,
					// phoneUS: true,
					digits: true
				},
				massage: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				email: "Please enter a valid email address",
				company: "Please enter your company",
				phone: "Please enter your phone",
				massage: "Please enter a messages"
			}
		});