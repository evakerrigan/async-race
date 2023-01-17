import './assets/styles/normalize.scss';
import './assets/styles/reset.scss';
import './assets/styles/global.scss';

import App from './shared/libs/App';
import garageService from './shared/services/garageService';

garageService.setCars(1);

const app = new App();

app.render();
