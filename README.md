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