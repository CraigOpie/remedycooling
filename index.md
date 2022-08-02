#To test this deployment
##Linux and macOS Installation
###Install Meteor
Open a terminal and run the following command:
```bash
curl https://install.meteor.com/ | sh
```
###Clone Repo
If not done already, clone the repo to your local machine and change into the app directory
###Install node
run the following command
```bash
meteor npm install
```
###Launch the application
run the following command
```bash
meteor npm run start
```
##Windows Installation
###Turn off any real-time antivirus protection
###Install Chocolatey
If you already have Chocolatey, ensure it is at version 0.10.11 or newer.
Open a PowerShell and run the following command
```bash
PS D:\> choco upgrade chocolatey
```
Validate installation with the following command
```bash
PS D:\> choco --version
0.10.11
```
###Install Meteor using Chocolatey
Open a PowerShell and run the following command
```bash
PS D:\> choco install meteor
```
Validate installation with the following command
```bash
PS D:\> meteor --version
Meteor 2.20
```
###Clone Repo
If not done already, clone the repo to your local machine and change into the app directory
###Install node
run the following command
```bash
meteor npm install
```
###Launch the application
run the following command
```bash
meteor npm run start
```
