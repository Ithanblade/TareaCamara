import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, 
      launchAutoHide: true,
      backgroundColor: '#000000', 
      androidScaleType: 'CENTER_CROP',
      androidSplashResourceName: 'splash',
      showSpinner: false
    }
  }
};

export default config;