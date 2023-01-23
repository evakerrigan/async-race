class Router {
  routes = [/garage/, /winners/];
  mode = 'history';
  root = '/';

  valuePath = (path: string) => path.toString();

  navigate = (path = '') => {
    window.history.pushState(null, this.root + this.valuePath(path));
  };
}

export default Router;

// navigate = (path = '') => {
//   // if (this.mode === 'history') {
//     window.history.pushState(null, this.root + this.valuePath(path));
//   // } else {
//   //   window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//   // }
//   return this;
// };

// constructor() {
//   this.mode = 'history';
//  if (options.mode) this.mode = options.mode;
//   if (options.root) this.root = options.root;
// }
// constructor(options) {
//   this.mode = window.history.pushState ? 'history' : 'hash';
//   if (options.mode) this.mode = options.mode;
//   if (options.root) this.root = options.root;
//   this.listen();
// }

// flush = () => {
//   this.routes = [];
//   return this;
// };

// clearSlashes = (path) => path.toString().replace(/\/$/, '').replace(/^\//, '');
// valuePath = (path: string) => path.toString();

// getFragment = () => {
//   let fragment = '';
//   if (this.mode === 'history') {
//     fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//     fragment = fragment.replace(/\?(.*)$/, '');
//     fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//   } else {
//     const match = window.location.href.match(/#(.*)$/);
//     fragment = match ? match[1] : '';
//   }
//   return this.clearSlashes(fragment);
// };

// navigate = (path = '') => {
//   if (this.mode === 'history') {
//     window.history.pushState(null, this.root + this.valuePath(path));
//   } else {
//     window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//   }
//   return this;
// };

// listen = () => {
//   clearInterval(this.interval);
//   this.interval = setInterval(this.interval, 50);
// };

// interval = () => {
//   if (this.current === this.getFragment()) return;
//   this.current = this.getFragment();

//   this.routes.some((route) => {
//     const match = this.current.match(route.path);
//     if (match) {
//       match.shift();
//       route.cb.apply({}, match);
//       return match;
//     }
//     return false;
//   });
// };
// }

// export default Router;
