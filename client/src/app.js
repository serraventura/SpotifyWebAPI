import angular from 'angular';
import _ from 'lodash';
import moment from 'expose?moment!moment';

import docReady from "./utils/docReady";

import settings from './app.settings';
import params from './params';
import musicexplorer from './musicexplorer';
import songplayer from './songplayer';
import filters from './filters';

const app = angular.module('app', []);

settings(app);
params(app);
musicexplorer(app);
songplayer(app);
filters(app);

//bootstrap app
docReady(() => {
    angular.bootstrap(document, [app.name]);
});
