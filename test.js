/// <reference path="./steps.d.ts" />

Feature('Test.js');

Scenario('Home', (I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.see('Menu');
I.see("Belangrijke thema\'s");
I.see("Aangifte doen");
I.see("Toeslagen");
I.see("Ondernemers");
I.see("Betalen en ontvangen");
I.see("Douane");
I.see("Intermediairs");
I.see("Auto en vervoer");
I.see("Alles over digitale post");
I.see("Werk en inkomen");
I.see("Woning");
I.see("Schenken en schenkbelasting");
I.see("Erven en erfbelasting");
I.see("Relatie en familie");
I.see("Nieuws");
I.see("Actueel");
I.see("Verstoringen");
I.see("Belangrijke datums");
I.see("Over de Belastingdienst");
I.see("Contact");
I.see("Over de organisatie");
I.see("Werken bij de Belastingdienst");
I.see("Help");
I.saveScreenshot("home-top.png");
I.scrollTo("footer");
I.saveScreenshot('home-bottom.png');
I.seeElement({css: 'section.bld-logo'});
});

Scenario('Inloggen',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Inloggen');
I.saveScreenshot('inloggen-home.png');
I.click('Mijn Belastingdienst');
I.wait(5);
I.saveScreenshot('Mijn Belastingdienst.png');
I.amOnPage('http://www.belastingdienst.nl');

I.click('Inloggen');
I.click('Mijn toeslagen');
I.wait(5);
I.saveScreenshot('Mijn Toeslagen.png');

I.amOnPage('http://www.belastingdienst.nl');
I.click('Inloggen');
I.click('Voor ondernemers');
I.wait(5);
I.saveScreenshot('Voor ondernemers.png');
});

Scenario('Menu',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.saveScreenshot('Menu.png');
I.click('Toeslagen');
I.wait(5);
I.saveScreenshot('Toeslagen.png');
I.amOnPage('http://www.belastingdienst.nl');
});

Scenario('Aangifte doen',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.see('Menu');
I.click('Menu');
I.click('Aangifte doen');
I.wait(3);
I.saveScreenshot('FP - aangifte doen.png');
I.scrollTo("footer");
I.saveScreenshot('FP - aangifte doen - bottom.png');
});

Scenario('Toeslagen',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Toeslagen');
I.wait(3);
I.saveScreenshot('FP - Toeslagen.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Toeslagen - bottom.png');

});

Scenario('Betalen en ontvangen',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Betalen en ontvangen');
I.wait(3);
I.saveScreenshot('FP - Betalen en ontvangen.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Betalen en ontvangen - bottom.png');
});

Scenario('Douane',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Douane');
I.wait(3);
I.saveScreenshot('FP - Douane.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Douane - bottom.png');
});

Scenario('Douane voor bedrijven',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Douane voor bedrijven');
I.wait(3);
I.saveScreenshot('FP - Douane voor bedrijven.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Douane voor bedrijven - bottom.png');
});

Scenario('Intermediairs',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Intermediairs');
I.wait(3);
I.saveScreenshot('FP - Intermediairs.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Intermediairs - bottom.png');
});

Scenario('Auto en vervoer',(I) => {
I.resizeWindow('maximize');
I.amOnPage('http://www.belastingdienst.nl');
I.click('Menu');
I.click('Auto en vervoer');
I.wait(3);
I.saveScreenshot('FP - Auto en vervoer.png');
I.scrollTo("footer");
I.saveScreenshot('FP - Auto en vervoer - bottom.png');
});
