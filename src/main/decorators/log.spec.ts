import { LogControllerDecorator } from './log'
import { HttpResponse, HttpRequest, Controller } from '../../presentation/protocols'

describe('LogController Decorator', () => {
  test('deve garantir que está repassando a chamada', async () => {
    class ControllerStub implements Controller {
      async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = {
          statusCode: 200,
          body: {
            name: 'myname',
            email: 'myemail@email.com',
            password: '1234',
            passwordConfirmation: '1234'
          }
        }
        return httpResponse
      }
    }

    const controllerStub = new ControllerStub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')

    const sut = new LogControllerDecorator(controllerStub)
    const httpRequest = {
      body: {
        name: 'myname',
        email: 'myemail@email.com',
        password: 'mypassword',
        passwordConfirmation: 'mypassword'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})