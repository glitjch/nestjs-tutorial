"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomersService = void 0;
var common_1 = require("@nestjs/common");
var CustomersService = /** @class */ (function () {
    function CustomersService() {
        this.users = [
            {
                id: 1,
                name: 'sam',
                dateCreated: new Date()
            },
            {
                id: 2,
                name: 'Danny',
                dateCreated: new Date()
            },
            {
                id: 1,
                name: 'Jonny',
                dateCreated: new Date()
            },
        ];
    }
    CustomersService.prototype.findCustomerById = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    CustomersService = __decorate([
        (0, common_1.Injectable)()
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
