import {test, expect} from "@playwright/test";

// Buscar un dueño por su apellido
test("buscar_dueno", async ({page}) => {
	await page.goto("http://localhost:8080");
	await page.getByRole("button", {name: "Owners"}).click();
	await page.getByRole("link", {name: "Search"}).click();
	await page.locator("#lastName").fill("Fra");
	await page.getByRole("button", {name: "Find Owner"}).click();
});
