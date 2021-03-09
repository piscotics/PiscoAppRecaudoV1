import { TestBed } from '@angular/core/testing';
import { PrintService } from './print.service';
describe('PrintService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PrintService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=print.service.spec.js.map