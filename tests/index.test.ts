import { isValidEmail, isDisposableEmail } from "../lib/index"

describe('isValidEmail', function () {
     it('Should email is valid', function () {
          const domain = 'abdan@gmail.com'
          const result = isValidEmail(domain)
          expect(result).toBe(true)
     })

     it('Should email is not valid', function () {
          const domain = 'abdan%$gmail.com';
          const result = isValidEmail(domain);
          expect(result).toBe(false);
     })
})

describe('isDisposableEmail', function () {
     it('Should email is disposable', async function () {
          const domain = 'random123@mailinator.com'
          const result = await isDisposableEmail(domain)
          expect(result).toBe(true)
     }, 10000)

     it('Should email is not disposable', async function () {
          const domain = 'abdan@gmail.com';
          const result = await isDisposableEmail(domain);
          expect(result).toBe(false);
     }, 10000)
})