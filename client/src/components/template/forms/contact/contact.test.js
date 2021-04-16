import { page,actions, before, close } from "_helpers/test.utils";

const { selector, inputSelector,action } = actions;

const nameInput = (text) =>inputSelector('firstName',text);
const emailInput = (email) =>inputSelector('email',email);
const subjectInput = (subject) =>inputSelector('subject',subject);
const messageInput =(message) => inputSelector('message',message);


const submitButton = async () =>
  await page.evaluate(() => {
    [...document.querySelectorAll(".button")]
      .find((element) => element.textContent === "Send")
      .click();
  });


before("http://localhost:3000/contact");

test("message from user", async () => {
  await selector(".contactForm__form");
  await nameInput('Adrian');
  await emailInput('adrian@wp.pl');
  await subjectInput('test');
  await messageInput('jakis tam przykładowy tekst')
  await submitButton();
},10000);

test("message without name", async () => {
    await selector(".contactForm__form");
    await emailInput('adrian@wp.pl');
    await subjectInput('test');
    await messageInput('jakis tam przykładowy tekst')
    await submitButton();
    await action('.error','To pole jest wymagane')
  },10000);

  test("message without email", async () => {
    await selector(".contactForm__form");
    await nameInput('Adrian');
    await subjectInput('test');
    await messageInput('jakis tam przykładowy tekst')
    await submitButton();
    await action('.error','To pole jest wymagane')
  },10000);
    
  test("message without subject", async () => {
    await selector(".contactForm__form");
    await nameInput('Adrian');
    await emailInput('adrian@wp.pl');
    await messageInput('jakis tam przykładowy tekst')
    await submitButton();
    await action('.error','Proszę wpisać temat wiadomości')
  },10000);
      
  test("message without message", async () => {
    await selector(".contactForm__form");
    await nameInput('Adrian');
    await emailInput('adrian@wp.pl');
    await subjectInput('test');
    await submitButton();
    await action('.error','Proszę wpisać treść wiadomości')
  },10000);

close();