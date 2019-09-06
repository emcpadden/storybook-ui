# StorybookUi

Steps:

1. Create application: 
```
npx -p @angular/cli@8.2 ng new storybook-ui  --create-application=false
```

2. Create a new Angular Library that will hold re-useable components
```
ng g lib my-control-library -p ui
```

3. init StorybookJS for this project
```
npx @storybook/cli init
```

4. Fix Can't resolve all parameters for AppComponent: (?, ?, [object Object]). issue when running storybook (npm run storybook) by adding the following to the tsconfig file:
```
    "emitDecoratorMetadata": true,
```

5. Create story for basic MyComponentLibrary reference the component and module directly 

6. Modify the webpack config in the .storybook folder to get storybook auto refresh when the component library code is modified.  Below is the webpack config:
```
const path = require("path");

module.exports = function({ config }) {
  config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
  };

  return config;
};
```
NOTE: in order for this to work, you will need to be building the component library in watch mode while the storybook is running.  To build in watch mode, do the following:
```
ng build my-control-library --watch
```

7. Move the templates and styles in the component library to their own files.  In order for this to work you will also need to install node-sass.
```
npm install node-sass --save-dev
```
