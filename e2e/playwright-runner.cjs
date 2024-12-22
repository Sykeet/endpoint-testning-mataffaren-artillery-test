const { chromium } = require('@playwright/test');

module.exports = {
  runPlaywrightTest,
};

async function runPlaywrightTest() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Global timeout på 2 minuter
  page.setDefaultTimeout(120000);

  try {
    console.log("Running Playwright test...");

    console.log("Navigating to: Frukt och Grönt");
    await page.goto("http://127.0.0.1:4001/kategori/frukt-och-gront");

    console.log("Navigating to: Kött, chark & fågel");
    await page.getByRole("link", { name: "Kött, chark & fågel" }).click();

    console.log("Navigating to: Prinskorv (heading)");
    await page.getByRole("heading", { name: "Prinskorv" }).click();

    console.log("Navigating to: Mejeri, ost & ägg");
    await page.getByRole("link", { name: "Mejeri, ost & ägg" }).click();

    console.log("Clicking on: Smör Normalsaltat 82%");
    await page.getByText("Smör Normalsaltat 82%64,90 kr").click();

    console.log("Clicking on: Main image (img)");
    await page.getByRole("img").click();

    console.log("Navigating to: Ägg (exact)");
    await page.getByRole("link", { name: "Ägg", exact: true }).click();

    console.log("Navigating to: Ägg 15p Frigående Inomhus Medium");
    await page
      .locator("div")
      .filter({ hasText: /^Ägg 15p Frigående Inomhus Medium39,90 kr$/ })
      .getByRole("heading")
      .click();

    console.log("Navigating to: Vegetariskt (nth 1)");
    await page.getByRole("link", { name: "Vegetariskt" }).nth(1).click();

    console.log("Navigating to: Fryst vegetariskt");
    await page.getByRole("link", { name: "Fryst vegetariskt" }).click();

    console.log("Clicking on: Vegetariska Delikatessbullar Fryst");
    await page
      .locator("div")
      .filter({ hasText: /^Vegetariska Delikatessbullar Fryst48,90 kr$/ })
      .getByRole("img")
      .click();

    console.log("Navigating to: Dryck");
    await page.getByRole("link", { name: "Dryck" }).click();

    console.log("Navigating to: Öl & cider");
    await page.getByRole("link", { name: "Öl & cider" }).click();

    console.log("Clicking on: Melleruds Pilsner Eko");
    await page
      .locator("div")
      .filter({ hasText: /^Melleruds Pilsner Eko 0,5% Alkfri Glas12,50 kr$/ })
      .getByRole("img")
      .click({ button: "right" });

    console.log("Clicking on: Saft & stilldrinks");
    await page.getByRole("link", { name: "Saft & stilldrinks" }).dblclick();

    console.log("Navigating to: Stilldrinks (exact)");
    await page.getByRole("link", { name: "Stilldrinks", exact: true }).click();

    console.log("Clicking on: Pärondryck Mindre Socker Fruktdryck Tetra");
    await page
      .locator("div")
      .filter({ hasText: /^Pärondryck Mindre Socker Fruktdryck Tetra11,90 kr$/ })
      .getByRole("img")
      .click();

    console.log("Navigating to: Glögg");
    await page.getByRole("link", { name: "Glögg" }).click();

    console.log("Navigating to: Glögg Röd Koncentrat Alkfri (heading)");
    await page
      .getByRole("heading", { name: "Glögg Röd Koncentrat Alkfri" })
      .click();

    console.log("Navigating to: Djur (exact)");
    await page.getByRole("link", { name: "Djur", exact: true }).click();

    console.log("Navigating to: Hund");
    await page.getByRole("link", { name: "Hund" }).click();

    console.log("Navigating to: Twisted Stick Duck (heading)");
    await page
      .getByRole("heading", { name: "Twisted Stick Duck" })
      .click();

    console.log("Navigating to: Tobak");
    await page.getByRole("link", { name: "Tobak" }).click();

    console.log("Navigating to: Nikotinportioner");
    await page.getByRole("link", { name: "Nikotinportioner" }).click();

    console.log("Clicking on: Velo Crispy Peppermint Tobaksfritt Snus");
    await page
      .locator("div")
      .filter({
        hasText: /^Velo Crispy Peppermint Tobaksfritt Snus41,90 kr$/,
      })
      .getByRole("heading")
      .click();

    console.log("Playwright test completed successfully.");
  } catch (error) {
    console.error("Error running Playwright test:", error);
  } finally {
    await browser.close();
  }
}
