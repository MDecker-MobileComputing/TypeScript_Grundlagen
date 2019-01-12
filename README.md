# Grundlagen TypeScript

This Git repository contains [some files](beispiele/) to demonstrate the basic usage of 
the programming language [TypeScript](https://www.typescriptlang.org).
TypeScript is a language by Microsoft, which extends JavaScript (i.e. it is a superset of JavaScript) and can be transpiled to JavaScript, so it can be
executed in web browsers.
However, the TypeScript files contained in this repositry are to be executed with [Node.js](https://nodejs.org/en/about/) after transpilation.

<br>

----
# Transpiling to JavaScript

To transpile a TypeScript file to JavaScript you need to have [TypeScript](https://www.npmjs.com/package/typescript) installed globally using NPM:
````
    npm install -g typescript
````

After this a TypeScript file can be transpiled by calling the program `tsc`, e.g.:
````
    tsc Variablen.ts
```` 
If no syntax errors are found this will produce a file named `Variablen.js`.

This file can then be executed as follows:
````
    node Variablen.ts
```` 

<br>

As default the target version of JavaScript is ES3, but you can change this using `--target`, e.g.:
````
    tsc --target es6 Variablen.ts
```` 


<br>

----
# License

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.

