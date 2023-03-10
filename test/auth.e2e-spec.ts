import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handle a signup request', () => {
    const email = 'email21@gmail.com';

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email,
        password: 'email21',
      })
      .expect(201)
      .then((response) => {
        const { id, email } = response.body;

        expect(id).toBeDefined();
        expect(email).toEqual(email);
      });
  });
});
