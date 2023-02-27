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
To change the contents of the webpage, you can upload new files and modify the below JSONs.

*** Disclaimer: Always maintain the format of the JSON files. ***

##### portfolio/src/assets/json/intro.json:
- profilePicPath: Put the path of png image. Remember: Image paths must be relative to: ``` portfolio/src/app/file.service.ts ```. ``` eg: "../assets/images/profile-pic.png" ```
- nextLines: Currently background is setup for 2 lines.
- resumeLink: Link to PDF Resume. Remember: Paths must be relative to: ``` portfolio/src/app/file.service.ts ```. ``` eg: "../assets/Umang_Resume_light.pdf" ```
- videoResumeLink: This renders a youtube embedded video link. To check how to generate an embedded link, chheckout Notes-> Embedded Youtube vedios section below. eg: ``` "https://www.youtube.com/embed/pzzPowh241o" ``

##### portfolio/src/assets/json/projects.json:
- order: Not yet implemented. If order of the json list is maintained, order will be maintained.
- team: Not yet implemented, but will only support ``` "Person" ``` or ``` "Groups" ``` values.
- primaryColorCode: Use hexadecimal color codes only. ```eg: "#606060" ```
- image: Put the path of png image. Remember: Image paths must be relative to: ``` portfolio/src/app/file.service.ts ```. ``` eg: "../assets/images/thumbnail/indigo.png" ```

##### portfolio/src/assets/json/contact.json:
- order: Not yet implemented. If order of the json list is maintained, order will be maintained.
- link: Put proper application/http specific url to redirect correctly. ``` eg: mailto:mail2umangsingh@gmail.com ```
- materialIcon: Put the path of png image (color: white, dimensions: 30px * 30px). Remember: Image paths must be relative to: ``` portfolio/src/app/file.service.ts ```. ``` eg: "../assets/images/icons/email.png" ```

## Notes:

##### JSON Formatting:
- ``` https://www.w3schools.com/js/js_json_syntax.asp ```
- ``` https://jsonformatter.org/ ```

##### @Media CSS:
- ``` https://www.w3schools.com/cssref/css3_pr_mediaquery.php ```
- ``` https://www.w3schools.com/css/css_rwd_mediaqueries.asp ```

##### Embedded Youtube videos:
- ``` https://support.google.com/youtube/answer/171780?hl=en# ```
- After getting the embedded link following the steps in the above url, copy only the src attribute value, and put it in intro.json file.