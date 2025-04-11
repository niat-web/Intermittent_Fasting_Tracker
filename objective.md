# Intermittent_Fasting_Tracker

## Objective
This project implements a simple Intermittent Fasting Tracker using JavaScript, HTML, and CSS. It allows users to select a pre-defined fasting plan or create a custom one, track their fasting time, monitor water intake, and receive motivational tips. The core functionalities include starting and stopping the timer, managing user inputs for custom plans, updating the UI with real-time data, and toggling dark mode.

## Output
<iframe src="https://niat-web.github.io/Intermittent_Fasting_Tracker" height="1000" width="300" title="Intermittent_Fasting_Tracker"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Dark/Light Mode Toggle
- Selection of predefined fasting plans (16:8, 18:6, 20:4, OMAD, 5:2, custom)
- Custom fasting schedule input (fasting hours, eating hours)
## UI Enhancements
- Real-time timer display showing elapsed fasting time
- Motivational tip display
## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | The UI switches between dark and light themes when the toggle button is clicked. |
| Develop Fasting Timer | The timer counts down the fasting time and updates the display in real-time, which stops once the timer reaches zero |
| Add Water Intake Tracker |  Users can input water amount and the total intake is displayed and updated. |
| Display Motivational Tips | Random motivational tips are displayed periodically to encourage users. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to update the timer, status, and motivational tips on the page. Also used to toggle dark mode and hide/show custom schedule fields. |
| Event Listeners | Used to handle form submissions, button clicks (start, stop, add water), and input changes (fasting hours). |
| Timers (setInterval) | Used to update the fasting timer every second. |
| Local Storage | Used to store and retrieve the last fasting plan selected by the user. |
| Functions | Used to modularize the code and perform specific tasks such as updating the time, starting and stopping fasting, validating input, and updating motivational tips. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| N/A | N/A | No external APIs are used in this project. |

## MISC Section:

### 1. Formulas/Calculations:
- The remaining fasting time is calculated by subtracting the elapsed time from the total fasting time in milliseconds. The fasting time from the user is converted from hours to milliseconds by multiplying by `3600000` (60 seconds * 60 minutes * 1000 milliseconds).
```
remainingTime = fastingTime * 3600000 - timeElapsed;
```
- The hours, minutes, and seconds are then extracted from the `remainingTime` using the `Math.floor()` method and modulo operator (`%`) to calculate the remaining time to present in a user-friendly manner.
- Total water intake is updated with the water amount given by user using the "+" assignment operator.
```
totalWaterIntake += waterAmount;
```
### 2. Array Data:
- `motivationalTips = ["You're halfway there!", "Ketosis likely active now.", "Every drop counts!", "Stay strong!", "Consistency is key."]`
  - This array stores a list of motivational messages that are displayed to the user during their fasting period. A random tip is selected from this array and displayed to the user.
- `allowedPlans = ["16:8", "18:6", "20:4", "OMAD", "5:2", "custom"]`
  - This array contains the list of predefined fasting plans displayed to the user.