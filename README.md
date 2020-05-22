# react-parking


## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).


## Table of Contents

* [Project Overview](#project-overview)
* [Updating to New Releases](#updating-to-new-releases)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run eject](#npm-run-eject)
* [Writing and Running Tests](#writing-and-running-tests)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)

## Project Overview

The name of this small application is Spot and its main purpose is to help users park at their university parking garages with less stress through the help of other users who would flag certain garages depending on their statuses. Examples of certain predicaments include,

- Construction going on near a parking garage, thereby increasing traffic and congestion which is not ideal when needed to get to a class on time.

- University parking police checking decals. Universities are not always transparent about renewing decals annually so having this in mind while finding parking can provoke stress on students and causes tardiness or absence to important academic events. Parking in teacher spots would yield a parking ticket but Spot will help keep tabs on whether you should return back to your vehicle if need be.

I used the [Cloud Firestore](https://firebase.google.com/docs/firestore) backend offered by Google to support calls to the database and user authentication. I also used the [React Native Framework](https://reactnative.dev/) to create a simple, friendly UI on the frontend. Additionally, I used the Expo framework to support both iOS and Android compatibility.

### User Authentication:



[
![ezgif com-gif-maker](https://user-images.githubusercontent.com/47718018/82693373-6f203880-9c2f-11ea-8295-e9132fc9317b.gif)
](url).

### Signing Out of App:



[
![signingOut](https://user-images.githubusercontent.com/47718018/82693544-bc040f00-9c2f-11ea-8f32-85be0f14eea4.gif)
](url)



### Real Time Status of Garages:




[
![tourOfGarages](https://user-images.githubusercontent.com/47718018/82693475-9bd45000-9c2f-11ea-88d0-b3cffee76287.gif)
](url)



### Marking Where You Parked




[
![markingSpot](https://user-images.githubusercontent.com/47718018/82693614-d50cc000-9c2f-11ea-8de2-03adfeb247bb.gif)
](url)



### Flagging a Garage




[
![alertingGarage](https://user-images.githubusercontent.com/47718018/82693663-ec4bad80-9c2f-11ea-8c85-67412c8dcb04.gif)
](url)



### Warning User When App is back in the Foreground




[
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/47718018/82693798-27e67780-9c30-11ea-8407-be5db10980d5.gif)
](url)

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Google Maps API Key

You can edit `app.json` to include your Google Maps API key under expo.android.config.googleMaps.apiKey.
Similarly, you can add the API key to expo.config.googleMaps.ApiKey for iOS development.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.


