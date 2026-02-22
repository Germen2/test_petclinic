import {test, expect} from "@playwright/test";

test("editar_especialidad", async ({page}) => {
	await page.goto("http://localhost:8080");
	await page.getByRole("link", {name: "Specialties"}).click();
	await page.getByRole("button", {name: "Edit"}).nth(1).click();
	await page.locator("#name").fill("radiologyrs");
	await page.getByRole("button", {name: "Update"}).click();
});
