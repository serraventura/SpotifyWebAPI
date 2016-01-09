import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import _ from 'lodash';
import moment from 'expose?moment!moment';

import docReady from "./utils/docReady";

import settings from './app.settings';
import status from './status';
import musicExplorer from './musicexplorer';
import songPlayer from './songplayer';
import search from './search';
import filters from './filters';

const app = angular.module('app', [ngSanitize]);

settings(app);
status(app);
musicExplorer(app);
songPlayer(app);
search(app);
filters(app);

//bootstrap app
docReady(() => {
    angular.bootstrap(document, [app.name]);
});
