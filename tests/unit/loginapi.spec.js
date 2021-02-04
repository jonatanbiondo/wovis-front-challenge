// users.test.js
import api from '../../src/api/api';
import {login} from '../../src/api/login';

jest.mock('../../src/api/api');

test('Should simulate succesfull login',async () => {
  const serviceResponse = {"success":true};

  const mockResponse = {
    "status":200,
    "statusText":"OK",
    'data': {
      'response':{
        'token':"asdasasdasd",
        "expires":1567619449,
        "user_id":21432
      }
    }
  };
  api.post.mockResolvedValue(mockResponse);
 
  const data = await login("algo@dasdasd.com","password") 
  return  expect(data).toEqual(serviceResponse);
});


test('Should simulate fail login',async () => {
  const serviceResponse =  {"success":false, "message": "some error message"}
  api.post.mockRejectedValue(new Error('some error message'));
  const data = await login("algo@dasdasd.com","password") 
  return  expect(data).toEqual(serviceResponse);
});