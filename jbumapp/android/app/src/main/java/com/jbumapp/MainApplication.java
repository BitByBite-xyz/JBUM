package com.jbumapp;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactApplication;
import com.brentvatne.react.ReactVideoPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.microsoft.codepush.react.CodePush;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.cmcewen.blurview.BlurViewPackage;
import com.beefe.picker.PickerViewPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.fabric.sdk.android.Fabric;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
    
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactVideoPackage(),
            new RNFirebasePackage(),
            new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new ReactNativePushNotificationPackage(),
            new RNDeviceInfo(),
            new BlurViewPackage(),
            new PickerViewPackage(),
            new RCTCameraPackage(),
            new VectorIconsPackage(),
            new LinearGradientPackage(),
            new RNSpinkitPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }
}
