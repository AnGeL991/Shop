import { page, before, close, actions } from "_helpers/test.utils";

const { selector, action, inputSelector } = actions;

const inputEmail = async (email) => inputSelector("email", email);
const inputPassword = async (password) => inputSelector("password", password);

const submitButton = async () =>
  await page.evaluate(() => {
    [...document.querySelectorAll(".button")]
      .find((element) => element.textContent === "Log in")
      .click();
  });

before("http://localhost:3000/login");

test("login required", async () => {
  await selector(".login");
  await inputPassword("123456");
  await submitButton();
  await action(".error", "To pole jest wymagane");
}, 100000);

test("password required", async () => {
  await selector(".login");
  await inputEmail("adrian991999@wp.pl");
  await submitButton();
  await action(".error", "Hasło musi się składać z minimum 6 znaków");
}, 100000);

test("email no exist", async () => {
  await selector(".login");
  await inputEmail("adrian991992@wp.pl");
  await inputPassword("123456");
  await submitButton();
  await action(".error_big>label", "Email lub hasło są nie prawidłowe");
}, 100000);

test("password is wrong", async () => {
  await selector(".login");
  await inputEmail("adrian991999@wp.pl");
  await inputPassword("dsadawadsad");
  await submitButton();
  await action(".error_big>label", "Email lub hasło są nie prawidłowe");
}, 100000);

test("login success", async () => {
  await selector(".login");
  await inputEmail("adrian991999@wp.pl");
  await inputPassword("123456");
  await submitButton();
  await page.waitForSelector(".myAccount__entryTitle");
}, 100000);

close();
