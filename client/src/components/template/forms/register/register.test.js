import { before, close, actions, page } from "_helpers/test.utils";

const { selector, inputSelector, action } = actions;

const nameInput = (text) => inputSelector("firstName", text);
const surNameInput = (text) => inputSelector("lastName", text);
const emailInput = (text) => inputSelector("email", text);
const passwordInput = (text) => inputSelector("password", text);
const passwordConfirmInput = (text) =>
  inputSelector("passwordConfirmation", text);

const submitButton = async () =>
  await page.evaluate(() => {
    [...document.querySelectorAll(".button")]
      .find((element) => element.textContent === "Create Account")
      .click();
  });

before("http://localhost:3000/registration");

test("Name is required", async () => {
  await selector(".register");
  await surNameInput("Markuszewski");
  await emailInput("adrian991999@wp.pl");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".error", "To pole jest wymagane");
}, 100000);

test("surName is required", async () => {
  await selector(".register");
  await nameInput("adrian");
  await emailInput("adrian991999@wp.pl");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".error", "To pole jest wymagane");
}, 1000000);

test("email is required", async () => {
  await selector(".register");
  await nameInput("adrian");
  await surNameInput("Markuszewski");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".error", "To pole jest wymagane");
}, 1000000);

test("password is required", async () => {
  await selector(".register");
  await nameInput("adrian");
  await surNameInput("Markuszewski");
  await emailInput("adrian991999@wp.pl");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".error", "Hasło musi się składać z minimum 6 znaków");
}, 10000000);

test("the password must be the same", async () => {
  await selector(".register");
  await nameInput("adrian");
  await surNameInput("Markuszewski");
  await emailInput("adrian991999@wp.pl");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefag");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".error", "Hasła muszą być takie same");
}, 1000000);

test("Email already exist", async () => {
  await selector(".register");
  await nameInput("adrian");
  await surNameInput("Markuszewski");
  await emailInput("adrian991999@wp.pl");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".alert__error", "Email already exists");
}, 1000000);

test("register success", async () => {
  await selector(".register");
  await nameInput("adrian");
  await surNameInput("Markuszewski");
  await emailInput("adriasn991999@wp.pl");
  await passwordInput("abcdefg");
  await passwordConfirmInput("abcdefg");
  await page.click(`[name='select']`);
  await submitButton();
  await action(".alert__success", "Rejestracja zakończona powodzeniem");
}, 1000000);

close();
