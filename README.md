# JBUM 

## Project Structure

Check out [this article](https://medium.com/@spencer_carli/organizing-a-react-native-project-9514dfadaa0#.361gf1awu) for an overview of the `jbumapp` directory.

## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone this repo
- From the `jbumapp` directory run `yarn`

## Running on iOS Simulator

_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```jbummeteor``` directory, type ```meteor```

- From the `jbumapp` directory run `react-native run-ios`

## Running on iOS Device

- Be sure your Meteor app is running: In the ```jbummeteor``` directory, type ```meteor```
- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `jbumapp/app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).

## Running on Android Simulator

- Be sure your Meteor app is running: In the ```jbummeteor``` directory, type ```meteor```
- Get the IP address of your machine
- In `jbumapp/app/config/settings.js` change `localhost` to your machine's IP address
- Make sure you have an emulator configured and running.
- From the `jbumapp` directory run `react-native run-android`

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

## Running on Android Device

- Be sure your Meteor app is running: In the ```jbummeteor``` directory, type ```meteor```
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `jbumapp/app/config/settings.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).


