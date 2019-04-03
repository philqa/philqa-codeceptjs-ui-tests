const I = actor();

Given(/I am viewing the homepage/, () => {
    I.amOnPage('/');
});

When(/I click the "([^"]*)" link/, (element) => {
    I.click(element);
});

Then(/I should see "([^"]*)/, (text) => {
    I.see(text);
});