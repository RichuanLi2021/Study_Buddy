# Study Body

A cross-platform (IOS and Android) mobile app that enables students to find ones with common subjects and interests

## Getting Started

### Pre-requisites (Tech Stack involved)

* Tools
* [GitBash](https://git-scm.com/downloads) (Windows only)
* [Terminal](Mac laptop)

* IDE required: VS Code (Development), Android Studio (Build, test, simulator), Apple XCode (Build, test, simulator)

### Environment setup
* [React Native](https://reactnative.dev/docs/set-up-your-environment?platform=android)
* [Expo](https://docs.expo.dev/get-started/next-steps/)
* [Expo CLI](https://docs.expo.dev/more/expo-cli/)
* [Node.js](https://nodejs.org/en/) the app server
* [NPM](https://www.npmjs.com/)
```
React native is for both IOS and Android development
Make sure you have node version 18.18 or higher
1. brew install node 
2. brew install watchman

Install java development kit
1. brew install --cask zulu@17
2. brew info --cask zulu@17
```

### Installation

1. Clone the repository

```
git clone https://git.cs.dal.ca/richuan/study_buddy.git (HTTPS)
git clone git@git.cs.dal.ca:richuan/study_buddy.git (SSH)
```

2. Navigate into the repository **root** **directory** and **install project dependencies** by running the custom npm command:

   * **Note:** If the npm command isn't working for you, run the command, `npm install` in **each** of the **root**, ***frontend***, and ***backend*** directories.

```
npm run install:all
```

3. You can check the react native app by typing commands at either **root** or **frontend** level:

```
cd fontend
npm start (this works on expo go but simulator will fail due to network permission)
npx expo start --tunnel (works on both expo go and ios simulator)
```

backend entry point (server.js) is not ready yet, so skip it.

4. Environment variable setup
```
cd frontend

create a copy of .env.sample, and then rename it to .env

Grab the environment from firebase/project setting/General

copy the corresponding value and paste into the empty quotes in .env file.
```


5. ios & android build development
ios and android modules have already been created, so do the following:

* For Android development build.
```
cd frontend/
cd android/

cd ..
npx expo run:android
```

* Find the actual path for android sdk, for example:
[macOs](sdk.dir=/Users/karlli/Library/Android/sdk)
[windows](sdk.dir=C:\\Users\\tyler\\AppData\\Local\\Android\\Sdk)

* Create local.properties and paste the android sdk path.
```
nano local.properties

```

* run and build android
```
cd ..
npx expo run:android
```

* if there are warnings, check if it is about: frontend/android/app/src/main/res/drawable-xhdpi/xxx_image 2.png: Resource and asset merger: ' ' is not a valid file-based resource name character: File-based resource names must contain only lowercase a-z, 0-9, or underscore.

if so, cd android/app/src/main/res/drawable-xhdpi/
delete any images with ending of 2 (e.g., splashscreen_image 2.png)

* if warnings persist, run
```
rm -rf android
npx expo prebuild
cd android
./gradlew clean
cd ..
npx expo run:android
```

For ios
```
cd frontend
npx expo run:ios
```

### Troubleshooting Expo project
```
run "npx expo-doctor"
```
* This command will scan over your expo project for any issues related to the config, dependencies compatiblity, and other environment issues.

```
npx expo start -c
```
* Run this command to clear the cache and restart expo to make sure there is no leftover issues.

### Issues with tailwind version
1. if you receive the Error: "Use process(css).then(cb) to work with async plugins"
Check the version of installed tailwindcss in package.json
if it is above version 3.3.2, you need to downgrade it to 3.3.2
nativewind version has to be v2.0.11:

```
npm install tailwindcss@3.3.2 --save-dev

npm install nativewind@2.0.11
```

* npm list nativewind run this command to check if there are mutiple version installed.

2. Other issues with missing module in node_modules

Check the correcponding module or dependencies, make sure they are installed.

```
npm list dependency_name (e.g.,tailwindcss postcss autoprefixer)
```

Otherwise, re-install, or re-install your node modules and then clear the cache:

```
rm -rf node_modules
rm package-lock.json
npm install

npm cache clean --force
```

### Issues with ATS using secure network connection

* Set NSAllowArbitraryLoads to true.
* Disconnect from the wifi if issue peristes, which could be the cause of firewall of the network such as Dal's network, which has strict firewall setting.


### Issues with dependencies and packages in package.json
* Some issues i have noticed by far are:
1. The versions of dependencies in package.json can be different from the actual installed.

2. Update or downgrade of dependencies can cause the collapse of project because of compatability in terms of different dependencies.

3. Check the actual version of dependencies: npm ls + name of the dependency

4. Disable auto-update by removing "^" and "~" for the dependency that you want to lock.

### Autolinking: investigate installed expo modules
[Autolinking](https://docs.expo.dev/modules/autolinking/)

* (search phase) npx expo-modules-autolinking search
* (resolve phase) npx expo-modules-autolinking resolve --platform <apple|android>
* (verify phase) npx expo-modules-autolinking verify


### Styling debug with devTools

```
npm install -g react-devtools

react-devtools
```

### Library and framework used
* [Gesture_Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/quickstart/)
* [Fontawesome](https://docs.fontawesome.com/web/use-with/react)
* [TextColor](https://tailwindcss.com/docs/text-color) 
* [BackgroundColor](https://tailwindcss.com/docs/background-color)
* [NativeWind](https://www.nativewind.dev/overview/)