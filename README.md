https://cdn.jsdelivr.net/gh/chaowenGUO/cgnpm/index.js<br>

npm login<br>
Username: chaowen-guo<br>
Password: <br>
Email: (this IS public) chaowen.guo1@gmail.com<br>

mkdir cgnpm<br>
cd cgnpm<br>
npm init<br>
package name: (cgnpm)<br> 
version: (1.0.0)<br>
description:<br>
entry point: (index.js)<br> 
test command:<br> 
git repository: https://github.com/chaowenGUO/cgnpm<br>
keywords:<br>
author: chaowen guo<br>
license: (ISC)<br>
About to write to /home/ken/cgnpm/package.json:

{
  "name": "cgnpm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/chaowenGUO/cgnpm.git"
  },
  "author": "chaowen guo",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/chaowenGUO/cgnpm/issues"
  },
  "homepage": "https://github.com/chaowenGUO/cgnpm#readme"
}


Is this OK? (yes) 
ken@ken-Alienware-17-R4:~/cgnpm$ ls
package.json
ken@ken-Alienware-17-R4:~/cgnpm$ vim package.json
ken@ken-Alienware-17-R4:~/cgnpm$ vim index.js
ken@ken-Alienware-17-R4:~/cgnpm$ ls
index.js  package.json
ken@ken-Alienware-17-R4:~/cgnpm$ vim index.js
ken@ken-Alienware-17-R4:~/cgnpm$ npm publish
npm WARN npm npm does not support Node.js v10.15.2
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/
+ cgnpm@1.0.0
ken@ken-Alienware-17-R4:~/cgnpm$ 
