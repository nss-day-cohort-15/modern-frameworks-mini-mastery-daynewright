#### Modern Frameworks Milestone Mini-Mastery Exercise
### Flower Power Florist Product List

### Requirements
For this project you need to use Angular to list types of flower arrangements offered by a florist.
Build an application that has one view, one controller, and a factory. The view needs to list all the data for each product: name, description, and price. Products with matching category types -- holiday, bereavement, and misc -- should be listed together under a category header.  

----
### Setup 
1. `mkdir -p ~/workspace/quizzes/modern-frameworks/flower-power && cd $_`  

2. Clone this repository and cd into the directory it creates.  

3. Install Angular with `npm install angular` (Or use bower. Your choice). Remember to add the script tag for angular to `index.html`.  

4. Remember to also add a `.gitignore` to the project root folder.  

---
### Instructions
__The data you will be fetching has already been added to Firebase__. Your instructor will give you the API key and URL to use.  

Fetch your data using an http call that returns a promise. Save the returned data as a property of the `$scope` object and loop through it to display the flower arrangment info to the user.

===============

### Controller

Your view should have its own controller to manage its state, and provide the required behavior.

### Routing

Use Angular routing (i.e. `ngRoute`) to handle the binding of a controller to a view, access to each view, and establishing a default view if an incorrect one is typed into the URL bar.

### Factory

You will need a `FlowerFactory` whose responsibility will be to obtain the data from Firebase. Whether it is a listing of all flower arrangements, or the data of an individual arrangement. Your controller will use this factory to access the data it needs to display in the DOM.


