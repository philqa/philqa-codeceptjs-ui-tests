/// <reference path='../../steps.d.ts' />
import {HomePage} from '../pages/home.po';

Feature('Home');

let homePage;

Before(I => {
    I.amOnPage('/');
    homePage = new HomePage(I);
});

Scenario('home page loads', I => {
    I.see('Quality Assured');
    I.see('Automation, performance, dev, testing & everything in between');
});