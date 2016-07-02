import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularSanitize from 'angular-sanitize';
import angularAnimate from 'angular-animate';

import { name as App } from '../imports/ui/components/app/app';

angular.module('angular-meteor-chat', [
  angularMeteor,
  angularAnimate,
  angularSanitize,
  App
]);
