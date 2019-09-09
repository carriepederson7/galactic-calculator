## Galactic Calculator

#### Back-end logic for to calculate age and years left to live on a variety of planets. Project utilizes ES6 features including classes, let and const. Dependencies are managed with npm. Webpack is used to lint, bundle, and process code.9.6.19
#### By Carrie Schmid

## Description

#### The calculator will take a person’s age in years and create a class that do the following:
* _Returns their age in Mercury years. (A Mercury year is .24 Earth years.)_
* _Returns their age in Venus years. (A Venus year is .62 Earth years.)_
* _Returns their age in Mars years. (A Mars year is 1.88 Earth years.)_
* _Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)_
* _Determines how many years a user has left to live on each plane, based on the age they expect to live until._
* _If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy on  each planet._



| Spec           | Input          |Output       |
| :------------- | :------------- |             |
| It should take age in Earth years and return in Mercury years | 40  |166 |
| It should take age in Earth years and return in Venus years| 40       |64   |
|It should take age in Earth years and return in Mars years | 40  |21   |
| It should take age in Earth years and return in Jupiter years  | 40      |3  |
| It should take age in Earth years and return in Jupiter years  | 40      |3  |
| It should calculate life expectancy on Mercury based on current age and expected age of death  | 40, 85    | 186 years to live  |
| It should calculate life expectancy on Mercury based on current age and expected age of death  | 40, 85    | 186 years to live  |
| It should calculate life expectancy on Venus based on current age and expected age of death  | 40, 85    | 72 years to live  |
| It should calculate life expectancy on Mars based on current age and expected age of death  | 40, 85    | 23 years to live  |
| It should calculate life expectancy on Juipter based on current age and expected age of death  | 40, 85    | 3 years to live  |
| It should congratulate user on exceeding life expectancy on Earth | 85,86    | You have lived one year past your expected lifetime!  |
| It should congratulate user on exceeding life expectancy on Mercury | 85,86    | You have lived 4.1 years past your expected lifetime!  |
| It should congratulate user on exceeding life expectancy on Venus | 85,86    | You have lived 1.6 years past your expected lifetime!  |
| It should congratulate user on exceeding life expectancy on Mars | 85,86    | You have lived .5 years past your expected lifetime!  |
| It should congratulate user on exceeding life expectancy on Jupiter | 85,86    | You have lived .08 years past your expected lifetime!  |


## Setup/Installation Requirements

* Clone the repository at https://github.com/carriepederson7/beep-boop.git
* Open index.html in browser


## Known Bugs

There are no known bugs.

## Support and contact details

Carrie Schmid, carriepederson7@gmail.com

## Technologies Used

JavaScript

### License

Copyright (c) 2019 **Carrie Schmid**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
