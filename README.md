# resolvify
Browserify transform using nodeJS module resolution algorithm

## How to use
```
npm install resolvify --save-dev
```
Add a **resolvify** entry in your package.json with the folders name :
```javascript
//package.json
...
resolvify: ["shared", "common"]
...
```
```
browserify -t resolvify
```

Then all the folders in your project called "shared" or "common" will be resolved like "node_modules".