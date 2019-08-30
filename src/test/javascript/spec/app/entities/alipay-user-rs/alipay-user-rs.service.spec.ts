/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AlipayUserRsService } from 'app/entities/alipay-user-rs/alipay-user-rs.service';
import { IAlipayUserRs, AlipayUserRs } from 'app/shared/model/alipay-user-rs.model';

describe('Service Tests', () => {
  describe('AlipayUserRs Service', () => {
    let injector: TestBed;
    let service: AlipayUserRsService;
    let httpMock: HttpTestingController;
    let elemDefault: IAlipayUserRs;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(AlipayUserRsService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new AlipayUserRs(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign({}, elemDefault);
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a AlipayUserRs', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new AlipayUserRs(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a AlipayUserRs', async () => {
        const returnedFromService = Object.assign(
          {
            userId: 'BBBBBB',
            avatar: 'BBBBBB',
            nickName: 'BBBBBB',
            mobile: 'BBBBBB',
            gender: 'BBBBBB',
            countryCode: 'BBBBBB',
            province: 'BBBBBB',
            city: 'BBBBBB',
            accessToken: 'BBBBBB',
            alipayUserId: 'BBBBBB',
            authTokenType: 'BBBBBB',
            expiresIn: 'BBBBBB',
            reExpiresIn: 'BBBBBB',
            refreshToken: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of AlipayUserRs', async () => {
        const returnedFromService = Object.assign(
          {
            userId: 'BBBBBB',
            avatar: 'BBBBBB',
            nickName: 'BBBBBB',
            mobile: 'BBBBBB',
            gender: 'BBBBBB',
            countryCode: 'BBBBBB',
            province: 'BBBBBB',
            city: 'BBBBBB',
            accessToken: 'BBBBBB',
            alipayUserId: 'BBBBBB',
            authTokenType: 'BBBBBB',
            expiresIn: 'BBBBBB',
            reExpiresIn: 'BBBBBB',
            refreshToken: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a AlipayUserRs', async () => {
        const rxPromise = service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
