
GENERAL SETUP:
1. Install Homebrew: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
2. Update Homebrew: brew update
3. Install Node: brew install node
4. Update Node: brew upgrade node
5. Install the Expo CLI: npm install -g expo-cli
6. Go into the directory: cd DeepLift-App
7. Install Node modules: npm install
8. Start the app: expo start

Also, install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the Camera app.

AMPLIFY SETUP:
1. Install Amplify CLI: npm install -g @aws-amplify/cli
2. Configure Amplify: amplify configure
3. Sign in with your Amaon IAM user account (accessKeyId & secretAccessKey)
4. Make sure you do 'npm install' to get all libraries
5. Start the app: expo start, which should direct you to the log in and sign up page

TROUBLESHOOTING:
1. Unable to resolve “./SafeAreaContext” -- follow this link: https://stackoverflow.com/questions/62205597/unable-to-resolve-safeareacontext

HELPFUL LINKS:
1. Amplify CSS: https://github.com/aws-amplify/amplify-js/blob/main/packages/aws-amplify-react/src/Amplify-UI/Amplify-UI-Theme-Sample.tsx