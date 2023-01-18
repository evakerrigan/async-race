import './assets/styles/normalize.scss';
import './assets/styles/reset.scss';
import './assets/styles/global.scss';

import App from './core/libs/App';
import garageService from './core/services/garageService';

garageService.viewCars(1);

const app = new App();

app.render();
