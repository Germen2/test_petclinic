import {test, expect} from "@playwright/test";

test("agregar_vet", async ({page}) => {
	await page.goto("http://localhost:8080");
	await page.getByRole("button", {name: "Veterinarians"}).click();
	await page.getByRole("link", {name: "Add New"}).click();
	await page.getByRole("textbox", {name: "First Name"}).fill("ab");
	await page.getByRole("textbox", {name: "Last Name"}).fill("cd");
	await page.getByRole("button", {name: "Save Vet"}).click();
});
