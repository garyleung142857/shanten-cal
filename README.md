# Mahjong Efficiency Calculator
21/22 2nd Semester COMP7506 Project - Group 12

![Icon](assets/icon.png)

## Prerequisite
Please have the following installed:
- [Node.js and npm](https://nodejs.org/en/download/)
- [expo-cli](https://docs.expo.dev/workflow/expo-cli/)


## Install Packages
- Install packages with `npm install`.

---

## Try the App with Physical Devices

- Run `expo start` to start the bundler.
- Open the project in a React runtime to try the app:
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - iOS: [Client iOS](https://apps.apple.com/app/apple-store/id982107779)
- Scan the QR code in the terminal with Expo Go App (Android) or default Apple Camera App (iOS).

## Try the App with Android Studio Emulator

- Please follow the instructions provided by [Expo](https://docs.expo.dev/workflow/android-studio-emulator/). Basically you need to 
  - Set up Android Studio's tools
  - Add an environment variable pointing to the Android SDK location
  - Set up a virtual device
- Run `expo start` to start the bundler. Press `a` to open with Android Studio Emulator.

## Try the App with iOS Simulator
- Please follow the instructions provided by [Expo](https://docs.expo.dev/workflow/ios-simulator/). Basically you need to
  - Install Xcode
  - Install Xcode Command Line Tools
- Run `expo start` to start the bundler. Press `i` to open with iOS Simulator.

---

## Important Folders and Files
To help users (graders) understand the project structure, here is a list of important folders / files and their purpose.

- [App.js](App.js) - Entry point of the application. Define the navigation of pages. Also define context variables for the whole application, like language, colors, and rulesets.
- [assets/](assets/) - stores the splash screen and icon image.
- [app.json](app.json) - configuration for Expo. Configuration that does not belong to the code.
- [src/assets/tiles/Regular/](src/assets/tiles/Regular/) - Tile images. Uses [FluffyStuff/riichi-mahjong-tiles](https://github.com/FluffyStuff/riichi-mahjong-tiles), which are licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
- [src/components/pages/](src/components/pages/) - stores jsx files. These files define the 4 main pages of the application: Input page, Result page, Setting page, and About page.
- [src/components/elements/](src/components/elements/) - stores jsx files that are smaller components that exist in a page, like the custom keyboard, and the hand.
- [src/constants/](src/constants/) - stores constants
- [src/i18n/](src/i18n/) - stores files related to translation and language
- [src/lib/cal/](src/lib/cal/) - stores business logic, that calculates the statistics based on the ruleset and input hand, and sorts the results. The functions are written by myself, and the code has been wrapped in a simple [github page](https://garyleung142857.github.io/cal-shanten-beta/) for my friends to test. 
- [src/lib/functions/](src/lib/functions/) - stores helper functions, like how the result color palette should behave, and how to sort users’ input.
- [src/styles/](src/styles/) - stores color-related variables, including light theme and dark theme.

---

## Acknowledgements
Tile images uses [FluffyStuff/riichi-mahjong-tiles](https://github.com/FluffyStuff/riichi-mahjong-tiles), which are licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).