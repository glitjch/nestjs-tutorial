"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CustomersController = void 0;
var common_1 = require("@nestjs/common");
var CustomersController = /** @class */ (function () {
    function CustomersController(customersService) {
        this.customersService = customersService;
    }
    CustomersController.prototype.getCustomer = function (id, req, res) {
        var customer = this.customersService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        }
        else {
            res.status(404).send({ msg: 'Customer not found!' });
        }
    };
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
        __param(1, (0, common_1.Req)()),
        __param(2, (0, common_1.Res)())
    ], CustomersController.prototype, "getCustomer");
    CustomersController = __decorate([
        (0, common_1.Controller)('customers')
    ], CustomersController);
    return CustomersController;
}());
exports.CustomersController = CustomersController;
