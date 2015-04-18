$(function() {
  'use strict';

  var HIDDEN_CLASS = 'hidden';

  var $changePassword = $('.js-change-password'),
      $keepPassword = $('.js-keep-password'),
      $passwordContainer = $('.js-password-container'),
      $passwordInput = $('.js-password');

  $changePassword.click(function() {
    $passwordContainer.removeClass(HIDDEN_CLASS);
    $changePassword.addClass(HIDDEN_CLASS);
    $passwordInput.prop('disabled', false);
  });

  $keepPassword.click(function() {
    $passwordContainer.addClass(HIDDEN_CLASS);
    $changePassword.removeClass(HIDDEN_CLASS);
    $passwordInput.prop('disabled', true);
  })

});