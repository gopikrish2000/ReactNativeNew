package com.untitled;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by gopi on 18/04/18.
 */

public class ReactInstanceFactory {

    private static ReactInstanceManager mReactInstanceManager;
    private static ReactInstanceFactory instance;

    private ReactInstanceFactory() {

    }

    public static ReactInstanceFactory getInstance(){
        if (instance == null) {
            instance = new ReactInstanceFactory();
        }
        return instance;
    }

    public ReactInstanceManager getReactInstance() {
        if (mReactInstanceManager == null) {
            mReactInstanceManager = ReactInstanceManager.builder().addPackage(new MainReactPackage()).setApplication(MainApplication.getInstance())
                    .setJSBundleFile("assets://index.android.bundle").setUseDeveloperSupport(BuildConfig.DEBUG).setInitialLifecycleState(LifecycleState.RESUMED).build();
           // mReactInstanceManager.getDevSupportManager().handleReloadJS();
        }
        return mReactInstanceManager;
    }
}
