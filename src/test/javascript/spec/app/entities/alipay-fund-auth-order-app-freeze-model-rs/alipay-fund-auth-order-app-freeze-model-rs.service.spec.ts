/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AlipayFundAuthOrderAppFreezeModelRsService } from 'app/entities/alipay-fund-auth-order-app-freeze-model-rs/alipay-fund-auth-order-app-freeze-model-rs.service';
import {
  IAlipayFundAuthOrderAppFreezeModelRs,
  AlipayFundAuthOrderAppFreezeModelRs
} from 'app/shared/model/alipay-fund-auth-order-app-freeze-model-rs.model';

describe('Service Tests', () => {
  describe('AlipayFundAuthOrderAppFreezeModelRs Service', () => {
    let injector: TestBed;
    let service: AlipayFundAuthOrderAppFreezeModelRsService;
    let httpMock: HttpTestingController;
    let elemDefault: IAlipayFundAuthOrderAppFreezeModelRs;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(AlipayFundAuthOrderAppFreezeModelRsService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new AlipayFundAuthOrderAppFreezeModelRs(
        0,
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

      it('should create a AlipayFundAuthOrderAppFreezeModelRs', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new AlipayFundAuthOrderAppFreezeModelRs(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a AlipayFundAuthOrderAppFreezeModelRs', async () => {
        const returnedFromService = Object.assign(
          {
            orderTitle: 'BBBBBB',
            outOrderNo: 'BBBBBB',
            outRequestNo: 'BBBBBB',
            payeeUserId: 'BBBBBB',
            payeeLogonId: 'BBBBBB',
            productCode: 'BBBBBB',
            amount: 'BBBBBB',
            extraParam: 'BBBBBB',
            notifyUrl: 'BBBBBB'
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

      it('should return a list of AlipayFundAuthOrderAppFreezeModelRs', async () => {
        const returnedFromService = Object.assign(
          {
            orderTitle: 'BBBBBB',
            outOrderNo: 'BBBBBB',
            outRequestNo: 'BBBBBB',
            payeeUserId: 'BBBBBB',
            payeeLogonId: 'BBBBBB',
            productCode: 'BBBBBB',
            amount: 'BBBBBB',
            extraParam: 'BBBBBB',
            notifyUrl: 'BBBBBB'
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

      it('should delete a AlipayFundAuthOrderAppFreezeModelRs', async () => {
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
