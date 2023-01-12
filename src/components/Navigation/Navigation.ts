import './Navigation.scss';

class NavigationComponent {
  render() {
    const body: HTMLBodyElement | null = document.querySelector('body');
    const html = `
    <div class="navigation">
        ----------------------- this navigation
      <div class="page">
        <button class="button">TO GARAGE</button>
        <button class="button">TO WINNERS</button>
      </div>
    </div>
    `;
    if (body !== null) {
      body.innerHTML = html;
    }
  }
}
const Navigation = new NavigationComponent();

export default Navigation;
