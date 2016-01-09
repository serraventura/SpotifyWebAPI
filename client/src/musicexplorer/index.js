import controller from './controllers/me.controller';
import service from './services/me.service';
import musicexplorer from './directives/me.directive';

module.exports = function(app){

    controller(app);
    service(app);
    musicexplorer(app);

}
