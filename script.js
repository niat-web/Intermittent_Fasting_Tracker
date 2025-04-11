// script.js

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 darkModeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
 });
 
 // Fasting Form
 const fastingForm = document.getElementById('fastingForm');
 const planTypeSelect = document.getElementById('planType');
 const customScheduleFields = document.getElementById('customScheduleFields');
 const fastingHoursInput = document.getElementById('fastingHours');
 const eatingHoursInput = document.getElementById('eatingHours');
 const resetButton = document.getElementById('resetButton');
 
 // Tracker Elements
 const timeDisplay = document.getElementById('time');
 const statusDisplay = document.getElementById('status');
 
 // Water Intake
 const waterAmountInput = document.getElementById('waterAmount');
 const addWaterButton = document.getElementById('addWater');
 const totalWaterDisplay = document.getElementById('totalWater');
 let totalWaterIntake = 0;
 
 // Motivational Tips
 const tipDisplay = document.getElementById('tip');
 const motivationalTips = [
  "You're halfway there!",
  "Ketosis likely active now.",
  "Every drop counts!",
  "Stay strong!",
  "Consistency is key."
 ];
 
 // Variables
 let fastingInterval;
 let startTime;
 let fasting = false;
 
 //--- Core Concepts ---
 
 // Primitive types
 let fastingTime = 16; // Number
 const isFasting = true; // Boolean
 const fastingPlanName = "16:8"; // String
 let notes = null; // Null
 let upcomingMeal; // Undefined
 const uniqueId = Symbol("id"); // Symbol
 const bigIntValue = 9007199254740991n; // BigInt
 
 // Type conversion
 let stringNumber = "25";
 let numberValue = Number(stringNumber); // Convert string to number
 let booleanValue = Boolean(1); // Convert number to boolean (true)
 let stringValue = String(booleanValue); // Convert boolean to string
 
 // Type coercion
 console.log(5 + "5"); // Number is coerced into a string
 console.log(5 == "5"); // String is coerced into a number for comparison
 
 // Template literals
 const greeting = `Hello, welcome to ${fastingPlanName}!`;
 
 // Variable scoping (let, const, var)
 function exampleScope() {
  var functionScoped = "I am function scoped";
  let blockScoped = "I am block scoped";
  const constantValue = 10;
 
  if (true) {
  var functionScoped = "I am changed"; // Modified within the block
  let blockScoped = "I am different"; // Different variable within the block
  const constantValue = 20; // Different variable within the block
  console.log("Inside block:", functionScoped, blockScoped, constantValue);
  }
  console.log("Outside block:", functionScoped, blockScoped, constantValue);
 }
 exampleScope();
 
 //--- Control Flow ---
 
 // Conditionals (if/else, switch, ternary)
 function checkFastingStatus(hours) {
  if (hours > 12) {
  console.log("You are fasting for a long period!");
  } else if (hours > 8) {
  console.log("You are doing great!");
  } else {
  console.log("Keep going!");
  }
 }
 
 // Switch statement
 function getPlanDescription(plan) {
  switch (plan) {
  case "16:8":
  return "16 hours fasting, 8 hours eating.";
  case "18:6":
  return "18 hours fasting, 6 hours eating.";
  default:
  return "Custom fasting plan.";
  }
 }
 
 // Ternary operator
 const isHealthy = fastingTime > 12 ? "Healthy" : "Not so healthy";
 
 // Logical operators
 if (isFasting && fastingTime > 12) {
  console.log("Continue fasting for optimal results!");
 }
 
 if (fastingTime < 12 || !isFasting) {
  console.log("Consider longer fasting periods.");
 }
 
 // Error handling
 try {
  if (fastingTime > 24) {
  throw new Error("Fasting time cannot exceed 24 hours.");
  }
 } catch (error) {
  console.error(error.message);
  alert(error.message);
 }
 
 //--- User Input & Math ---
 
 // Function to clear input fields
 function clearInputFields() {
  waterAmountInput.value = '';
  fastingHoursInput.value = '';
  eatingHoursInput.value = '';
 }
 
 // Handle form inputs (text, number, date, select, etc.)
 fastingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedPlan = planTypeSelect.value;
  let fastingHours, eatingHours;
 
  if (selectedPlan === "custom") {
  fastingHours = parseInt(fastingHoursInput.value);
  eatingHours = parseInt(eatingHoursInput.value);
  if (isNaN(fastingHours) || isNaN(eatingHours) || fastingHours <= 0 || eatingHours <= 0) {
  alert("Please enter valid fasting and eating hours.");
  return;
  }
  } else {
  const [f, e] = selectedPlan.split(":").map(Number);
  fastingHours = f;
  eatingHours = e;
  }
 
  startFasting(fastingHours, eatingHours);
  clearInputFields();
 });
 
 // Validate in real-time
 fastingHoursInput.addEventListener("input", () => {
  if (parseInt(fastingHoursInput.value) > 24) {
  fastingHoursInput.value = 24;
  }
 });
 
 // Use Math functions
 const randomNumber = Math.random();
 console.log("Random number:", randomNumber);
 
 //--- Arrays & Objects ---
 
 // Arrays
 const allowedPlans = ["16:8", "18:6", "20:4", "OMAD", "5:2", "custom"];
 
 // CRUD operations
 allowedPlans.push("14:10");
 allowedPlans.shift();
 allowedPlans.splice(2, 1);
 
 // Map, filter, reduce
 const hoursArray = allowedPlans.map(plan => parseInt(plan.split(":")[0] || 0));
 const longFasts = hoursArray.filter(hour => hour > 16);
 const totalHours = hoursArray.reduce((acc, hour) => acc + hour, 0);
 
 // Spread/rest operators
 const newPlans = [...allowedPlans, "22:2"];
 function sum(x, y, ...rest) {
  return x + y + rest.reduce((a, b) => a + b, 0);
 }
 
 // Objects
 const fastingSchedule = {
  plan: "16:8",
  fastingHours: 16,
  eatingHours: 8,
  isCompleted: false,
  start: function() {
  console.log("Fasting started!");
  }
 };
 
 // Object methods
 const keys = Object.keys(fastingSchedule);
 const values = Object.values(fastingSchedule);
 
 //--- Functions & Events ---
 
 // Named/arrow functions
 function startFastingTimer() {}
 const stopFastingTimer = () => {};
 
 // Callbacks
 function fetchData(url, callback) {
  setTimeout(() => {
  const data = { message: "Data fetched!" };
  callback(data);
  }, 1000);
 }
 
 // Event listeners
 resetButton.addEventListener("click", () => {
  stopFasting();
 });
 
 addWaterButton.addEventListener('click', () => {
  const waterAmount = parseInt(waterAmountInput.value);
  if (!isNaN(waterAmount) && waterAmount > 0) {
  totalWaterIntake += waterAmount;
  totalWaterDisplay.textContent = `${totalWaterIntake} ml`;
  waterAmountInput.value = '';
  }
 });
 
 // Keyboard/mouse interactions
 document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === waterAmountInput) {
  addWaterButton.click();
  }
 });
 
 // Event delegation
 document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('some-dynamic-element')) {
  console.log('Dynamic element clicked');
  }
 });
 
 //--- Async Operations ---
 
 // Promises, async/await, Fetch API
 function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
 }
 
 async function fetchDataAsync(url) {
  try {
  await delay(1000);
  const response = { message: "Async data fetched!" };
  return response;
  } catch (error) {
  console.error("Error fetching data:", error);
  }
 }
 
 //--- DOM Manipulation ---
 
 // Function to update motivational tips
 function updateMotivationalTip() {
  const randomIndex = Math.floor(Math.random() * motivationalTips.length);
  tipDisplay.textContent = motivationalTips[randomIndex];
 }
 
 //--- Forms & Storage ---
 
 // Validate inputs
 function validateInput(input) {
  return input.value.trim() !== "";
 }
 
 // Prevent invalid submissions
 fastingForm.addEventListener("submit", (event) => {
  if (!validateInput(fastingHoursInput)) {
  event.preventDefault();
  alert("Please enter valid fasting hours.");
  }
 });
 
 // Store/retrieve data from localStorage
 localStorage.setItem('lastFastingPlan', '16:8');
 const lastPlan = localStorage.getItem('lastFastingPlan');
 
 //--- UI Enhancements ---
 
 // Initialize
 function initialize() {
  updateMotivationalTip();
  planTypeSelect.addEventListener('change', function() {
  customScheduleFields.style.display = this.value === 'custom' ? 'block' : 'none';
  });
 }
 
 //--- Utility Functions ---
 
 function updateTime() {
  if (!fasting) return;
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const remainingTime = fastingTime * 3600000 - timeElapsed; // Time in milliseconds
 
  if (remainingTime <= 0) {
  stopFasting();
  statusDisplay.textContent = "Fasting Completed!";
  return;
  }
 
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
 }
 
 function startFasting(hours, eatingHours) {
  fastingTime = hours;
  startTime = new Date().getTime();
  fasting = true;
  statusDisplay.textContent = "Fasting";
  fastingInterval = setInterval(updateTime, 1000);
  motivationalTips.push(`You are now ${eatingHours} hours away from eating!!`);
  updateMotivationalTip();
 }
 
 function stopFasting() {
  fasting = false;
  clearInterval(fastingInterval);
  timeDisplay.textContent = "00:00:00";
  statusDisplay.textContent = "Not Started";
 }
 
 //--- Best Practices ---
 
 // Clean separation of concerns, modular code
 // See functions above
 
 // Call initialize function
 initialize();