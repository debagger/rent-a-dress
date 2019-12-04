"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var catalgItemOption_1 = require("./catalgItemOption");
var catalogItem = /** @class */ (function () {
    function catalogItem() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(), class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], catalogItem.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(), class_validator_1.IsString(),
        __metadata("design:type", String)
    ], catalogItem.prototype, "caption", void 0);
    __decorate([
        typeorm_1.Column(), class_validator_1.IsString(),
        __metadata("design:type", String)
    ], catalogItem.prototype, "desc", void 0);
    __decorate([
        typeorm_1.Column(), class_validator_1.IsString(),
        __metadata("design:type", String)
    ], catalogItem.prototype, "img", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return catalgItemOption_1.catalogItemOption; }, function (option) { return option.catalogItem; }),
        class_validator_1.IsOptional(),
        __metadata("design:type", Array)
    ], catalogItem.prototype, "options", void 0);
    catalogItem = __decorate([
        typeorm_1.Entity(),
        typeorm_1.TableInheritance({ column: "type" })
    ], catalogItem);
    return catalogItem;
}());
exports.catalogItem = catalogItem;
//# sourceMappingURL=catalogItem.js.map