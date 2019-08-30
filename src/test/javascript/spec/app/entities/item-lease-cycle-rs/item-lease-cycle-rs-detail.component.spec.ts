/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RsTestModule } from '../../../test.module';
import { ItemLeaseCycleRsDetailComponent } from 'app/entities/item-lease-cycle-rs/item-lease-cycle-rs-detail.component';
import { ItemLeaseCycleRs } from 'app/shared/model/item-lease-cycle-rs.model';

describe('Component Tests', () => {
  describe('ItemLeaseCycleRs Management Detail Component', () => {
    let comp: ItemLeaseCycleRsDetailComponent;
    let fixture: ComponentFixture<ItemLeaseCycleRsDetailComponent>;
    const route = ({ data: of({ itemLeaseCycle: new ItemLeaseCycleRs(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RsTestModule],
        declarations: [ItemLeaseCycleRsDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(ItemLeaseCycleRsDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ItemLeaseCycleRsDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.itemLeaseCycle).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
