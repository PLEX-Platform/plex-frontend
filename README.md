# PLEX-frontend #
This is the frontend repository for the PLEX project. A tool for teachers to appoint students to their preferred projects. The goal of this application is to enhance and amplify the efficiency of this process for the teacher as well as the student. 

# Table of Contents #
- Installation
  - Node.JS / NPM
  - Angular
- Usage
  - Teacher perspective
  - Student perspective
- Contributing
- Credits
- License

# Installation # 
These installations follow the most conventional ways to install the tools supplied by the respective organisations. The ability to install them through package managers like __brew__ _for macOS_ or __WinGet__ _for windows_ do exist but for simplicity's sake, we won't discuss them in this guide. 

## Node.JS/npm ###
<details>
<summary>
Windows 
</summary>
<p>
1.In order to get started with the frontend project we need some tools. One of them is Node.js/NPM. Head on over to this website: https://nodejs.org/en/download/ The LTS option will be highlighted as of writing this guide. Choose the <i>"Windows Installer"</i> option and a download will be prompted. The downloaded file will also include the NPM Package manager.

2.Open the downloaded file and your system will ask you if you want to run the software. Click _"Run"_.  The installation wizard will start. 
In order to proceed, click _"Next"_ until the option to click _"Install"_ is being presented. Just click install and the installation will proceed. When it is 
done, click "Finish" to close the installation wizard.a
  
3.Check if Node.js / NPM is installed by opening a command prompt on the system and running these seperate commands: 
 </br> `node -v`</br> `npm -v`</br> If both are installed correctly they will output their respective version.
</p>
</details>

<details>
<summary> 
macOS
</summary>
<p>
1.Open the terminal by pressing: <kbd> ⌘ + Space</kbd> and enter: <i>"Terminal"</i> in the "Spotlight Search"

2.Enter `node -v` and press <kbd> Enter </kbd> if you have already installed node, it will output the version. If you haven't the terminal will output something like: `-bash: node: command not found`
* In case it is already installed, update the NPM to the latest version by typing in: `sudo npm i -g npm`. This way you'll have installed the latest node version and you can proceed to the [__Angular installation__](#Angular)

3.Go to https://nodejs.org/en/download/ and choose the <i> "macOS Installer" </i>. A download will be prompted. Just like the Windows version, the NPM Package manager will be included.

4.Locate the file in Finder and double click on it.
  
5.Go through the entire installation process.
  
6.Open the terminal by pressing: <kbd> ⌘ + Space</kbd> and enter: <i>"Terminal"</i> in the "Spotlight Search"
  
7.Enter `node -v` and press <kbd> Enter </kbd> If everything went the way it is supposed to, your terminal should now output the version of NodeJS you have installed
</p> 
</details>  

<details>
<summary>
Linux (Ubuntu)
</summary>
<p>
1.Open the terminal by pressing: <kbd> CTRL + ALT + T </kbd>
  
2.Type this into the <i>"Terminal"</i>: `sudo apt install nodejs`. Enter your password when being prompted to do so.

3.After the installation is finished, enter this into the <i>"Terminal"</i>: `node -v`. If everything went well, the <i>"Terminal"</i> will output the version of NodeJS
  
4.Type this into the <i>"Terminal"</i>: `sudo apt install npm`. Enter your password when being prompted to do so. 
  
5.After the installation is finished, enter this into the <i>"Terminal"</i>: `npm -v`. If everything went well, the <i>"Terminal"</i> will output the version of NPM.
</p>
</details>

## Angular  <a name="Angular"></a> ##
 
We're making use of the Angular Framework so we need to install it by using NPM, which we just installed. 

1.Open the <i>"Terminal"/Command Prompt/PowerShell</i> on your system (as an administrator)

2.Run this <i>command</i>:`sudo npm install -g @angular/cli` for Linux/macOS and `npm install -g @angular/cli`

3.To check if your installation finished properly, enter this <i>command</i>: `ng --version`. This way your <i>"Terminal"</i> will give you information about the installed Angular version. 



