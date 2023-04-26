shirtOrder.js
// Cliffs:
// 1. Constant/Let/Var variables (lines 32-34 [constants for material], lines 301-306 [var for order dictionaries], lines 702-709 [let for shipping],  )
// 2. Arithmetic operators (lines 108, 195, 283 [price calculation functions])
// 3. Loops (lines 653 [for loop that loops through dictionaries of all orders placed], lines 853-881 (do/while loop for validating shipping information))
// 4. If/Else (lines 858-877 [final validation of order and shipping information])
// 5. Switch (lines 52, 139, 227 [pull information from the dropboxes])
// 6. Arrays (lines 714, 717, 815, 837 [all deal with validating the shipping information or displaying it based on fields filled or required fields that are missing])
// 7. Try/Catch (lines 353-363 [checks if a material is selected, throws an error if no material, and chooses cotton by default with explanation, this was done for all three sizes], )
// 8. Finally/Throw (lines 353-363 [material checker mentioned above, lines 353-363 deal with smalls], )
// 9. Event Listeners (lines 311, 639, 711, one for each button [the event listener for the 'Reset' button is in the html <script> section])
// 10. Boolean return function (lines 98, 185, 273 [return true/false if material was chosen for a shirt, ties in with try/catch/throw/finally blocks])
// 11. Parameter/argument return functions (lines 82, 169, 257 [return material to be used as argument for the price calculation functions mentioned above on line 3])
// 12. String methods (lines 675, 859 [converst user input of 'Y' or 'N' to 'y' or 'n'])


// Global variables that will be used during order placement
const orderForm = document.getElementById('orderForm');
const form = document.getElementById('form'); 

// Variable for adding to cart button
let addToCart = document.getElementById('addToCart'); // Add to cart button

// Variables for sum of all smalls and medium when orders are placed
var sumSmalls = 0;
var sumMediums = 0;
var sumLarges = 0;

// Material variable
let material = document.getElementById('material');

// // Material constants
const cotton = document.getElementById('cotton');
const polyester = document.getElementById('polyester');
const silk = document.getElementById('silk');


/////////////////////////// FUNCTIONS/VARIABLES FOR SMALL ORDERS /////////////////////////////////

// Checkbox field variables for ordering small items
var smallChecked = document.getElementById('small');
var qSmall = document.getElementById('numSmall');
var grandTotalQSmalls = 0; // Global variable for accumulated quantity of smalls
var subtotalSmalls = 0; // Global variable to keep up with changes on each submission

// Constants for small
const smallColor = document.getElementById('smallColor');
const smallPrice = document.getElementById('small');

// Return function containing the switch statement which retrieves color from the dropdown box
function getSColor(){
    var selectedColorSmall = smallColor.options[smallColor.selectedIndex].innerHTML.toLowerCase(); // string method
    switch(selectedColorSmall){
        case 'black':
            selectedColorSmall = 'black';
            break;
        case 'white':
            selectedColorSmall = 'white';
            break;
        case 'red':
            selectedColorSmall = 'red';
            break;
        case 'blue':
            selectedColorSmall = 'blue';
            break;
        case 'brown':
            selectedColorSmall = 'brown';
            break;
        case 'yellow':
            selectedColorSmall = 'yellow';
            break;
        case 'purple':
            selectedColorSmall = 'purple';
            break;
        case 'pink':
            selectedColorSmall = 'pink';
            break
    }
    return selectedColorSmall; // Returns color value
}

// Function that gets material chosen and returns it as parameter
function getSMaterial(){
    let chosenSMaterial;
    if (silk.checked == true){ // Silk chosen
        chosenSMaterial = 'silk';
    }
    else if (polyester.checked == true){ //Polyester chosen
        chosenSMaterial = 'polyester';
    }
    else if (cotton.checked == true){ // Cotton chosen
        chosenSMaterial = 'cotton';
    }

    return chosenSMaterial; // parameter
}

// Function that returns boolean
function sMaterialChosen (){
    if (silk.checked == true || polyester.checked == true || cotton.checked == true){
        return true;
    }
    else {
        return false;
     }
}

//Function that returns value based on material selected
function priceOfSmalls(numberOfSmalls, smallMaterial){
    var totalSmalls = 0; // Initialzed at 0
    var smallPriceInt = parseInt(smallPrice.value);
    var subtotalSmalls = numberOfSmalls * smallPriceInt; 
    if (smallMaterial == 'polyester'){
        totalSmalls += subtotalSmalls * parseFloat(polyester.value); // Applies multiplier based on polyester being selected
    }
    else if (smallMaterial == 'silk'){
        totalSmalls += subtotalSmalls * parseFloat(silk.value); // Applies multiplier based on silk being selected
    }
    else {
        totalSmalls += subtotalSmalls * 1; // Applies no multiplier
    }
    return totalSmalls;
}

////////////////            FUNCTIONS/VARIABLES FOR MEDIUM ORDERS       /////////////////////////////////

// Checkbox field variables for ordering small items
var mediumChecked = document.getElementById('medium');
var qMedium = document.getElementById('numMedium');
var grandTotalQSmalls = 0; // Global variable for accumulated quantity of mediums
var subtotalMediums = 0; // Global variable to keep up with changes on each submission

const mediumColor = document.getElementById('mediumColor');
const mediumPrice = document.getElementById('medium');
let mediumMaterial = document.getElementById('material');

// Return function containing the switch statement which retrieves color from the dropdown box
function getMColor(){
    var selectedColorMedium = mediumColor.options[mediumColor.selectedIndex].innerHTML.toLowerCase(); // string method
    switch(selectedColorMedium){
        case 'black':
            selectedColorMedium = 'black';
            break;
        case 'white':
            selectedColorMedium = 'white';
            break;
        case 'red':
            selectedColorMedium = 'red';
            break;
        case 'blue':
            selectedColorMedium = 'blue';
            break;
        case 'brown':
            selectedColorMedium = 'brown';
            break;
        case 'yellow':
            selectedColorMedium = 'yellow';
            break;
        case 'purple':
            selectedColorMedium = 'purple';
            break;
        case 'pink':
            selectedColorMedium = 'pink';
            break
    }
    return selectedColorMedium;
}

// Function that gets material chosen and returns it as parameter
function getMMaterial(){
    let chosenMMaterial;
    if (silk.checked == true){ // Silk chosen
        chosenMMaterial = 'silk';
    }
    else if (polyester.checked == true){ //Polyester chosen
        chosenMMaterial = 'polyester';
    }
    else if (cotton.checked == true){ // Cotton chosen
        chosenMMaterial = 'cotton';
    }

    return chosenMMaterial; // parameter returned
}

// Function that returns boolean
function mMaterialChosen (){
    if (silk.checked == true || polyester.checked == true || cotton.checked == true){
        return true;
    }
    else {
        return false;
     }
}

//Function that returns value based on material selected
function priceOfMediums(numberOfMediums, mediumMaterial){
    var totalMediums = 0; // Initialzed at 0
    var mediumPriceInt = parseInt(mediumPrice.value);
    var subtotalMediums = numberOfMediums * mediumPriceInt; 
    if (mediumMaterial == 'polyester'){
        totalMediums += subtotalMediums * parseFloat(polyester.value); // Applies multiplier based on polyester being selected
    }
    else if (mediumMaterial == 'silk'){
        totalMediums += subtotalMediums * parseFloat(silk.value); // Applies multiplier based on silk being selected
    }
    else {
        totalMediums += subtotalMediums * 1; // Applies no multiplier
    }
    return totalMediums;
}


////////////////////////////////// FUNCTIONS/DATA FOR LARGE ORDERS ///////////////////////////////////

// Checkbox field variables for ordering small items
var largeChecked = document.getElementById('large');
var qLarge = document.getElementById('numLarge');
var grandTotalQLarges = 0; // Global variable for accumulated quantity of mediums
var subtotalLarges = 0; // Global variable to keep up with changes on each submission

const largeColor = document.getElementById('largeColor');
const largePrice = document.getElementById('large');
let largeMaterial = document.getElementById('material');

// Return function containing the switch statement which retrieves color from the dropdown box
function getLColor(){
    var selectedColorLarges = largeColor.options[largeColor.selectedIndex].innerHTML.toLowerCase(); // string method
    switch(selectedColorLarges){
        case 'black':
            selectedColorLarges = 'black';
            break;
        case 'white':
            selectedColorLarges = 'white';
            break;
        case 'red':
            selectedColorLarges = red;
            break;
        case 'blue':
            selectedColorLarges = 'blue';
            break;
        case 'brown':
            selectedColorLarges = 'brown';
            break;
        case 'yellow':
            selectedColorLarges = 'yellow';
            break;
        case 'purple':
            selectedColorLarges = 'purple';
            break;
        case 'pink':
            selectedColorLarges = 'pink';
            break;
    }
    return selectedColorLarges;
}

// Function that gets material chosen and returns it as parameter
function getLMaterial(){
    let chosenLMaterial;
    if (silk.checked == true){ // Silk chosen
        chosenLMaterial = 'silk';
    }
    else if (polyester.checked == true){ //Polyester chosen
        chosenLMaterial = 'polyester';
    }
    else if (cotton.checked == true){ // Cotton chosen
        chosenLMaterial = 'cotton';
    }

    return chosenLMaterial; // returned parameter
}

// Function that returns boolean
function lMaterialChosen (){
    if (silk.checked == true || polyester.checked == true || cotton.checked == true){
        return true;
    }
    else {
        return false;
     }
}

//Function that returns value based on material selected
function priceOfLarges(numberOfLarges, largeMaterial){
    var totalLarge = 0; // Initialzed at 0
    var largePriceInt = parseInt(largePrice.value);
    var subtotalLarges = numberOfLarges * largePriceInt; 
    if (largeMaterial == 'polyester'){
        totalLarge += subtotalLarges * parseFloat(polyester.value); // Applies multiplier based on polyester being selected
    }
    else if (largeMaterial == 'silk'){
        totalLarge += subtotalLarges * parseFloat(silk.value); // Applies multiplier based on silk being selected
    }
    else {
        totalLarge += subtotalLarges * 1; // Applies no multiplier
    }
    return totalLarge;
}


// Dictionaries for storing details on each order, each order starting with an index of 0
var smallDict = {};
var smallOrder = 0;
var mediumDict = {};
var mediumOrder = 0;
var largeDict = {};
var largeOrder = 0;

var sumOfThisOrder = 0;
var allOrdersList = []; // Places dictionaries of ALL orders in a list to be retrieved

addToCart.addEventListener('click', () => {

    var currentOrder = []; // List than can display mutiple orders at once for customer to see in innerHTML

    // SMALL ORDER(S)

    let qSmallInt = 0;  // Total smalls initialized
    qSmallInt += Math.floor(parseInt(qSmall.value)); // Rounds value down if decimal is placed in

    // Order can only be placed when small is checked
    if (smallChecked.checked) {

    // Starts by checking if the 'quanity' field was left blank or a '0' was entered
    let noSmall;
    let zeroSmallsError;

    if (qSmallInt == 0 || isNaN(qSmallInt)){ // Filters out zeros and any other way to display NaN in innerHTML
        noSmall = true; // sets condition for loop
        zeroSmallsError = "Zero Smalls Selected"; // sends error message
    }
    else{
        noSmall = false; // proceeding loop will be bypassed
    }


    // As long as no shirt are ordered and the box is checked this loop will repeat
    if (noSmall == true){
        alert(zeroSmallsError); // sends alert
        while (noSmall == true){
            let addSmalls = prompt("Enter number of smalls desired"); // chance to change input to valid order
            let addSmallsInt = Math.floor(parseInt(addSmalls)); // converts input to integer and rounds down
            if (!isNaN(addSmallsInt) && addSmallsInt > 0){ // filters out invalid input
                qSmallInt = addSmallsInt;
                noSmall = false; // breaks loop
            }
            else{
                alert("Invalid Input"); // alert sent if anything other than an integer or decimal is entered
            }
        }   
    }
    
        // Try, Throw, Catch, and Finally Block
        try{
        var sMaterial = getSMaterial(); // Gives value if one was chosen
        if (!sMaterialChosen()){ // Checks if radio button was selected
            throw 'No material selected for small\nOrder will be categorized as "undefined," and charged as cotton'; // Throws error if radio button not selected
        }
        }
        catch (e){
        alert("Error has occured: " + e); // Displays error with details
        }

        finally { //If not fixed For next order, order will be treated as a cotton order

            sMaterial = getSMaterial(); // Parameter returned from getSMaterial; Treated as 'undefined' and charged as cotton if not selected

            let sColor = getSColor(); // Gets color
            

            // Custom color order for better user experience
            if (sColor === '--select a color'){ // If no color is selected
                let placeCustomSColor = prompt('No Color Selected For Small Order\nAll orders without a selected color will default to white\nWould you like to order a custom color\nType "Y" for yes, "N" for no').toLowerCase();
                if (placeCustomSColor === 'y'){
                    let customSColor = prompt('Enter desired color').toLowerCase();
                    sColor = customSColor;
                }
                else {
                    console.log(sColor);
                    sColor = 'white'; // defaults to white if anyting other than 'y' is pressed
                }
            }
        

        subtotalSmalls = priceOfSmalls(qSmallInt, sMaterial); // Gets price based on radio button checked

        smallDict = { // Creating dictionary of each order
            "size": "small",
            "quantity": qSmallInt,
            "color": sColor,
            "material": sMaterial, 
            "subtotal": subtotalSmalls
        };

        allOrdersList.push(smallDict); // Adding details of that order to list
        currentOrder.push(`${qSmallInt} ${sColor} ${sMaterial} small(s) for $${subtotalSmalls}.00`); // Order reflected in the innerHTML

        smallOrder += 1; // Increments to next order
        } // end of finally block
    }


    // MEDIUM ORDER(S)

    let qMediumInt = 0;  // Total mediums initialized
    qMediumInt += Math.floor(parseInt(qMedium.value)); // Rounds value down if decimal is placed in

    // Order can only be placed when medium is checked
    if (mediumChecked.checked) {

    // Starts by checking if the 'quanity' field was left blank or a '0' was entered
    let noMedium;
    let zeroMediumsError;

    if (qMediumInt == 0 || isNaN(qMediumInt)){ // Filters out zeros and any other way to display NaN in innerHTML
        noMedium = true; // sets condition for loop
        zeroMediumsError = "Zero Mediums Selected"; // sends error message
    }
    else{
        noMedium = false; // proceeding loop will be bypassed
    }


    // As long as no shirt are ordered and the box is checked this loop will repeat
    if (noMedium == true){
        alert(zeroMediumsError); // sends alert
        while (noMedium == true){
            let addMediums = prompt("Enter number of mediums desired"); // chance to change input to valid order
            let addMediumsInt = Math.floor(parseInt(addMediums)); // converts input to integer and rounds down
            if (!isNaN(addMediumsInt) && addMediumsInt > 0){ // filters out invalid input
                qMediumInt = addMediumsInt;
                noMedium = false; // breaks loop
            }
            else{
                alert("Invalid Input"); // alert sent if anything other than an integer or decimal is entered
            }
        }   
    } // end of quantity block
    
        // Try, Throw, Catch, and Finally Statements
        try{
        var mMaterial = getMMaterial(); // Gives value if one was chosen
        if (!mMaterialChosen()){ // Checks if radio button was selected
            throw 'No material selected for medium\nOrder will be categorized as "undefined," and charged as cotton'; // Throws error if radio button not selected
        }
        }
        catch (e){
        alert("Error has occured: " + e); // Displays error with details
        }

        finally { //If not fixed For next order, order will be treated as a cotton order

            mMaterial = getMMaterial(); // Parameter returned from getMMaterial; Treated as 'undefined' and charged as cotton if not selected

            let mColor = getMColor(); // Gets color

            if (mColor === '--select a color'){ // If no color is selected
                let placeCustomMColor = prompt('No Color Selected For Medium Order\nAll orders without a selected color will default to white\nWould you like to order a custom color? "Y" for yes, "N" for no').toLowerCase();
                if (placeCustomMColor === 'y'){
                    let customMColor = prompt('Enter desired color').toLowerCase();
                    mColor = customMColor; 
                }
                else {
                    mColor = 'white'; // defaults to white
                }
            }

            if (mMaterial === 'silk'){
                subtotalMediums * 2.5;
            }
            subtotalMediums = priceOfMediums(qMediumInt, mMaterial); // Gets price based on radio button checked

            mediumDict = { // Creating dictionary of each order
                "size": "medium",
                "quantity": qMediumInt,
                "color": mColor,
                "material": mMaterial, 
                "subtotal": subtotalMediums
            };

            allOrdersList.push(mediumDict); // Adding details of that order to list
            currentOrder.push(`${qMediumInt} ${mColor} ${mMaterial} medium(s) for $${subtotalMediums}.00`); // Order reflected in the innerHTML

            mediumOrder += 1; // Increments to next order
        } // end of finally block
    }


    // LARGE ORDER(S)

    let qLargeInt = 0;  // Total mediums initialized
    qLargeInt += Math.floor(parseInt(qLarge.value)); // Rounds value down if decimal is placed in

    // Order can only be placed when medium is checked
    if (largeChecked.checked) {

    // Starts by checking if the 'quanity' field was left blank or a '0' was entered
    let noLarge;
    let zeroLargesError;

    if (qLargeInt == 0 || isNaN(qLargeInt)){ // Filters out zeros and any other way to display NaN in innerHTML
        noLarge = true; // sets condition for loop
        zeroLargesError = "Zero Larges Selected"; // sends error message
    }
    else{
        noLarge = false; // proceeding loop will be bypassed
    }

    // As long as no shirt are ordered and the box is checked this loop will repeat
    if (noLarge == true){
        alert(zeroLargesError); // sends alert
        while (noLarge == true){
            let addLarges = prompt("Enter number of larges desired"); // chance to change input to valid order
            let addLargesInt = Math.floor(parseInt(addLarges)); // converts input to integer and rounds down
            if (!isNaN(addLargesInt) && addLargesInt > 0){ // filters out invalid input
                qLargeInt = addLargesInt;
                noLarge = false; // breaks loop
            }
            else{
                alert("Invalid Input"); // alert sent if anything other than an integer or decimal is entered
            }
        }   
    } // end of quanity block
    
        // Try, Throw, Catch, and Finally Statements
        try{
        var lMaterial = getLMaterial(); // Gives value if one was chosen
        if (!lMaterialChosen()){ // Checks if radio button was selected
            throw 'No material selected for large\nOrder will be categorized as "undefined," and charged as cotton'; // Throws error if radio button not selected
        }
        }
        catch (e){
        alert("Error has occured: " + e); // Displays error with details
        }

        finally { //If not fixed For next order, order will be treated as a cotton order

            lMaterial = getLMaterial(); // Parameter returned from getLMaterial; Treated as 'undefined' and charged as cotton if not selected

            // Dealing with color input
            let lColor = getLColor(); // Gets color
            
            if (lColor === '--select a color'){ // If no color is selected
                let placeCustomLColor = prompt('No Color Selected For Large Order\nAll orders without a selected color will default to white\nWould you like to order a custom color? "Y" for yes, "N" for no').toLowerCase();
                if (placeCustomLColor === 'y'){
                    let customLColor = prompt('Enter desired color').toLowerCase();
                    lColor = customLColor; 
                }
                else {
                    lColor = 'white'; // default to white
                }
            }

            subtotalLarges = priceOfLarges(qLargeInt, lMaterial); // Gets price based on radio button checked using 

            largeDict = { // Creating dictionary of each order
                "size": "large",
                "quantity": qLargeInt,
                "color": lColor,
                "material": lMaterial, 
                "subtotal": subtotalLarges
            };

            allOrdersList.push(largeDict); // Adding details of that order to list
            currentOrder.push(`${qLargeInt} ${lColor} ${lMaterial} large(s) for $${subtotalLarges}.00`); // Order reflected in the innerHTML

            largeOrder += 1; // Increments to next order
        }
    }

    if (!smallChecked.checked && !mediumChecked.checked && !largeChecked.checked){
        alert('No Items Checked');
        document.getElementById('itemsAdded').innerHTML = 'Items Added: ';
        document.getElementById('itemsInCart').innerHTML = 'None';
    }

    else {
    
    let orderGrandTotal = 0;
    for(let i = 0; i < allOrdersList.length; i++){
        // Looping through the size dictionaries for the total
        oneOrder = allOrdersList[i]
        orderSubtotal = oneOrder["subtotal"];
        orderGrandTotal += orderSubtotal;
    }

    // Joining orders together for innerHTML display
    displayedListOfOrders = []; // new list if number of orders placed is more than 1 at a time
    if (currentOrder.length > 1){
        for (let o = 0; o < currentOrder.length; o++){
            let order = `- ${currentOrder[o]}\n`; // places order onto new line
            displayedListOfOrders.push(order);
        }
        document.getElementById('itemsAdded').innerHTML = `${displayedListOfOrders.length} Items Added`;
        document.getElementById('itemsInCart').innerHTML = displayedListOfOrders.join(''); // Up to three orders displayed on a new line when placed all at once
    }
    else{
        document.getElementById('itemsAdded').innerHTML = 'Item Added: ';
        document.getElementById('itemsInCart').innerHTML = currentOrder; // If only one order is placed
    }

    // Displaying details of that specific order to customer in innerHTML
    document.getElementById('totalSoFar').innerHTML = 'Total So Far: ';
    // Key and values of each order added together for the subtotal of one specific order
    document.getElementById('calculatedSubtotal').innerHTML = `$${orderGrandTotal}.00`;
    
    } // end of ELSE statement

    orderForm.reset();

});

function getCartInfo(){
    let orderGrandTotal = 0;
    let oneOrder; // represents a dictionary formed for each order
    let orderDetails = []; // the list that will be displayed in innerHTML

    for(let i = 0; i < allOrdersList.length; i++){

        // Looping through the dictionaries and grabbing the values
        oneOrder = allOrdersList[i]
        orderSize = oneOrder["size"];
        orderColor = oneOrder["color"];
        orderMaterial = oneOrder["material"];
        orderQuantity = oneOrder["quantity"];
        orderSubtotal = oneOrder["subtotal"];
        orderGrandTotal += orderSubtotal;

        // Putting the details of each order into a string and displaying it in innerHTML 
        orderDetails.push(`- ${orderQuantity} ${orderSize} ${orderColor} ${orderMaterial} for $${orderSubtotal}.00\n`);
    }
    document.getElementById('itemsAdded').innerHTML = 'Items In Cart:';
    document.getElementById('itemsInCart').innerHTML = orderDetails.join('');
    document.getElementById('totalSoFar').innerHTML = 'Total So Far:';
    document.getElementById('calculatedSubtotal').innerHTML = `$${orderGrandTotal}.00`;
}

// Allows customer to view all order details before checking out
const viewCart = document.getElementById('viewCart');
viewCart.addEventListener('click', () => {
    getCartInfo();
});


// Used in submit form to confirm order data
function finalOrderCorrect(){

    let finalOrder; // represents a dictionary formed for each order
    let orderDetails = []; // the list that will be displayed in innerHTML
    let sumOfAllOrders = 0; // adds sum of all orders for display in prompt


    // Same loop that was used in viewCart function, it's bad practice to repeat blocks of code but the number of functions with returns were getting things messy
    for(let i = 0; i < allOrdersList.length; i++){

        // Looping through the dictionaries (again) and grabbing the values
        finalOrder = allOrdersList[i]
        orderSize = finalOrder["size"];
        orderColor = finalOrder["color"];
        orderMaterial = finalOrder["material"];
        orderQuantity = finalOrder["quantity"];
        orderSubtotal = finalOrder["subtotal"];
        sumOfAllOrders += finalOrder["subtotal"]
        
        // Putting the details of each order into a string and displaying it in innerHTML 
        orderDetails.push(`- ${orderQuantity} ${orderSize} ${orderColor} ${orderMaterial} for $${orderSubtotal}.00\n`);
    } // end of for loop


    let finalOrderConfirmation = false; // sets up loop for confirming order
    let placeOrder; // user input that will break loop

    while(finalOrderConfirmation == false){

        // Confirming order with customer input
        placeOrder = prompt(`You have ordered:\n` + orderDetails.join('') + `\nTotal: $${sumOfAllOrders}.00\nProceed? (Type 'Y' for yes, 'N' for no)`).toLowerCase();
        if (placeOrder === 'y'){
            alert('Order Placed!');
            finalOrderConfirmation = true; // breaks loop
        }

        // Cancelling order
        else if (placeOrder === 'n'){
            alert('Order Cancelled');
            finalOrderConfirmation = true; // breaks loop
        }
        
        // If 'y' or 'n' is not received
        else {
            alert("Invalid Input\nType 'Y' to confirm order 'N' to cancel order"); // used to make sure customer cannot place order by accident (i.e. pressing enter)
        }
}

};


///////////////////////////// SHIPPING INFORMATION AND FINAL SUBMISSION /////////////////

// Submit button
const submitForm = document.getElementById('submitButton');

// Input value for second half of form
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let address = document.getElementById('address');
let city = document.getElementById('city');
let state = document.getElementById('state')
let zipCode = document.getElementById('zipCode');
let country = document.getElementById('country');
let phone = document.getElementById('phone');

submitForm.addEventListener('click', () => {

    // Error messages if input is not acceptable
    shippingErrorMessages = [];

    // Input variables
    let shippingInputs = [];
    let fName;
    let lName;
    let addy;
    let town;
    let province;
    let nation;
    let zip;
    let ringRing;

    // Error messages (email and phone are optional) this could have been done using "required" in the html form but I wanted to demonstrate I could do it manually
    let firstNameError;
    let lastNameError;
    let addressError;
    let cityError;
    let stateError;
    let countryError;
    let zipError;

    // Filters first name
    if (firstName.value.length == 0 || firstName.value == null){
        firstNameError = "Enter First Name/ Company Name";
        shippingErrorMessages.push(firstNameError);
    }
    else{
        fName = firstName.value;
        shippingInputs.push(fName);
    }

    // Filters last name
    if (lastName.value.length == 0 || lastName.value == null){
        lastNameError = "Enter Last Name/ Company Dept.";
        shippingErrorMessages.push(lastNameError);
    }
    else{
        lName = lastName.value;
        shippingInputs.push(lName);
    }

    // Address
    if (address.value.length == 0 || address.value == null){
        addressError = "Enter Address";
        shippingErrorMessages.push(addressError);
    }
    else{
        addy = address.value;
        shippingInputs.push(addy);
    }

    // City
    if (city.value.length == 0 || city.value == null){
        cityError = "Enter City";
        shippingErrorMessages.push(cityError);
    }
    else{
        town = city.value;
        shippingInputs.push(town);
    }

    // State
    if (state.value.length == 0 || state.value == null){
        stateError = "Enter State";
        shippingErrorMessages.push(stateError);
    }
    else{
        province = state.value;
        shippingInputs.push(province);
    }

    // Country
    if (country.value.length == 0 || country.value == null){
        countryError = "Enter Country";
        shippingErrorMessages.push(countryError);
    }
    else{
        nation = country.value;
        shippingInputs.push(nation);
    }

    // Zipcode
    if (zipCode.value.length == 0 || zipCode.value == null || isNaN(parseInt(zipCode.value))){
        zipError = "Invalid ZipCode";
        shippingErrorMessages.push(zipError);
    }
    else{
        zip = zipCode.value;
        shippingInputs.push(zip);
    }

    // Phone (no error msg)
    if (phone.value.length != 0 || phone.value != null){
        ringRing = phone.value;
        shippingInputs.push(ringRing);
    }

    shippingInputs.join('');

    // List of new messages
    let finalErrorMsg = [];
    let msg;


    if (shippingErrorMessages.length > 1){

        // Starting loop so messages will be displayed on new line
        for (let i = 0; i < shippingErrorMessages.length; i++){
            msg = `${shippingErrorMessages[i]}\n`;
            finalErrorMsg.push(msg);
        }
        alert(finalErrorMsg.join(''));
    }
    else if (shippingErrorMessages.length == 1){
        alert(shippingErrorMessages);
    }

    else if (shippingErrorMessages.length == 0){

    
    // Final block executed to confirm order, making a function to prevent repetition would have been better but it is essentially doing the same thing as the addToCart function, only with alerts and prompts

    let displayShippingInputs = []; // takes shipping inputs and prepares them for display in prompt
    
    // Displaying information to customer with each input on new line
    let shippingInput;
    for(let d = 0; d < shippingInputs.length; d++){
        shippingInput = `${shippingInputs[d]}\n`;
        displayShippingInputs.push(shippingInput);
    }
    
    
    /////////////////// SHIPPING CONFIRMATION ////////////////
    let finalShippingConfirmation; // sets up loop
    let confirmShippingInputs; // user input that breaks loop
    let confirmShippingToLowerCase; // error I was having where .toLowerCase() wasn't being applied

    // Loop will execute indefintely until customer explicity types 'y' to confirm information
    do {

        finalShippingConfirmation = false;
            
        confirmShippingInputs = prompt("Shipping Information (Scroll Down): \n\n" + displayShippingInputs.join('') + "\nType 'Y' to confirm order, Type 'N' to cancel order");
        if (confirmShippingInputs != null){
            confirmShippingToLowerCase = confirmShippingInputs.toLowerCase();
        }
        
        // Details of order triggered when 'y' is entered
        if (confirmShippingToLowerCase === 'y'){
            alert('Shipping Confirmed');
            
            // Calls function to confirm order items
            finalOrderCorrect();
            finalShippingConfirmation = true; // breaks loop and moves on
        }

        else if (confirmShippingToLowerCase === 'n'){
            alert('Order Cancelled');
            finalShippingConfirmation = true; // breaks loop and restarts program
            orderForm.reset();
        }
        
        else{
            alert("Enter 'Y' or 'N'"); // repeated until 'y' or 'n' is received from user
        }

    } while (finalShippingConfirmation == false); // end of shipping confirmation


    // innerHTML and form fields reset so another order can be placed
    document.getElementById('itemsAdded').innerHTML = 'Items In Cart:';
    document.getElementById('itemsInCart').innerHTML = 'None';
    document.getElementById('totalSoFar').innerHTML = 'Total So Far:';
    document.getElementById('calculatedSubtotal').innerHTML = `$0.00`;
    orderForm.reset();

    // end of program
    
    }
});
