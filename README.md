# webmethods.io-Instagram-Community-Connector
This is a simple Instagram connector that connects to and queries the [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api). The following actions are supported:
1. Get information about the owner of the access_token.
2. Get the most recent media published by the owner of the access_token.
3. Get a list of recent comments on your media object.


Learn more about the endpoints [here](https://www.instagram.com/developer/endpoints/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).


Also, to use this connector. you must have [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI installed.

### Installing

1. Clone the repo `git clone https://github.com/SoftwareAG/webmethods.io-Instagram-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.



## Running the tests

To test, you can execute `wmio test`.

## Deployment

Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Instagram Connector](https://user-images.githubusercontent.com/16189220/74305408-d8b5be80-4d85-11ea-8095-60e0b08e8a92.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors

[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details



