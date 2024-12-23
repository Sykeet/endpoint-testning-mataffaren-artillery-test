const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('http://localhost:4001/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Kött, chark & fågel' }).click();
  await page.getByRole('heading', { name: 'Prinskorv' }).click();
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByText('Smör Normalsaltat 82%64,90 kr').click();
  await page.getByRole('img').click();
  await page.getByRole('link', { name: 'Ägg', exact: true }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Ägg 15p Frigående Inomhus Medium39,90 kr$/ })
    .getByRole('heading')
    .click();
  await page.getByRole('link', { name: 'Vegetariskt' }).nth(1).click();
  await page.getByRole('link', { name: 'Fryst vegetariskt' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Vegetariska Delikatessbullar Fryst48,90 kr$/ })
    .getByRole('img')
    .click();
  await page.getByRole('link', { name: 'Dryck' }).click();
  await page.getByRole('link', { name: 'Öl & cider' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Melleruds Pilsner Eko 0,5% Alkfri Glas12,50 kr$/ })
    .getByRole('img')
    .click({ button: 'right' });
  await page
    .locator('div')
    .filter({ hasText: /^Melleruds Pilsner Eko 0,5% Alkfri Glas12,50 kr$/ })
    .getByRole('img')
    .click();
  await page.getByRole('link', { name: 'Saft & stilldrinks' }).dblclick();
  await page.getByRole('link', { name: 'Stilldrinks', exact: true }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Pärondryck Mindre Socker Fruktdryck Tetra11,90 kr$/ })
    .getByRole('img')
    .click();
  await page.getByRole('link', { name: 'Glögg' }).click();
  await page.getByRole('heading', { name: 'Glögg Röd Koncentrat Alkfri' }).click();
  await page.getByRole('link', { name: 'Djur', exact: true }).click();
  await page.getByRole('link', { name: 'Hund' }).click();
  await page.getByRole('heading', { name: 'Twisted Stick Duck' }).click();
  await page.getByRole('link', { name: 'Tobak' }).click();
  await page.getByRole('link', { name: 'Nikotinportioner' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^Velo Crispy Peppermint Tobaksfritt Snus41,90 kr$/ })
    .getByRole('heading')
    .click();

  // ---------------------
});
