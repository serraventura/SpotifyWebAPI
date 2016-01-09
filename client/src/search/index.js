import service from './services/search';
import search from './directives/search';

module.exports = function(app){

    service(app);
    search(app);

}
