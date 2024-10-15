# Study Body

A cross-platform (IOS and Android) mobile app that enables students to find ones with common subjects and interests

## Getting Started

### Pre-requisites (Tech Stack involved)

* Command Line Tools
* [GitBash](https://git-scm.com/downloads) (Windows only)
* [Terminal](Mac laptop)
* MongoDB
  * You can download [MongoDB Community](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install-mdb-community-macos) -- MacOS
  (https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) --Windowss
* Database Management System (DBMS) GUI
  * [MongoDB GUI](https://www.mongodb.com/products/tools/compass) MongoDB GUI that you can start/ shutdown the server and check the db.  
* [React.native](https://reactnative.dev/docs/environment-setup)  
* [Node.js](https://nodejs.org/en/) the app server
* [NPM](https://www.npmjs.com/)

* IDE required: VS Code (Development), Android Studio (Build, test, simulator), Apple XCode (Build, test, simulator)

### Environment setup
* [React Native](https://reactnative.dev/docs/set-up-your-environment?platform=android)
* [Expo](https://docs.expo.dev/get-started/next-steps/)
* [Expo CLI](https://docs.expo.dev/more/expo-cli/)

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

7. Now you’re all set to start development. Happy coding!

### Issues with tailwind version
1. if you receive the Error: "Use process(css).then(cb) to work with async plugins"
Check the version of installed tailwindcss in package.json
if it is above version 3.3.2, you need to downgrade it to 3.3.2 by doing:

```
npm install tailwindcss@3.3.2 --save-dev
```

2. Other issues with missing module in node_modules

Check the correcponding module or dependencies, make sure they are installed.

```
npm list dependency_name (e.g.,tailwindcss postcss autoprefixer)
```

Otherwise, re-install, or re-install your node module by doing:

```
rm -rf node_modules
rm package-lock.json
npm install
```