### Demo of module federation (micro frontends)
#### Running instructions:
* navigate to remote
  * `npm install`
  * `npm run start:module-federation`
* navigate to ng-host
  * `npm install`
  * `npm start`
  * Open `localhost:4200`
    * You will see one page with a button which is a React component
    * You can pass props to this button
      * It is defined in `ng-host/src/app/app.component.ts` line 29.

It is a pretty simple example, but it can be improvedd and based on that more complex React components can be incorporated inside Angular.