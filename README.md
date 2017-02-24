# Rkb1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

**************************************************************************
**update node for angular cli compatibility
    npm install 6
    nvm alias default v6.9.5
    
**update npm for angular cli compatibility
    npm install npm@latest -g

**install angular cli
    npm install -g @angular/cli
    ng new myApp
    cd myApp
    
**update npm start script in package.json to configure for c9
    package.json
        >   {...
                "scripts": {
                            "start": "ng serve" -> ("ng serve --host 0.0.0.0 -p $PORT"),
                            ...
                            }
                }
                
**serve app
    npm start


**bootstrap 4 CDN
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

**angular material 2
    *Install Angular Material components
        npm install --save @angular/material
    
    *Import the Angular Material NgModule
        src/app/app.module.ts
        
        import { MaterialModule } from '@angular/material';
        // other imports 
        @NgModule({
          imports: [MaterialModule],
          ...
        })
        export class PizzaPartyAppModule { }

    *Include the core and theme styles:
    
    This is required to apply all of the core and theme styles to your application. You can either use a pre-built theme, or define your own custom theme.

    See the theming guide for instructions.

    *Additional setup for gestures
    
        Some components (md-slide-toggle, md-slider, mdTooltip) rely on HammerJS for gestures. In order to get the full feature-set of these components, HammerJS must be loaded into the application.
        
        You can add HammerJS to your application via npm, a CDN (such as the Google CDN), or served directly from your app.
    
    *If you want to include HammerJS from npm, you can install it:

        npm install --save hammerjs
    
    *After installing, import HammerJS on your app's module. src/app/app.module.ts
    
        import 'hammerjs';

    *Configuring SystemJS

        If your project is using SystemJS for module loading, you will need to add @angular/material to the SystemJS configuration:

            System.config({
              // existing configuration options
              map: {
                ...,
                '@angular/material': 'npm:@angular/material/bundles/material.umd.js'
              }
            });
            
    *[Optional] Using Material Design icons with md-icon:

        If you want to use Material Design icons in addition to Angular Material components, load the Material Design font in your index.html.
        md-icon supports any font icons or svg icons, so this is only one option for an icon source.
        src/index.html
        
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

**wordpress

**gitHub
git init
git add .
git commit -m "initial commit"
git remote add origin "https://github.com/jrcaranddang/(repo name).git"
git push -u origin master