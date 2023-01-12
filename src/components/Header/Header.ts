import './Header.scss';

class HeaderComponent {
  render() {
    const body: HTMLBodyElement | null = document.querySelector('body');
    const html = `
    <div class="header">
        THIS HEADER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
    `;
    if (body !== null) {
      body.innerHTML = html;
    }
  }
}
const Header = new HeaderComponent();

export default Header;
