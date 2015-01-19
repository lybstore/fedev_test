# URBN Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The componet you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code
* Use SCSS and angularjs

Amend this Readme and use your commits to outline the component you have created and the decisions that you have made.

Please fork this repository and commit your changes for review.


### Home.html 

This file features the mark up for the recommended items directive. The directive can be found in the recommended folder. 

The directive.js file features the scaffholding for the recommended section, it wraps all elements within recommmeded items div. The directive also features a  translation filter, this enable a lanuage (i18n) translation within elements wrapped with the directive.

The benefits of a directive, allows a cleaner way to pass methods to the directive using an attribute and decouple controller from directives. 


### Currency symbol change

.constant with app.js is used to define currency symbols dependent upon the language. This demo demonstrates a currency symbol change in pounds and euro. ('currencies', {'en': "£", 'es': "€"})

In order to see the currency change, amend the country intials 'en' to 'es'
###### translationConfProvider.defaultLang('en');
