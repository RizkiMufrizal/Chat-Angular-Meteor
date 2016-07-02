import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { name as App } from '../imports/ui/components/app/app';

angular.module('chat', [
  angularMeteor,
  App
]);
