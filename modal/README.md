# Modal

This is my source code for Modal. The general idea is to give a programmer a component, which has some default style values.
Programmer can override them anytime, hence modal is fully-customizable. 
It is relatively easy to use, just provide desired props, and use it on your website!

## Props

Available props, which can be used to set the style of a modal

| Name        | Description | Default value  |
|-------------|:-------------:| -----:|
| height      | Set the height of your modal              | undefined |
| width       | Set the width of your modal              | undefined |
| x           | margin-left of your modal              | undefined |
| y           | margin-top of your modal              | undefined |
| customStyle           | Sets the style of your modal              | See modalStyle variable in src/Modal.js |
| overlayCustomStyle           | Sets the style of rest of the page              | See overlayStyle variable in src/Modal.js|
| open           | If true, the modal will display              | undefined |

## How to run it?

Just type ```npm start``` to open file with example usage.
TO use it in yuor project, it would be enough just to copy over the ```Modal.js``` to the appriopriate directory.

## Example

This is what you should see after opening a modal from the source code

![alt text](example.png)