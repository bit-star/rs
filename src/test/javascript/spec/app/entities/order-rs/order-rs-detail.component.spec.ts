/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { OrderRsDetailComponent } from 'app/entities/order-rs/order-rs-detail.component';
import { OrderRs } from 'app/shared/model/order-rs.model';

describe('Component Tests', () => {
  describe('OrderRs Management Detail Component', () => {
    let comp: OrderRsDetailComponent;
    let fixture: ComponentFixture<OrderRsDetailComponent>;
    const route = ({ data: of({ order: new OrderRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [OrderRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(OrderRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OrderRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.order).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
