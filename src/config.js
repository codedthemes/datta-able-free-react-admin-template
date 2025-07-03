// ==============================|| THEME CONSTANT ||============================== //

export const APP_DEFAULT_PATH = '/dashboard/default';
export const DRAWER_WIDTH = 260;

export let MenuOrientation;

(function (MenuOrientation) {
  MenuOrientation['VERTICAL'] = 'vertical';
})(MenuOrientation || (MenuOrientation = {}));

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  menuOrientation: MenuOrientation.VERTICAL,
  container: false,
  presetColor: 'default',
  caption: true,
  sidebarTheme: false,
  customColor: 'preset-1',
  headerColor: '',
  navbarColor: '',
  logoColor: '',
  navbarCaptionColor: '',
  navbarImg: '',
  menuIcon: 'preset-1',
  menuLinkIcon: 'preset-1'
};

export default config;
