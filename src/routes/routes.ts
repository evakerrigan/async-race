class Router {
  routes = [/garage/, /winners/];

  mode = 'history';

  root = '/';

  valuePath = (path: string) => path.toString();

  navigate = (path = '') => {
    window.history.pushState(null, this.root + this.valuePath(path));
  }

}

export default Router;
