# Responsive Bootstrap Webpage
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)


Create the webpage shown below in the reference image using **only** Bootstrap - no CSS should be necessary.

#### Instructions
1. Use the `link` tag to link to the Bootstrap CDN.
2. For the navbar, use bootstrap's `navbar` component.
3. Make sure your homepage is responsive. and contains a carousel with at least one slide.
4. Create a `card` section using bootstrap's `card` component:
    - A card with a header and body
5. use bootstap's row section to create a grid like layout. 
    - Each card should be in a row, containing an image and some text.
6. lastly, Create a `footer` section for your page using bootstrap's `footer` component.

## The desktop overview

![The overview](./images/desktop.png "The general overview")

## The mobile overview

![The overview](./images/mobile.png "The mobile overview")

## Keep in mind

- Notice the layout differences in the mobile version by following the link below

- Try and make your webpage as close to the reference as possible

[Live Version](https://hsnakk.github.io/UIB_Framework_Bootstrap_Exercise-1/)

[//]: # (autograding info start)
## Results


### UIB - Responsive Bootstrap Webpage

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Index file should contain appropriate meta tags |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Index file Should contain a title tag that is not empty |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Navbar Should exist on the Page |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Navbar Should be responsive and collapse on smaller screens |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Upon page resize toggle menu should appear |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Carousel exists and should change background upon swipe |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | Page Should contain 3 Bootstrap card components |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | Page Should contain 3 row sections, Each with an image |



[Results Details](https://github.com/DigitalCareerInstitute/UIB-frameworks-responsive-bootstrap-webpage/actions)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-frameworks-responsive-bootstrap-webpage/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)