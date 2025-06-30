// ==============================|| THEME CONSTANT ||============================== //

export const APP_DEFAULT_PATH = '/dashboard/default';
export const DRAWER_WIDTH = 260;

export let MenuOrientation;

(function (MenuOrientation) {
  MenuOrientation['VERTICAL'] = 'vertical';
  MenuOrientation['TAB'] = 'tab';
  MenuOrientation['LAYOUT2'] = 'layout 2';
  MenuOrientation['LAYOUT3'] = 'layout 3';
})(MenuOrientation || (MenuOrientation = {}));

export let Gender;

(function (Gender) {
  Gender['MALE'] = 'Male';
  Gender['FEMALE'] = 'Female';
})(Gender || (Gender = {}));

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
