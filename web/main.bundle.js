webpackJsonp([0,3],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityDialog = (function () {
    function ActivityDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ActivityDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'activity-dialog',
            template: __webpack_require__(461),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === "function" && _a || Object])
    ], ActivityDialog);
    return ActivityDialog;
    var _a;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/activityDialog.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activityDialog_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_httpService__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityDialogService = (function () {
    function ActivityDialogService(dialog, httpService) {
        this.dialog = dialog;
        this.httpService = httpService;
    }
    ActivityDialogService.prototype.confirm = function (activity, viewContainerRef, section) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__activityDialog_component__["a" /* ActivityDialog */], config);
        dialogRef.componentInstance.durationFunctions = [
            { key: 0, value: 'MAX' },
            { key: 1, value: 'NONE' }
        ];
        dialogRef.componentInstance.durationFunction = 1;
        dialogRef.componentInstance.duration = 10;
        dialogRef.componentInstance.aggressiveDuration = 5;
        dialogRef.componentInstance.inputProdRate = true;
        dialogRef.componentInstance.activitySelected = [,];
        dialogRef.componentInstance.dialogName = 'Add';
        dialogRef.componentInstance.units = 10;
        dialogRef.componentInstance.safeProductivityRate = 1;
        dialogRef.componentInstance.aggressiveProductivityRate = 1;
        dialogRef.componentInstance.startToFinish = 0;
        dialogRef.componentInstance.unitDelta = 0;
        this.httpService.getActivities()
            .subscribe(function (activities) {
            dialogRef.componentInstance.activities = activities
                .filter(function (a) { return a.section === section; })
                .map(function (p) { return { key: p.id, value: p.name }; });
            dialogRef.componentInstance.activities.push({ key: ' ', value: 'NONE' });
            if (activity) {
                dialogRef.componentInstance.activitySelected = activity.dependencies.split(',')
                    .map(function (d) {
                    if (d !== "")
                        return +d;
                    else
                        return null;
                });
            }
        });
        var processObs = this.httpService.getProcesses()
            .subscribe(function (processes) {
            dialogRef.componentInstance.processes = processes
                .map(function (p) { return { key: p.id, value: p.name }; });
            if (activity) {
                dialogRef.componentInstance.processSelected = activity.processId;
            }
        });
        if (activity) {
            dialogRef.componentInstance.dialogName = 'Update';
            dialogRef.componentInstance.id = activity.id;
            dialogRef.componentInstance.name = activity.name;
            dialogRef.componentInstance.units = activity.units;
            dialogRef.componentInstance.safeProductivityRate = activity.safeProductivityRate;
            dialogRef.componentInstance.aggressiveProductivityRate = activity.aggressiveProductivityRate;
            dialogRef.componentInstance.duration = activity.duration;
            dialogRef.componentInstance.aggressiveDuration = activity.aggressiveDuration;
            dialogRef.componentInstance.inputProdRate = activity.inputProdRate;
            dialogRef.componentInstance.startToFinish = activity.startToFinish;
            dialogRef.componentInstance.unitDelta = activity.unitDelta;
            dialogRef.componentInstance.durationFunction = activity.durationFunction;
            dialogRef.componentInstance.name = activity.name;
            dialogRef.componentInstance.section = activity.section;
        }
        return dialogRef.afterClosed();
    };
    ActivityDialogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_httpService__["a" /* HttpService */]) === "function" && _b || Object])
    ], ActivityDialogService);
    return ActivityDialogService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/activityDialog.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessDialog = (function () {
    function ProcessDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ProcessDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'process-dialog',
            template: __webpack_require__(463),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === "function" && _a || Object])
    ], ProcessDialog);
    return ProcessDialog;
    var _a;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/processDialog.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__processDialog_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_httpService__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessDialogService = (function () {
    function ProcessDialogService(dialog, httpService) {
        this.dialog = dialog;
        this.httpService = httpService;
    }
    ProcessDialogService.prototype.confirm = function (process, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogConfig"]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__processDialog_component__["a" /* ProcessDialog */], config);
        dialogRef.componentInstance.dialogName = 'Add';
        if (process) {
            dialogRef.componentInstance.dialogName = 'Update';
            dialogRef.componentInstance.id = process.id;
            dialogRef.componentInstance.name = process.name;
        }
        return dialogRef.afterClosed();
    };
    ProcessDialogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_httpService__["a" /* HttpService */]) === "function" && _b || Object])
    ], ProcessDialogService);
    return ProcessDialogService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/processDialog.service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 235;


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(288);





if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */])().production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activityDialog_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activityDialog_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_httpService__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ActivityDialogModule = (function () {
    function ActivityDialogModule() {
    }
    ActivityDialogModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MaterialModule"].forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__activityDialog_component__["a" /* ActivityDialog */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__activityDialog_component__["a" /* ActivityDialog */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__activityDialog_service__["a" /* ActivityDialogService */],
                __WEBPACK_IMPORTED_MODULE_6__app_httpService__["a" /* HttpService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__activityDialog_component__["a" /* ActivityDialog */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], ActivityDialogModule);
    return ActivityDialogModule;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/activityDialog.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_httpService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activityDialog_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__processDialog_processDialog_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(httpService, activityDialogService, processDialogService, viewContainerRef, dialog) {
        this.httpService = httpService;
        this.activityDialogService = activityDialogService;
        this.processDialogService = processDialogService;
        this.viewContainerRef = viewContainerRef;
        this.dialog = dialog;
        this.editing = {};
        this.newEditing = {};
        this.selectedRowActivity = [];
        this.selectedDownwardRowActivity = [];
        this.selectedRowProcess = [];
        this.selectedActivity = null;
        this.linkActivities = {};
    }
    AppComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selectedActivity = selected[0];
    };
    AppComponent.prototype.onDownwardSelect = function (_a) {
        var selected = _a.selected;
        this.selectedDownwardActivity = selected[0];
    };
    AppComponent.prototype.onProcessSelect = function (_a) {
        var selected = _a.selected;
        this.selectedProcess = selected[0];
    };
    AppComponent.prototype.executeActivity = function (activity, section) {
        var _this = this;
        this.activityDialogService
            .confirm(activity, this.viewContainerRef, section)
            .subscribe(function (res) {
            if (res && !activity) {
                _this.activities = null;
                _this.httpService.addActivity({
                    name: res.name,
                    units: +res.units,
                    inputProdRate: res.inputProdRate,
                    duration: +res.duration,
                    aggressiveDuration: +res.aggressiveDuration,
                    safeProductivityRate: +res.safeProductivityRate,
                    aggressiveProductivityRate: +res.aggressiveProductivityRate,
                    startToFinish: +res.startToFinish,
                    unitDelta: +res.unitDelta,
                    durationFunction: res.durationFunction,
                    dependencies: res.activitySelected.join(',').trim(),
                    processId: res.processSelected,
                    section: section
                }).subscribe(function () {
                    _this.ngOnInit();
                });
            }
            else if (res && activity) {
                _this.activities = null;
                _this.httpService.updateActivity({
                    id: res.id,
                    name: res.name,
                    units: +res.units,
                    inputProdRate: res.inputProdRate,
                    duration: +res.duration,
                    aggressiveDuration: +res.aggressiveDuration,
                    safeProductivityRate: +res.safeProductivityRate,
                    aggressiveProductivityRate: +res.aggressiveProductivityRate,
                    startToFinish: +res.startToFinish,
                    unitDelta: +res.unitDelta,
                    durationFunction: res.durationFunction,
                    dependencies: res.activitySelected.join(',').trim(),
                    processId: res.processSelected,
                    section: res.section
                }).subscribe(function () {
                    _this.ngOnInit();
                });
            }
        }, function (error) { return alert(error); });
    };
    AppComponent.prototype.executeProcess = function (process) {
        var _this = this;
        this.processDialogService
            .confirm(process, this.viewContainerRef)
            .subscribe(function (res) {
            if (res && !process) {
                _this.processes = null;
                _this.httpService.addProcess({
                    name: res.name
                }).subscribe(function () {
                    _this.getProcesses();
                    _this.getGraph(false);
                });
            }
            else if (res && process) {
                _this.activities = null;
                _this.httpService.updateProcess({
                    id: res.id,
                    name: res.name
                }).subscribe(function () {
                    _this.getProcesses();
                    _this.getGraph(false);
                });
            }
        }, function (error) { return alert(error); });
    };
    AppComponent.prototype.deleteActivity = function (selectedActivity) {
        var _this = this;
        this.activities = null;
        this.httpService.deleteActivity(selectedActivity.id).
            subscribe(function () { return _this.ngOnInit(); }, function (error) { return alert(error); });
    };
    AppComponent.prototype.deleteProcess = function () {
        var _this = this;
        this.processes = null;
        this.httpService.deleteProcess(this.selectedProcess.id).
            subscribe(function () { return _this.ngOnInit(); }, function (error) { return alert(error); });
    };
    AppComponent.prototype.getActivities = function () {
        var _this = this;
        this.httpService.getActivities()
            .subscribe(function (activities) {
            var allActivities = activities.map(function (a) {
                a.dependenciesStr = a.dependencies.split(',').map(function (d) {
                    var match = activities.find(function (ac) { return ac.id == +d; });
                    if (match) {
                        return match.name;
                    }
                    return null;
                });
                return a;
            });
            _this.activities = allActivities.filter(function (a) { return a.section === 'UPWARD'; });
            _this.downwardActivities = allActivities.filter(function (a) { return a.section === 'DOWNWARD'; });
        }, function (error) {
            alert(error);
            /*
            let dialogRef: MdDialogRef<ErrorDialog>;
            let config = new MdDialogConfig();
            config.viewContainerRef = this.viewContainerRef;
            dialogRef = this.dialog.open(ErrorDialog, config);
            dialogRef.componentInstance.errorMessage = error;*/
        });
    };
    AppComponent.prototype.getProcesses = function () {
        var _this = this;
        this.httpService.getProcesses()
            .subscribe(function (processes) {
            _this.processes = processes;
        }, function (error) { return alert(error); });
    };
    AppComponent.prototype.getGraph = function (withCriticalPath) {
        var _this = this;
        this.httpService.getGraph(withCriticalPath)
            .subscribe(function (graphConfig) {
            graphConfig.chart.width = '1200';
            _this.graphConfig = graphConfig;
        }, function (error) { return alert(error); });
    };
    AppComponent.prototype.getLink = function () {
        var _this = this;
        this.httpService.getLink()
            .subscribe(function (link) {
            if (link != null) {
                _this.linkActivities = {
                    upwardAct: link.upwardAct.id,
                    downwardAct: link.downwardAct.id,
                    timePeriod: link.timePeriod
                };
            }
        }, function (error) { return alert(error); });
    };
    AppComponent.prototype.updateLink = function () {
        var _this = this;
        this.httpService.updateLink({
            upwardActivity: this.linkActivities.upwardAct,
            downwardActivity: this.linkActivities.downwardAct,
            timePeriod: this.linkActivities.timePeriod
        }).subscribe(function () { return _this.getLink(); });
        this.linkActivities = {};
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getActivities();
        this.getProcesses();
        this.getLink();
        this.getGraph(false);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(462),
            styles: [__webpack_require__(456)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_httpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_httpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__activityDialog_service__["a" /* ActivityDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__activityDialog_service__["a" /* ActivityDialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__processDialog_processDialog_service__["a" /* ProcessDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__processDialog_processDialog_service__["a" /* ProcessDialogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialog"]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activityDialog_module__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__processDialog_processDialog_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_highcharts_dist_HighchartsService__);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function highchartsFactory() {
    return __webpack_require__(457);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_8__activityDialog_module__["a" /* ActivityDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__processDialog_processDialog_module__["a" /* ProcessDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_11_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                    useFactory: highchartsFactory
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;
function environment() {
    return {
        production: true
    };
}
//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/environment.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/polyfills.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__processDialog_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__processDialog_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_httpService__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProcessDialogModule = (function () {
    function ProcessDialogModule() {
    }
    ProcessDialogModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MaterialModule"].forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__processDialog_component__["a" /* ProcessDialog */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__processDialog_component__["a" /* ProcessDialog */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__processDialog_service__["a" /* ProcessDialogService */],
                __WEBPACK_IMPORTED_MODULE_6__app_app_httpService__["a" /* HttpService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__processDialog_component__["a" /* ProcessDialog */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], ProcessDialogModule);
    return ProcessDialogModule;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/processDialog.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "md-toolbar {\r\n    background-color: beige;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"cep-form\">\r\n    <span>{{dialogName}} Activity</span>\r\n    <form #formCtrl=\"ngForm\">\r\n        <md-input-container>\r\n            <input md-input placeholder=\"Name\" [ngModel]=\"name\" (ngModelChange)=\"name = $event\" required name=\"name\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input md-input placeholder=\"Quantity\" [(ngModel)]=\"units\" required name=\"units\">\r\n        </md-input-container>\r\n        <md-slide-toggle [ngModel]=\"inputProdRate\" (ngModelChange)=\"inputProdRate = $event\" required name=\"inputProdRate\">Input Productive Rates</md-slide-toggle>\r\n        <md-input-container *ngIf=\"inputProdRate === true\">\r\n            <input md-input placeholder=\"Safe Productivity Rate\" [ngModel]=\"safeProductivityRate\" (ngModelChange)=\"safeProductivityRate = $event\"\r\n                required name=\"safeProductivityRate\">\r\n        </md-input-container>\r\n        <md-input-container *ngIf=\"inputProdRate === true\">\r\n            <input md-input placeholder=\"Aggressive Productivity Rate\" [ngModel]=\"aggressiveProductivityRate\" name=\"aggressiveProductivityRate\"\r\n                (ngModelChange)=\"aggressiveProductivityRate = $event\" required>\r\n        </md-input-container>\r\n        <md-input-container *ngIf=\"inputProdRate === false\">\r\n            <input md-input placeholder=\"Safe Duration\" [ngModel]=\"duration\" (ngModelChange)=\"duration = $event\"\r\n                required name=\"duration\">\r\n        </md-input-container>\r\n        <md-input-container *ngIf=\"inputProdRate === false\">\r\n            <input md-input placeholder=\"Aggressive Duration\" [ngModel]=\"aggressiveDuration\" name=\"aggressiveDuration\"\r\n                (ngModelChange)=\"aggressiveDuration = $event\" required>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input md-input placeholder=\"Finish To Start\" [ngModel]=\"startToFinish\" (ngModelChange)=\"startToFinish = $event\" required\r\n                name=\"startToFinish\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input md-input placeholder=\"Quantity Delta\" [ngModel]=\"unitDelta\" (ngModelChange)=\"unitDelta = $event\" required name=\"unitDelta\">\r\n        </md-input-container>\r\n        <md-select placeholder=\"Process\" [(ngModel)]=\"processSelected\" name=\"processSelected\" (ngModelChange)=\"processSelected = $event\">\r\n            <md-option *ngFor=\"let p of processes\" [value]=\"p.key\">\r\n                {{p.value}}\r\n            </md-option>\r\n        </md-select>\r\n        <md-select placeholder=\"Duration Function\" [(ngModel)]=\"durationFunction\" name=\"durationFunction\" required>\r\n            <md-option *ngFor=\"let vf of durationFunctions\" [value]=\"vf.key\">\r\n                {{vf.value}}\r\n            </md-option>\r\n        </md-select>\r\n        <md-select placeholder=\"Activity\" [(ngModel)]=\"activitySelected[0]\" name=\"activitySelected[0]\" required>\r\n            <md-option *ngFor=\"let act of activities\" [value]=\"act.key\">\r\n                {{act.value}}\r\n            </md-option>\r\n        </md-select>\r\n        <md-select *ngIf=\"durationFunction === 0\" placeholder=\"Activity\" [(ngModel)]=\"activitySelected[1]\" name=\"activitySelected[1]\">\r\n            <md-option *ngFor=\"let act of activities\" [value]=\"act.key\">\r\n                {{act.value}}\r\n            </md-option>\r\n        </md-select>\r\n        <section>\r\n            <button type=\"submit\" md-raised-button (click)=\"dialogRef.close(this)\" [disabled]=\"!formCtrl.form.valid\">Save</button>\r\n            <button type=\"button\" md-button (click)=\"dialogRef.close()\">Cancel</button>\r\n        </section>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>Mod Scheduler</md-toolbar>\r\n<md-tab-group>\r\n  <md-tab label=\"Offsite Activities\">\r\n    <md-toolbar class=\"button-toolbar\">\r\n      <button (click)=\"executeActivity(null, 'UPWARD')\" md-raised-button>Add Activity</button>\r\n      <button [disabled]=\"!selectedActivity\" (click)=\"executeActivity(selectedActivity, 'UPWARD')\" md-raised-button>Update Activity</button>\r\n      <button [disabled]=\"!selectedActivity\" (click)=\"deleteActivity(selectedActivity)\" md-raised-button>Delete Activity</button>\r\n    </md-toolbar>\r\n    <ngx-datatable class=\"material\" [rows]=\"activities\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [selected]=\"selectedRowActivity\"\r\n      [selectionType]=\"'single'\" [columnMode]=\"'force'\" (select)='onSelect($event)'>\r\n      <ngx-datatable-column name=\"Name\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Quantity\" prop=\"units\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Duration\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Agg Duration\" prop=\"aggressiveDuration\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Safe PR\" prop=\"safeProductivityRate\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Agg PR\" prop=\"aggressiveProductivityRate\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Finish/Start\" prop=\"startToFinish\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Quantity Delta\" prop=\"unitDelta\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Function\" prop=\"durationFunction\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Dependencies\" prop=\"dependenciesStr\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Process\" prop=\"processName\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n    <md-progress-spinner *ngIf=\"!activities\" mode=\"indeterminate\"></md-progress-spinner>\r\n  </md-tab>\r\n  <md-tab label=\"OnSite Activities\">\r\n    <md-toolbar class=\"button-toolbar\">\r\n      <button (click)=\"executeActivity(null, 'DOWNWARD')\" md-raised-button>Add Activity</button>\r\n      <button [disabled]=\"!selectedDownwardActivity\" (click)=\"executeActivity(selectedDownwardActivity,'DOWNWARD')\" md-raised-button>Update Activity</button>\r\n      <button [disabled]=\"!selectedDownwardActivity\" (click)=\"deleteActivity(selectedDownwardActivity)\" md-raised-button>Delete Activity</button>\r\n    </md-toolbar>\r\n    <ngx-datatable class=\"material\" [rows]=\"downwardActivities\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\r\n      [selected]=\"selectedDownwardRowActivity\" [selectionType]=\"'single'\" [columnMode]=\"'force'\" (select)='onDownwardSelect($event)'>\r\n      <ngx-datatable-column name=\"Name\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Quantity\" prop=\"units\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Duration\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Agg Duration\" prop=\"aggressiveDuration\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Safe PR\" prop=\"safeProductivityRate\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Agg PR\" prop=\"aggressiveProductivityRate\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Finish/Start\" prop=\"startToFinish\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Quantity Delta\" prop=\"unitDelta\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Function\" prop=\"durationFunction\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Dependencies\" prop=\"dependenciesStr\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Process\" prop=\"processName\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n    <md-progress-spinner *ngIf=\"!activities\" mode=\"indeterminate\"></md-progress-spinner>\r\n  </md-tab>\r\n  <md-tab label=\"Processes\">\r\n    <md-toolbar class=\"button-toolbar\">\r\n      <button (click)=\"executeProcess(null)\" md-raised-button>Add Process</button>\r\n      <button [disabled]=\"!selectedProcess\" (click)=\"executeProcess(selectedProcess)\" md-raised-button>Update Process</button>\r\n      <button [disabled]=\"!selectedProcess\" (click)=\"deleteProcess()\" md-raised-button>Delete Process</button>\r\n    </md-toolbar>\r\n    <ngx-datatable class=\"material\" [rows]=\"processes\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [selected]=\"selectedRowProcess\"\r\n      [selectionType]=\"'single'\" [columnMode]=\"'force'\" (select)='onProcessSelect($event)'>\r\n      <ngx-datatable-column name=\"Name\">\r\n        <template ngx-datatable-cell-template let-value=\"value\">\r\n          {{value}}\r\n        </template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n    <md-progress-spinner *ngIf=\"!processes\" mode=\"indeterminate\"></md-progress-spinner>\r\n  </md-tab>\r\n  <md-tab label=\"Controlling Link\">\r\n    <md-toolbar class=\"button-toolbar\">\r\n      <button (click)=\"updateLink()\" md-raised-button>Update</button>\r\n    </md-toolbar>\r\n    <div class=\"form-container\">\r\n      <md-select placeholder=\"Offsite Activity\" [ngModel]=\"linkActivities.upwardAct\" (ngModelChange)=\"linkActivities.upwardAct = $event\" name=\"upwardActivity\"\r\n        required>\r\n        <md-option *ngFor=\"let act of activities\" [value]=\"act.id\">{{ act.name }}</md-option>\r\n      </md-select>\r\n      <md-select placeholder=\"OnSite Activity\" [ngModel]=\"linkActivities.downwardAct\" (ngModelChange)=\"linkActivities.downwardAct = $event\" name=\"downwardActivity\"\r\n      required>\r\n        <md-option *ngFor=\"let act of downwardActivities\" [value]=\"act.id\">{{ act.name }}</md-option>\r\n      </md-select>\r\n      <md-input-container>\r\n        <input md-input placeholder=\"Time Period\" [ngModel]=\"linkActivities.timePeriod\" (ngModelChange)=\"linkActivities.timePeriod = $event\" name=\"timePeriod\"\r\n          required>\r\n      </md-input-container>\r\n      <md-progress-spinner *ngIf=\"!linkActivities.upwardAct\" mode=\"indeterminate\"></md-progress-spinner>\r\n    </div>\r\n  </md-tab>\r\n  <md-tab label=\"Graph\">\r\n    <md-toolbar class=\"button-toolbar\">\r\n      <button (click)=\"getGraph(true)\" md-raised-button>Add Critical Path</button>\r\n    </md-toolbar>\r\n    <chart [options]=\"graphConfig\"></chart>\r\n  </md-tab>\r\n</md-tab-group>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"cep-form\">\r\n    <span>{{dialogName}} Process</span>\r\n    <md-input-container>\r\n        <input md-input placeholder=\"Name\" [ngModel]=\"name\" (ngModelChange)=\"name = $event\">\r\n    </md-input-container>\r\n    <section>\r\n        <button type=\"button\" md-raised-button (click)=\"dialogRef.close(this)\">Save</button>\r\n        <button type=\"button\" md-button (click)=\"dialogRef.close()\">Cancel</button>\r\n    </section>\r\n</div>"

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__);
/* unused harmony export Activity */
/* unused harmony export Process */
/* unused harmony export ControllingLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var Activity = (function () {
    function Activity(id, name, units, startToFinish, unitDelta, durationFunction, lag, safeProductivityRate, aggressiveProductivityRate, duration, aggressiveDuration, inputProdRate, dependencies, process, section, processId) {
        this.id = id;
        this.name = name;
        this.units = units;
        this.startToFinish = startToFinish;
        this.unitDelta = unitDelta;
        this.durationFunction = durationFunction;
        this.lag = lag;
        this.safeProductivityRate = safeProductivityRate;
        this.aggressiveProductivityRate = aggressiveProductivityRate;
        this.duration = duration;
        this.aggressiveDuration = aggressiveDuration;
        this.inputProdRate = inputProdRate;
        this.dependencies = dependencies;
        this.process = process;
        this.section = section;
        this.processId = processId;
    }
    return Activity;
}());

var Process = (function () {
    function Process(id, name) {
        this.id = id;
        this.name = name;
    }
    return Process;
}());

var ControllingLink = (function () {
    function ControllingLink(upperActivity, lowerActivity, timePeriod) {
        this.upperActivity = upperActivity;
        this.lowerActivity = lowerActivity;
        this.timePeriod = timePeriod;
    }
    return ControllingLink;
}());

var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.addActivity = function (activity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:5000/api/activities/', JSON.stringify(activity), { headers: headers }).catch(this.handleError);
    };
    HttpService.prototype.getActivities = function () {
        return this.http
            .get('http://localhost:5000/api/activities/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.getProcesses = function () {
        return this.http
            .get('http://localhost:5000/api/processes/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.getGraph = function (withCriticalPath) {
        return this.http
            .get('http://localhost:5000/api/activities/compute/' + withCriticalPath)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            data.plotOptions.line.dataLabels.formatter =
                function () {
                    return this.x.toFixed(2);
                };
        })
            .catch(this.handleError);
    };
    HttpService.prototype.updateActivity = function (activity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put('http://localhost:5000/api/activities/', JSON.stringify(activity), { headers: headers })
            .catch(this.handleError);
        ;
    };
    HttpService.prototype.deleteActivity = function (id) {
        return this.http
            .delete('http://localhost:5000/api/activities/' + id)
            .catch(this.handleError);
    };
    HttpService.prototype.deleteProcess = function (id) {
        return this.http
            .delete('http://localhost:5000/api/processes/' + id)
            .catch(this.handleError);
    };
    HttpService.prototype.addProcess = function (process) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://localhost:5000/api/processes/', JSON.stringify(process), { headers: headers })
            .catch(this.handleError);
    };
    HttpService.prototype.updateProcess = function (process) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put('http://localhost:5000/api/processes/', JSON.stringify(process), { headers: headers })
            .catch(this.handleError);
    };
    HttpService.prototype.getLink = function () {
        return this.http
            .get('http://localhost:5000/api/links/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.updateLink = function (link) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put('http://localhost:5000/api/links/', JSON.stringify(link), { headers: headers })
            .catch(this.handleError);
        ;
    };
    HttpService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().Message);
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());

//# sourceMappingURL=C:/Users/jackz/ScheduleCriticality/web/src/app.httpService.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.bundle.js.map