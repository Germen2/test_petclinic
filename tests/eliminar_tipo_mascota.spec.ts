import {test, expect} from "@playwright/test";

test("eliminar_tipo_mascota", async ({page}) => {
	await page.goto("http://localhost:8080");
	await page.getByRole("link", {name: "Pet Types"}).click();
	await page.getByRole("button", {name: "Delete"}).nth(1).click();
});
