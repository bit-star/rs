/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { OrderItemRsDetailComponent } from 'app/entities/order-item-rs/order-item-rs-detail.component';
import { OrderItemRs } from 'app/shared/model/order-item-rs.model';

describe('Component Tests', () => {
  describe('OrderItemRs Management Detail Component', () => {
    let comp: OrderItemRsDetailComponent;
    let fixture: ComponentFixture<OrderItemRsDetailComponent>;
    const route = ({ data: of({ orderItem: new OrderItemRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [OrderItemRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(OrderItemRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OrderItemRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.orderItem).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
