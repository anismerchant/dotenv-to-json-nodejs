
# Convert .env to JSON using Node.js

## Installation

Before installing, download and install Node.js.

For brand new projects, be sure to create a package.json first with the `npm init -y`

Next, run the following command in your terminal:

```
npm i dotenv-to-json-nodejs
```

## Quick Setup

Create an 'index.js' file and paste the starter code as shown below.

```
const { dotenvTojson } = require('dotenv-to-json-nodejs');

dotenvTojson();

```

## Example of .env file

```
API_KEY=MadeUPapikEY
API_SECRET=madeUPaPisEcRet
```

## Commands

Before running the following command, please **place in this directory a '.env' file** that you would like to convert into JSON.

Run the following command from the root directory:

```
node index.js
```

## Caveats

Once you execute the command, a **envVariables.json** file with your keys and values will be generated.  

**Note: Please be sure to add your generated envVariables.json file in your .gitignore file.** 

## Illustration

The resulting **envVariables.json** file will contain .env keys and values in JSON format: 

```
{
  "API_KEY": "MadeUPapikEY",
  "API_SECRET": "madeUPaPisEcRet"
}
```