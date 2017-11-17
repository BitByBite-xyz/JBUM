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

### Installing required software (complete this in order)

- [Homebrew](https://brew.sh)

- Yarn: run `brew install yarn` in terminal

- React Native: run  `npm install -g create-react-native-app`

- CocoaPods: run `sudo gem install cocoapods`

- [Xcode](https://developer.apple.com/xcode/) install from mac app store and run (if it asks you to install command line tools select yes)

### Getting it up and running 


- Download the source code for this app by pressing the green 'clone or download' button in the top right of this page

- Navigate to the `jbumapp` directory by opening a terminal window and typing `cd ` (include the space) and dragging the `jbumapp` folder from the folder you just downloaded (will look like this `JBUM-822dd6d0db1aa7ac3f7e1e0c726cf9220bd5ecd7-2)`.

- type `yarn; cd ios; pod install; cd ..` and press enter

- Run `react-native run-ios`

- Wait for the simulator to launch with the app (might take 4-5 minutes)

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


