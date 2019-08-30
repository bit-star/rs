/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CommodityRsService } from 'app/entities/commodity-rs/commodity-rs.service';
import { ICommodityRs, CommodityRs, DeliveryMethod, CommodityStatus } from 'app/shared/model/commodity-rs.model';

describe('Service Tests', () => {
  describe('CommodityRs Service', () => {
    let injector: TestBed;
    let service: CommodityRsService;
    let httpMock: HttpTestingController;
    let elemDefault: ICommodityRs;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(CommodityRsService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new CommodityRs(
        0,
        'AAAAAAA',
        'AAAAAAA',
        0,
        0,
        0,
        0,
        'AAAAAAA',
        0,
        0,
        DeliveryMethod.ExpressDelivery,
        CommodityStatus.OnLine,
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

      it('should create a CommodityRs', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new CommodityRs(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a CommodityRs', async () => {
        const returnedFromService = Object.assign(
          {
            name: 'BBBBBB',
            remark: 'BBBBBB',
            dayRent: 1,
            weeklyRent: 1,
            monthlyRent: 1,
            deposit: 1,
            rentalMethod: 'BBBBBB',
            maxRent: 1,
            inventory: 1,
            deliveryMethod: 'BBBBBB',
            status: 'BBBBBB',
            leaseMustRead: 'BBBBBB',
            desciption: 'BBBBBB'
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

      it('should return a list of CommodityRs', async () => {
        const returnedFromService = Object.assign(
          {
            name: 'BBBBBB',
            remark: 'BBBBBB',
            dayRent: 1,
            weeklyRent: 1,
            monthlyRent: 1,
            deposit: 1,
            rentalMethod: 'BBBBBB',
            maxRent: 1,
            inventory: 1,
            deliveryMethod: 'BBBBBB',
            status: 'BBBBBB',
            leaseMustRead: 'BBBBBB',
            desciption: 'BBBBBB'
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

      it('should delete a CommodityRs', async () => {
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
