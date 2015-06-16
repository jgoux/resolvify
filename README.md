# resolvify
Browserify transform using nodeJS module resolution algorithm

## Install 
```
npm install resolvify --save-dev
```

## Use
Add a **resolvify** entry in your package.json or pass as cli option to transform:
```javascript
//package.json
...
resolvify: ["shared"]
...
```
```
browserify -t [ resolvify common ]
```

Then both the folders "shared" and "common" will be resolved like "node_modules".
