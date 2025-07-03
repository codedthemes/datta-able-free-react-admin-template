import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';

// project-imports
import useLocalStorage from 'hooks/useLocalStorage';
import config from 'config';

// initial state
const initialState = {
  ...config,
  onChangeLocalization: () => {},
  onChangeMenuOrientation: () => {},
  onChangeDirection: () => {},
  onChangeContainer: () => {},
  onChangeCaption: () => {},
  onChangeSideTheme: () => {},
  onChangeThemePreset: () => {},
  onChangeMenuIcon: () => {},
  onReset: () => {}
};

const ConfigContext = createContext(initialState);

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('datta-able-react-ts-config', initialState);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1025 && config.menuOrientation !== 'vertical') {
      setConfig((prevConfig) => ({
        ...prevConfig,
        menuOrientation: 'vertical'
      }));
    }
  });

  const onReset = () => {
    setConfig(initialState);
  };

  const onChangeLocalization = (lang) => {
    setConfig({
      ...config,
      i18n: lang
    });
  };

  const onChangeMenuOrientation = (layout) => {
    if (window.innerWidth >= 1025) {
      setConfig({
        ...config,
        menuOrientation: layout
      });
    }
  };

  const onChangeCaption = (caption) => {
    setConfig({
      ...config,
      caption: caption
    });
  };

  const onChangeSideTheme = (sidebarTheme) => {
    setConfig({
      ...config,
      sidebarTheme: sidebarTheme
    });
  };

  const onChangeDirection = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeContainer = (container) => {
    setConfig({
      ...config,
      container: container
    });
  };

  const onChangeThemePreset = (key, value) => {
    setConfig({
      ...config,
      [key]: value
    });
  };

  const onChangeMenuIcon = (key, value) => {
    setConfig({
      ...config,
      [key]: value
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeLocalization,
        onChangeMenuOrientation,
        onChangeDirection,
        onChangeContainer,
        onChangeCaption,
        onChangeSideTheme,
        onChangeThemePreset,
        onChangeMenuIcon,
        onReset
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.node };
