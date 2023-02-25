# README
This is a portfolio designed in Angular for Umang Singh. 

### Pre-requisites:
- Angular 15
- Node 16
- NPM 8

### Installation:
``` npm install ```

### Running the application:
``` ng serve --open ```

## Important Update Instructions:
To change the contents of the webpage, you can modify the below JSONs.

##### portfolio/src/assets/json/projects.json:
- order: Not yet implemented. If order of the json list is maintained, order will be maintained.
- team: Not yet implemented, but will only support ``` "Person" ``` or ``` "Groups" ``` values.
- primaryColorCode: Use hexadecimal color codes only. ```eg: "#606060" ```
- image: Put the path of png image. Remember: Image paths must be relative to: ``` portfolio/src/app/projects/projects.component.ts ```. ``` eg: "../assets/images/thumbnail/indigo.png" ```

##### portfolio/src/assets/json/contact.json:
- order: Not yet implemented. If order of the json list is maintained, order will be maintained.
- link: Put proper application/http specific url to redirect correctly. ``` eg: mailto:mail2umangsingh@gmail.com ```
- materialIcon: Put the path of png image (color: white, dimensions: 30px * 30px). Remember: Image paths must be relative to: ``` portfolio/src/app/contact/contact.component.ts ```. ``` eg: "../assets/images/icons/email.png" ```