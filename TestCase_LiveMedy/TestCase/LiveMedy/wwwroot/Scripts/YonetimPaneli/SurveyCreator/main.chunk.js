(window["webpackJsonpanket-builder"] = window["webpackJsonpanket-builder"] || []).push([["main"], {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
            // Module
            exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



            /***/
}),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
            // Module
            exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.panel {\n \n  padding-bottom:120px;\n  padding-top:30px;\n}\n.panel.col-md-3 { \n  background:#f4f4f4;\n\n}\n.panel button.btn-question{\n  font-size: 1.1rem;\n  font-weight: 500;\n  text-align: left;\n}\n.panel button svg{\n  fill:white;\n  width: 30px;\n  float:left;\n  margin-right: 30px;\n}\n.survey--question {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 15px 0px;\n  padding-left: 130px;\n  padding-right: 100px;\n  min-height: 160px;\n  background: #eee;\n}\n.survey--question ul {\n  margin-top: 10px;\n}\n.survey--question li {\n    border: 1px solid rgba(0,0,0,0.1);\n    list-style: none;\n    background: white;\n}\n.question-buttons {\n  position: absolute;\n  left: 0px;\n  width: 130px;\n  top: 0px;\n  bottom: 0px;\n  opacity: 0;\n  transition: all 1s;\n}\n\n\n.survey--question:hover .question-buttons {\n  opacity: 1;\n}\n.question-buttons-right {\n  position: absolute;\n  right: 0px;\n  width: 94px;\n  top: 0px;\n  bottom: 0px;\n  opacity: 0;\n  transition: all 1s;\n}\n\n.survey--question:hover .question-buttons-right {\n  opacity: 1;\n}\n\n.survey--question  button.update-question.btn.btn-info {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n.survey--question button.delete-question {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  width: 50%;\n  border: 5px solid firebrick;\n}\n\n.survey--question button.order-bottom {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 50%;\n  height: 50%;\n  font-size: 40px;\n  color: white;\n}\n\nbutton.order-top {}\n\n.survey--question button.order-top {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 50%;\n  height: 50%;\n  font-size: 50px;\n  color: whte;\n}", ""]);



            /***/
}),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }

            var options = {}

            options.insert = "head";
            options.singleton = false;

            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

            if (content.locals) {
                module.exports = content.locals;
            }

            if (true) {
                if (!content.locals) {
                    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
                        function () {
                            var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

                            if (typeof newContent === 'string') {
                                newContent = [[module.i, newContent, '']];
                            }

                            update(newContent);
                        }
                    )
                }

                module.hot.dispose(function () {
                    update();
                });
            }

            /***/
}),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_survey_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/survey_container */ "./src/components/survey_container.jsx");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\App.js";





            function App() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "App",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    },
                    __self: this
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_survey_container__WEBPACK_IMPORTED_MODULE_3__["SurveyContainer"], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    },
                    __self: this
                }));
            }

/* harmony default export */ __webpack_exports__["default"] = (App);

            /***/
}),

/***/ "./src/actions/survey.actions.js":
/*!***************************************!*\
  !*** ./src/actions/survey.actions.js ***!
  \***************************************/
/*! exports provided: surveyActions */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyActions", function () { return surveyActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

            const surveyActions = {
                tekCevapSoruEkle,
                ratingSoruEkle,
                textSoruEkle,
                checkboxSoruEkle,
                resimCevapliSoruEkle,
                soruSil,
                soruYukari,
                soruAsagi,
                soruDetay,
                soruDuzenle,
                soruCevapDuzenle,
                evetHayirSoruEkle,
                siralamaSoruEkle,
                tabloSoruEkle
            };

            function textSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].TEXT_SORU_EKLE
                };
            }

            function checkboxSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].CHECKBOX_SORU_EKLE
                };
            }

            function tekCevapSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].TEKCEVAP_SORU_EKLE
                };
            }

            function ratingSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].RATING_SORU_EKLE
                };
            }

            function soruSil(index) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_SIL,
                    id: index
                };
            }

            function soruYukari(index) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_YUKARI,
                    id: index
                };
            }

            function soruAsagi(index) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_ASAGI,
                    id: index
                };
            }

            function soruDetay(index) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_DETAY,
                    id: index
                };
            }

            function soruDuzenle(obj) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_DUZENLE,
                    payload: obj
                };
            }

            function soruCevapDuzenle(obj) {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SORU_CEVAP_DUZENLE,
                    payload: obj
                };
            }

            function resimCevapliSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].RESIM_CEVAPLI_SORU_EKLE
                };
            }

            function evetHayirSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].EVETHAYIR_SORU_EKLE
                };
            }

            function siralamaSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].SIRALAMA_SORU_EKLE
                };
            }

            function tabloSoruEkle() {
                return {
                    type: _constants__WEBPACK_IMPORTED_MODULE_0__["surveyConstants"].TABLO_SORU_EKLE
                };
            }

            /***/
}),

/***/ "./src/classes/soru.js":
/*!*****************************!*\
  !*** ./src/classes/soru.js ***!
  \*****************************/
/*! exports provided: Soru */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Soru", function () { return Soru; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);


            class Soru {
                constructor(soru) {
                    this.soru = soru;
                    this.id = uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
                }

            }



            /***/
}),

/***/ "./src/classes/text_id.js":
/*!********************************!*\
  !*** ./src/classes/text_id.js ***!
  \********************************/
/*! exports provided: IdText */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdText", function () { return IdText; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);


            class IdText {
                constructor(text) {
                    this.text = text;
                    this.id = "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
                }

            }



            /***/
}),

/***/ "./src/components/editable_text.jsx":
/*!******************************************!*\
  !*** ./src/components/editable_text.jsx ***!
  \******************************************/
/*! exports provided: EditableText */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableText", function () { return EditableText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\editable_text.jsx";


            class EditableText extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        text: this.props.text,
                        editMode: false,
                        newText: ''
                    };
                    this.handleChangeText = this.handleChangeText.bind(this);
                    this.startEdit = this.startEdit.bind(this);
                    this.confirmEdit = this.confirmEdit.bind(this);
                    this.cancelEdit = this.cancelEdit.bind(this);
                    this.endEdit = this.endEdit.bind(this);
                    this.handleFocus = this.handleFocus.bind(this);
                }

                startEdit() {
                    this.setState({
                        editMode: true,
                        newText: this.props.text
                    });
                }

                endEdit(e) {
                    switch (e.keyCode) {
                        case 27:
                            this.cancelEdit();
                            break;

                        case 13:
                            this.confirmEdit();
                            break;

                        default:
                            break;
                    }
                }

                confirmEdit() {
                    this.props.changeText(this.state.newText, this.props.index);
                    this.setState({
                        editMode: false
                    });
                }

                cancelEdit() {
                    this.setState({
                        editMode: false
                    });
                }

                handleChangeText(e) {
                    const value = e.target.value;
                    this.setState({
                        newText: value
                    });
                }

                handleFocus(e) {
                    e.target.select();
                }

                render() {
                    return this.state.editMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        autoFocus: true,
                        value: this.state.newText,
                        onChange: this.handleChangeText,
                        onKeyDown: this.endEdit,
                        onBlur: this.confirmEdit,
                        onFocus: this.handleFocus,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        },
                        __self: this
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        onClick: this.startEdit,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, this.props.text);
                }

            }



            /***/
}),

/***/ "./src/components/form_answer.jsx":
/*!****************************************!*\
  !*** ./src/components/form_answer.jsx ***!
  \****************************************/
/*! exports provided: FormAnswer */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAnswer", function () { return FormAnswer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_cropper */ "./src/components/image_cropper.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\form_answer.jsx";





            class FormAnswer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const model = this.props.model;
                    this.state = {
                        imgUrl: model.imgUrl,
                        id: model.id
                    };
                    this.soruCevapDuzenle = this.soruCevapDuzenle.bind(this);
                    this.cevapResimKaydet = this.cevapResimKaydet.bind(this);
                    this.cevapResimSil = this.cevapResimSil.bind(this);
                }

                cevapResimKaydet(imgUrl) {
                    this.setState({
                        imgUrl: imgUrl
                    });
                }

                soruCevapDuzenle(event) {
                    event.preventDefault();
                    this.props.model.imgUrl = this.state.imgUrl;
                    this.props.soruCevapDuzenleSubmit(this.state);
                    return false;
                }

                cevapResimSil(event) {
                    this.setState({
                        imgUrl: undefined
                    });
                }

                render() {
                    const imgUrl = this.state.imgUrl;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
                        onSubmit: this.soruCevapDuzenle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropper"], {
                        resimKaydet: this.cevapResimKaydet,
                        croppedImageUrl: imgUrl,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        },
                        __self: this
                    }), imgUrl !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.cevapResimSil,
                        type: "button",
                        className: "btn btn-primary btn-lg btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        },
                        __self: this
                    }, "Resmi Sil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                        variant: "primary",
                        type: "submit",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }, "Kaydet"));
                }

            }



            /***/
}),

/***/ "./src/components/form_question.jsx":
/*!******************************************!*\
  !*** ./src/components/form_question.jsx ***!
  \******************************************/
/*! exports provided: FormQuestion */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormQuestion", function () { return FormQuestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_survey_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/survey.actions */ "./src/actions/survey.actions.js");
/* harmony import */ var _image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_cropper */ "./src/components/image_cropper.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\form_question.jsx";







            class FormQuestion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const model = this.props.model;
                    this.state = {
                        required: model.required,
                        cols: model.cols,
                        //50
                        rows: model.rows,
                        // 4
                        maxLength: model.maxLength,
                        minLength: model.minLength,
                        maxSecim: model.maxSecim,
                        minSecim: model.minSecim,
                        typeId: model.typeId,
                        imgUrl: model.imgUrl,
                        id: model.id,
                        profilSecim: model.profilSecim,
                        kacAdetSiralasin: model.kacAdetSiralasin
                    };
                    this.handleInputChange = this.handleInputChange.bind(this);
                    this.soruDuzenle = this.soruDuzenle.bind(this);
                    this.resimKaydet = this.resimKaydet.bind(this);
                    this.resimSil = this.resimSil.bind(this);
                }

                handleInputChange(event) {
                    const target = event.target;
                    const value = target.type === 'checkbox' ? target.checked : target.value;
                    const name = target.name;
                    this.setState({
                        [name]: value
                    });
                }

                resimKaydet(imgUrl) {
                    this.setState({
                        imgUrl: imgUrl
                    });
                }

                soruDuzenle(event) {
                    event.preventDefault();
                    this.props.soruDuzenleSubmit(this.state);
                    return false;
                }

                resimSil(event) {
                    this.setState({
                        imgUrl: undefined
                    });
                }

                render() {
                    const _this$state = this.state,
                        typeId = _this$state.typeId,
                        required = _this$state.required,
                        cols = _this$state.cols,
                        rows = _this$state.rows,
                        maxLength = _this$state.maxLength,
                        minLength = _this$state.minLength,
                        maxSecim = _this$state.maxSecim,
                        minSecim = _this$state.minSecim,
                        imgUrl = _this$state.imgUrl,
                        profilSecim = _this$state.profilSecim,
                        kacAdetSiralasin = _this$state.kacAdetSiralasin;
                    console.log("gerekli? ".concat(required));
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
                        onSubmit: this.soruDuzenle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        },
                        __self: this
                    }, typeId === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "formCols",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        },
                        __self: this
                    }, "Text Geni\u015Fli\u011Fi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        value: cols,
                        name: "cols",
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "formRows",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        },
                        __self: this
                    }, "Text Y\xFCksekli\u011Fi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        value: rows,
                        name: "rows",
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "maxLength",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        },
                        __self: this
                    }, "Maximum Text Alan\u0131"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        name: "maxLength",
                        value: maxLength,
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "minLength",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        },
                        __self: this
                    }, "Minimum Text Alan\u0131"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        name: "minLength",
                        value: minLength,
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        },
                        __self: this
                    }))), typeId === 4 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "maxSecim",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        },
                        __self: this
                    }, "Max Se\xE7im Say\u0131s\u0131 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        value: maxSecim,
                        name: "maxSecim",
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "minSecim",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                        },
                        __self: this
                    }, "Min Se\xE7im Say\u0131s\u0131"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        value: minSecim,
                        name: "minSecim",
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        },
                        __self: this
                    }))), typeId === 7 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "maxSecim",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 106
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 107
                        },
                        __self: this
                    }, "Ka\xE7 Adet S\u0131ralas\u0131n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        type: "text",
                        placeholder: "",
                        value: kacAdetSiralasin,
                        name: "kacAdetSiralasin",
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_cropper__WEBPACK_IMPORTED_MODULE_3__["ImageCropper"], {
                        resimKaydet: this.resimKaydet,
                        croppedImageUrl: imgUrl,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 112
                        },
                        __self: this
                    }), imgUrl !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.resimSil,
                        type: "button",
                        className: "btn btn-primary btn-lg btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116
                        },
                        __self: this
                    }, "Resmi Sil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 122
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "exampleForm.ControlSelect1",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 124
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125
                        },
                        __self: this
                    }, "Profile Ba\u011Fla"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                        as: "select",
                        name: "profilSecim",
                        onChange: this.handleInputChange,
                        selected: true,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                        value: "",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 127
                        },
                        __self: this
                    }, "-"), window.profilSutunlari.map(sutun => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
                            selected: profilSecim === sutun.value,
                            value: sutun.value,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 130
                            },
                            __self: this
                        }, sutun.text);
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
                        controlId: "formRequired",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
                        type: "checkbox",
                        label: "Doldurulmas\u0131 Zorunlu Mu?",
                        value: required ? 'on' : 'off',
                        name: "required",
                        checked: required,
                        onChange: this.handleInputChange,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 138
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                        variant: "primary",
                        type: "submit",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                        },
                        __self: this
                    }, "Kaydet"));
                }

            }



            /***/
}),

/***/ "./src/components/image_cropper.jsx":
/*!******************************************!*\
  !*** ./src/components/image_cropper.jsx ***!
  \******************************************/
/*! exports provided: ImageCropper */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function () { return ImageCropper; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_3__);
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\image_cropper.jsx";





            class ImageCropper extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
                constructor(...args) {
                    super(...args);
                    this.state = {
                        src: null,
                        crop: {
                            unit: 'px',
                            // default, can be 'px' or '%' 
                            width: 480,
                            height: 270,
                            locked: false
                        }
                    };

                    this.onSelectFile = e => {
                        if (e.target.files && e.target.files.length > 0) {
                            const reader = new FileReader();
                            reader.addEventListener("load", () => this.setState({
                                src: reader.result
                            }));
                            reader.readAsDataURL(e.target.files[0]);
                        }
                    };

                    this.onImageLoaded = image => {
                        this.imageRef = image;
                    };

                    this.onCropComplete = crop => {
                        this.makeClientCrop(crop);
                    };

                    this.onCropChange = (crop, percentCrop) => {
                        // You could also use percentCrop:
                        // this.setState({ crop: percentCrop });
                        this.setState({
                            crop
                        });
                    };
                }

                async makeClientCrop(crop) {
                    if (this.imageRef && crop.width && crop.height) {
                        const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, "newFile.png"); //   this.setState({ croppedImageUrl });

                        this.props.resimKaydet(croppedImageUrl);
                    }
                }

                getCroppedImg(image, crop, fileName) {
                    const canvas = document.createElement("canvas");
                    const scaleX = image.naturalWidth / image.width;
                    const scaleY = image.naturalHeight / image.height;
                    canvas.width = crop.width;
                    canvas.height = crop.height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
                    return new Promise((resolve, reject) => {
                        canvas.toBlob(blob => {
                            if (!blob) {
                                //reject(new Error('Canvas is empty'));
                                console.error("Canvas is empty");
                                return;
                            }

                            blob.name = fileName;
                            window.URL.revokeObjectURL(this.fileUrl);
                            this.fileUrl = window.URL.createObjectURL(blob);
                            resolve(this.fileUrl);
                        }, "image/png");
                    });
                }

                render() {
                    const _this$state = this.state,
                        crop = _this$state.crop,
                        src = _this$state.src;
                    const croppedImageUrl = this.props.croppedImageUrl;
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                        className: "App",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                        class: "custom-file",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        type: "file",
                        onChange: this.onSelectFile,
                        class: "custom-file-input",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
                        class: "custom-file-label",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        },
                        __self: this
                    }, "Resim Se\xE7")), src && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        src: src,
                        crop: crop,
                        onImageLoaded: this.onImageLoaded,
                        onComplete: this.onCropComplete,
                        onChange: this.onCropChange,
                        locked: false,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        },
                        __self: this
                    }), croppedImageUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
                        alt: "Crop",
                        style: {
                            maxWidth: "100%"
                        },
                        src: croppedImageUrl,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 110
                        },
                        __self: this
                    }));
                }

            }



            /***/
}),

/***/ "./src/components/question.jsx":
/*!*************************************!*\
  !*** ./src/components/question.jsx ***!
  \*************************************/
/*! exports provided: Question */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function () { return Question; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _question_TekCevap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question_TekCevap */ "./src/components/question_TekCevap.jsx");
/* harmony import */ var _question_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question_Rating */ "./src/components/question_Rating.jsx");
/* harmony import */ var _question_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question_text */ "./src/components/question_text.jsx");
/* harmony import */ var _question_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question_Checkbox */ "./src/components/question_Checkbox.jsx");
/* harmony import */ var _question_ResimCevapli__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./question_ResimCevapli */ "./src/components/question_ResimCevapli.jsx");
/* harmony import */ var _question_EvetHayir__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question_EvetHayir */ "./src/components/question_EvetHayir.jsx");
/* harmony import */ var _question_SiralamaSorusu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question_SiralamaSorusu */ "./src/components/question_SiralamaSorusu.jsx");
/* harmony import */ var _question_TabloSoru__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question_TabloSoru */ "./src/components/question_TabloSoru.jsx");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question.jsx";













            class Question extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                }

                render() {
                    const _this$props = this.props,
                        questionModel = _this$props.questionModel,
                        resimDuzenle = _this$props.resimDuzenle;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, questionModel.imgUrl !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                        src: questionModel.imgUrl,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: this
                    }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'question-buttons',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        className: 'order-bottom btn btn-info',
                        onClick: () => {
                            this.props.yukari(this.props.questionModel.id);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: this
                    }, "\u2193"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        className: 'order-top btn btn-success',
                        onClick: () => {
                            this.props.asagi(this.props.questionModel.id);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        },
                        __self: this
                    }, "\u2191"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        className: 'delete-question btn btn-danger',
                        onClick: () => {
                            this.props.sil(this.props.questionModel.id);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        },
                        __self: this
                    }, "Sil")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'question-buttons-right',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        className: 'update-question btn btn-info',
                        onClick: () => {
                            this.props.detay(this.props.questionModel);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        },
                        __self: this
                    }, "\xD6zellikler")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'col-md-12',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        },
                        __self: this
                    }, questionModel.typeId === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_TekCevap__WEBPACK_IMPORTED_MODULE_4__["QuestionTekCevap"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    }) : questionModel.typeId === 2 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_Rating__WEBPACK_IMPORTED_MODULE_5__["QuestionRating"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        },
                        __self: this
                    }) : questionModel.typeId === 3 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_text__WEBPACK_IMPORTED_MODULE_6__["QuestionText"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        },
                        __self: this
                    }) : questionModel.typeId === 4 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_Checkbox__WEBPACK_IMPORTED_MODULE_7__["QuestionCheckbox"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        },
                        __self: this
                    }) : questionModel.typeId === 5 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_ResimCevapli__WEBPACK_IMPORTED_MODULE_8__["QuestionResimCevapli"], {
                        questionModel: questionModel,
                        resimDuzenle: resimDuzenle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }) : questionModel.typeId === 6 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_EvetHayir__WEBPACK_IMPORTED_MODULE_9__["QuestionEvetHayir"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    }) : questionModel.typeId === 7 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_SiralamaSorusu__WEBPACK_IMPORTED_MODULE_10__["QuestionSiralama"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        },
                        __self: this
                    }) : questionModel.typeId === 8 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_TabloSoru__WEBPACK_IMPORTED_MODULE_11__["QuestionTabloSoru"], {
                        questionModel: questionModel,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        },
                        __self: this
                    }) : ''));
                }

            }



            /***/
}),

/***/ "./src/components/question_Checkbox.jsx":
/*!**********************************************!*\
  !*** ./src/components/question_Checkbox.jsx ***!
  \**********************************************/
/*! exports provided: QuestionCheckbox */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function () { return QuestionCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_Checkbox.jsx";




            class QuestionCheckbox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        maxSecim: q.maxSecim,
                        minSecim: q.minSecim,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                        },
                        __self: this
                    }, "+")));
                }

            }



            /***/
}),

/***/ "./src/components/question_EvetHayir.jsx":
/*!***********************************************!*\
  !*** ./src/components/question_EvetHayir.jsx ***!
  \***********************************************/
/*! exports provided: QuestionEvetHayir */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEvetHayir", function () { return QuestionEvetHayir; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_EvetHayir.jsx";




            class QuestionEvetHayir extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "radio",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: this
                        }));
                    })));
                }

            }



            /***/
}),

/***/ "./src/components/question_Rating.jsx":
/*!********************************************!*\
  !*** ./src/components/question_Rating.jsx ***!
  \********************************************/
/*! exports provided: QuestionRating */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function () { return QuestionRating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_Rating.jsx";




            class QuestionRating extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"](this.state.cevaplar.length + 1);
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "btn-group btn-group-toggle",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            className: "btn btn-secondary " + (i === 0 ? 'active' : ''),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "radio",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            style: {
                                "marginLeft": "5px"
                            },
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            },
                            __self: this
                        }, "-"));
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        },
                        __self: this
                    }, "+"));
                }

            }



            /***/
}),

/***/ "./src/components/question_ResimCevapli.jsx":
/*!**************************************************!*\
  !*** ./src/components/question_ResimCevapli.jsx ***!
  \**************************************************/
/*! exports provided: QuestionResimCevapli */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionResimCevapli", function () { return QuestionResimCevapli; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_ResimCevapli.jsx";




            class QuestionResimCevapli extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        maxSecim: q.maxSecim,
                        minSecim: q.minSecim,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                    this.resimDuzenle = this.resimDuzenle.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                resimDuzenle(cevap) {
                    this.props.resimDuzenle(cevap, this.state.id);
                }

                render() {
                    const q = this.props.questionModel;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        }, cevap.imgUrl === undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            onClick: () => {
                                this.resimDuzenle(cevap);
                            },
                            type: "button",
                            className: "btn btn-primary btn-lg",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            },
                            __self: this
                        }, "Resim Ekle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            },
                            __self: this
                        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                            alt: "Resim Düzenle",
                            src: cevap.imgUrl,
                            onClick: () => {
                                this.resimDuzenle(cevap);
                            },
                            style: {
                                maxWidth: '100px',
                                maxHeight: '100px'
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80
                            },
                            __self: this
                        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 86
                        },
                        __self: this
                    }, "+")));
                }

            }



            /***/
}),

/***/ "./src/components/question_SiralamaSorusu.jsx":
/*!****************************************************!*\
  !*** ./src/components/question_SiralamaSorusu.jsx ***!
  \****************************************************/
/*! exports provided: QuestionSiralama */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSiralama", function () { return QuestionSiralama; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_SiralamaSorusu.jsx";




            class QuestionSiralama extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        maxSecim: q.maxSecim,
                        minSecim: q.minSecim,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                        },
                        __self: this
                    }, "+")));
                }

            }



            /***/
}),

/***/ "./src/components/question_TabloSoru.jsx":
/*!***********************************************!*\
  !*** ./src/components/question_TabloSoru.jsx ***!
  \***********************************************/
/*! exports provided: QuestionTabloSoru */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTabloSoru", function () { return QuestionTabloSoru; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_TabloSoru.jsx";




            class QuestionTabloSoru extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        sorular: q.questions,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.anaSoruDegistir = this.anaSoruDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                    this.soruEkle = this.soruEkle.bind(this);
                    this.soruSil = this.soruSil.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                anaSoruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                soruDegistir(text, index) {
                    let newSorular = this.state.sorular;
                    newSorular[index].text = text;
                    this.setState({
                        sorular: newSorular
                    });
                }

                soruEkle() {
                    const soru = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Soru " + (parseInt(this.state.sorular.length) + 1));
                    let newSorular = this.state.sorular;
                    newSorular.push(soru);
                    this.setState({
                        sorular: newSorular
                    });
                }

                soruSil(index) {
                    let newSorular = this.state.sorular;
                    newSorular.splice(index, 1);
                    this.setState({
                        sorular: newSorular
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.anaSoruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "row",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "col-md-6",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        },
                        __self: this
                    }, "SORULAR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        },
                        __self: this
                    }, this.state.sorular.map((soru, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'soru-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: soru.text,
                            changeText: this.soruDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.soruSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.soruEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                        },
                        __self: this
                    }, "+"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "col-md-6",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 93
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        },
                        __self: this
                    }, "CEVAPLAR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "radio",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                        },
                        __self: this
                    }, "+")))));
                }

            }



            /***/
}),

/***/ "./src/components/question_TekCevap.jsx":
/*!**********************************************!*\
  !*** ./src/components/question_TekCevap.jsx ***!
  \**********************************************/
/*! exports provided: QuestionTekCevap */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTekCevap", function () { return QuestionTekCevap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_TekCevap.jsx";




            class QuestionTekCevap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap 1");
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        required: q.required,
                        q: q
                    };
                    this.cevapEkle = this.cevapEkle.bind(this);
                    this.cevapSil = this.cevapSil.bind(this);
                    this.cevapDegistir = this.cevapDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                cevapEkle() {
                    const cevap = new _classes_text_id__WEBPACK_IMPORTED_MODULE_2__["IdText"]("Cevap " + (parseInt(this.state.cevaplar.length) + 1));
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.push(cevap);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapSil(index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar.splice(index, 1);
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                cevapDegistir(text, index) {
                    let newCevaplar = this.state.cevaplar;
                    newCevaplar[index].text = text;
                    this.setState({
                        cevaplar: newCevaplar
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    }, this.state.cevaplar.map((cevap, i) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                            key: 'q_' + this.props.questionModel.id + 'cevap-' + i,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "radio",
                            name: 'cevap-' + this.props.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                            index: i,
                            text: cevap.text,
                            changeText: this.cevapDegistir,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            },
                            __self: this
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                            type: "button",
                            onClick: () => this.cevapSil(i),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        }, "-"));
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        type: "button",
                        onClick: this.cevapEkle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        },
                        __self: this
                    }, "+")));
                }

            }



            /***/
}),

/***/ "./src/components/question_text.jsx":
/*!******************************************!*\
  !*** ./src/components/question_text.jsx ***!
  \******************************************/
/*! exports provided: QuestionText */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function () { return QuestionText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable_text */ "./src/components/editable_text.jsx");
/* harmony import */ var _classes_text_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/text_id */ "./src/classes/text_id.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\question_text.jsx";




            class QuestionText extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    const q = this.props.questionModel;
                    this.state = {
                        soru: q.text,
                        cevaplar: q.answers,
                        sira: q.order,
                        placeholder: q.placeholder,
                        cols: q.cols,
                        rows: q.rows,
                        q: q
                    };
                    this.placeholderDegistir = this.placeholderDegistir.bind(this);
                    this.soruDegistir = this.soruDegistir.bind(this);
                }

                placeholderDegistir(e, index) {
                    const value = e.target.value;
                    this.setState({
                        placeholder: value
                    });
                }

                soruDegistir(text) {
                    let q = this.state.q;
                    q.text = text;
                    this.setState({
                        q: q
                    });
                }

                render() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        },
                        __self: this
                    }, this.props.questionModel.order, ")", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable_text__WEBPACK_IMPORTED_MODULE_1__["EditableText"], {
                        text: this.state.q.text,
                        changeText: this.soruDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                        },
                        __self: this
                    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "btn-group btn-group-toggle",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                        type: "text",
                        placeholder: this.state.placeholder,
                        cols: this.state.cols,
                        rows: this.state.rows,
                        onChange: this.placeholderDegistir,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    })));
                }

            }



            /***/
}),

/***/ "./src/components/survey_container.jsx":
/*!*********************************************!*\
  !*** ./src/components/survey_container.jsx ***!
  \*********************************************/
/*! exports provided: SurveyContainer */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyContainer", function () { return connectedSurveyContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _classes_soru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/soru */ "./src/classes/soru.js");
/* harmony import */ var _actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/survey.actions */ "./src/actions/survey.actions.js");
/* harmony import */ var _form_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form_question */ "./src/components/form_question.jsx");
/* harmony import */ var _form_answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form_answer */ "./src/components/form_answer.jsx");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question */ "./src/components/question.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__);
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\components\\survey_container.jsx";










            class SurveyContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        show: false,
                        showAnswer: false,
                        activeQuestion: null
                    };
                    this.checkboxSoruEkle = this.checkboxSoruEkle.bind(this);
                    this.tekCevapSoruEkle = this.tekCevapSoruEkle.bind(this);
                    this.ratingSoruEkle = this.ratingSoruEkle.bind(this);
                    this.textSoruEkle = this.textSoruEkle.bind(this);
                    this.evetHayirSoruEkle = this.evetHayirSoruEkle.bind(this);
                    this.soruSil = this.soruSil.bind(this);
                    this.soruAsagi = this.soruAsagi.bind(this);
                    this.soruYukari = this.soruYukari.bind(this);
                    this.export = this.export.bind(this);
                    this.setShow = this.setShow.bind(this);
                    this.setShowAnswer = this.setShowAnswer.bind(this);
                    this.soruDetay = this.soruDetay.bind(this);
                    this.cevapResimDetay = this.cevapResimDetay.bind(this);
                    this.soruDuzenle = this.soruDuzenle.bind(this);
                    this.soruCevapDuzenle = this.soruCevapDuzenle.bind(this);
                    this.resimCevapliSoruEkle = this.resimCevapliSoruEkle.bind(this);
                    this.siralamaSoruEkle = this.siralamaSoruEkle.bind(this);
                    this.tabloSoruEkle = this.tabloSoruEkle.bind(this);
                }

                setShow(b, q) {
                    if (b) {
                        this.setState({
                            activeQuestion: q,
                            show: b
                        });
                    } else {
                        this.setState({
                            activeQuestion: null,
                            show: b
                        });
                    }
                }

                setShowAnswer(b, a) {
                    if (a) {
                        this.setState({
                            activeAnswer: a,
                            showAnswer: b
                        });
                    } else {
                        this.setState({
                            activeAnswer: null,
                            showAnswer: b
                        });
                    }
                }

                resimCevapliSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].resimCevapliSoruEkle());
                    });
                }

                checkboxSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].checkboxSoruEkle());
                    });
                }

                textSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].textSoruEkle());
                    });
                }

                evetHayirSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].evetHayirSoruEkle());
                    });
                }

                tekCevapSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].tekCevapSoruEkle());
                    });
                }

                ratingSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].ratingSoruEkle());
                    });
                }

                siralamaSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].siralamaSoruEkle());
                    });
                }

                tabloSoruEkle() {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].tabloSoruEkle());
                    });
                }

                soruSil(id) {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].soruSil(id));
                    });
                }

                soruYukari(id) {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].soruYukari(id));
                    });
                }

                soruAsagi(id) {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].soruAsagi(id));
                    });
                }

                soruDetay(soru) {
                    this.setShow(true, soru);
                }

                cevapResimDetay(cevap) {
                    this.setShowAnswer(true, cevap);
                }

                soruDuzenle(obj) {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].soruDuzenle(obj));
                    });
                    this.setShow(false);
                    return false;
                }

                soruCevapDuzenle(obj) {
                    const dispatch = this.props.dispatch;
                    dispatch(dispatch => {
                        dispatch(_actions_survey_actions__WEBPACK_IMPORTED_MODULE_3__["surveyActions"].soruCevapDuzenle(obj));
                    });
                    this.setShowAnswer(false);
                    return false;
                }

                export(id) {
                    console.log(this.props.survey);
                    window.anketKaydet && window.anketKaydet(this.props.survey);
                }

                render() {
                    const questions = this.props.survey.questions;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'container-fluid',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 175
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'row',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 176
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'col-md-3 panel',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 178
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
                        className: 'mb-5',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 179
                        },
                        __self: this
                    }, "SORU EKLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 182
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.evetHayirSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block ",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 183
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-boolean",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M0 16h10V6H0v10zm2-6l2 2 4-4 1 1-5 5-3-3 1-1z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M5 1v4h1V2h8v8h-3v1h4V1z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        },
                        __self: this
                    })), "Evet - Hay\u0131r")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 187
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 188
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.tekCevapSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block ",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 189
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-matrix",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 190
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M4 1C2.3 1 1 2.3 1 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 190
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                        cx: "4",
                        cy: "4",
                        r: "1",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 190
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M12 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 190
                        },
                        __self: this
                    })), "Tek cevapl\u0131")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 193
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 194
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.ratingSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block ",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 195
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-rating",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 196
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M0 7h1l1-1v5h1V5H2L0 7zm5 5h5V4H5v8zm1-5h2V6H6V5h3v3H7v2h2v1H6V7zm6-2v1h2v1h-2v1h2v2h-2v1h3V5h-3z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 196
                        },
                        __self: this
                    })), "Puanland\u0131rmal\u0131")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 200
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 201
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.textSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 202
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-comment",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 203
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M8 2C4.1 2 1 4.2 1 7c0 1.9 1.5 3.6 3.8 4.4C4.6 13.1 3 14 3 14s1.5-.2 2.7-.9c.4-.2.9-.8 1.3-1.2.3.1.6.1 1 .1 3.9 0 7-2.2 7-5s-3.1-5-7-5zM4 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 203
                        },
                        __self: this
                    })), "Text")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 207
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 208
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.checkboxSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 209
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-matrixdropdown",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M4 1C2.3 1 1 2.3 1 4s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                        cx: "4",
                        cy: "4",
                        r: "1",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M12 7c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                        cx: "4",
                        cy: "12",
                        r: "1",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    })), "\xC7oklu se\xE7im")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 224
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.resimCevapliSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 225
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-imagepicker",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 226
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M15 14H0V1h15v13zM1 13h13V2H1v11z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 226
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M2 3v9h11V3H2zm4 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3 7l2-3 1 1 2-3 4 5H3z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 226
                        },
                        __self: this
                    })), "Resimli"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 229
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.tabloSoruEkle,
                        type: "button",
                        className: "btn btn-info btn-question btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 230
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        viewBox: "0 0 16 16",
                        id: "icon-paneldynamic",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 231
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M2 8h10v1H2zM2 11h8l1-1H2zM9 16h2l-2-2zM14 9l-4 4 2 2 4-4zM3 3v2H2l2 2 2-2H5V3zM11 5V3H9v2H8l2 2 2-2z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 231
                        },
                        __self: this
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M1 1h12v7l1-1V0H0v14h7l1-1H1z",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 231
                        },
                        __self: this
                    })), "Tablo Soru"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        style: {
                            "position": "fixed",
                            "bottom": "20px",
                            "right": "20px",
                            "width": "100px",
                            "zIndex": "5"
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 235
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
                        onClick: this.export,
                        type: "button",
                        className: "btn btn-info btn-question btn-block",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 236
                        },
                        __self: this
                    }, "KAYDET")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 238
                        },
                        __self: this
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'col-md-9 panel',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 240
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: 'survey--container',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 241
                        },
                        __self: this
                    }, questions.map((question, index) => {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            className: 'survey--question',
                            key: 'questionss_' + question.id,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 245
                            },
                            __self: this
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question__WEBPACK_IMPORTED_MODULE_6__["Question"], {
                            questionModel: question,
                            sil: this.soruSil,
                            yukari: this.soruYukari,
                            asagi: this.soruAsagi,
                            detay: this.soruDetay,
                            resimDuzenle: this.cevapResimDetay,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 247
                            },
                            __self: this
                        }));
                    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        show: this.state.show,
                        onHide: () => this.setShow(false),
                        dialogClassName: "modal-90w modal-lg",
                        "aria-labelledby": "example-custom-modal-styling-title",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 258
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Header, {
                        closeButton: true,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 264
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Title, {
                        id: "example-custom-modal-styling-title",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 265
                        },
                        __self: this
                    }, this.state.activeQuestion && this.state.activeQuestion.type, " D\xDCZENLE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Body, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 269
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_question__WEBPACK_IMPORTED_MODULE_4__["FormQuestion"], {
                        model: this.state.activeQuestion,
                        soruDuzenleSubmit: this.soruDuzenle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 270
                        },
                        __self: this
                    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        show: this.state.showAnswer,
                        onHide: () => this.setShowAnswer(false),
                        dialogClassName: "modal-90w modal-lg",
                        "aria-labelledby": "example-custom-modal-styling-title",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 277
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Header, {
                        closeButton: true,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 283
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Title, {
                        id: "example-custom-modal-styling-title",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 284
                        },
                        __self: this
                    }, this.state.activeAnswer && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 285
                        },
                        __self: this
                    }, "CEVAP RES\u0130M EKLE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default.a.Body, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 288
                        },
                        __self: this
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_answer__WEBPACK_IMPORTED_MODULE_5__["FormAnswer"], {
                        model: this.state.activeAnswer,
                        soruCevapDuzenleSubmit: this.soruCevapDuzenle,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 289
                        },
                        __self: this
                    })))));
                }

            }

            function mapStateToProps(state) {
                const survey = state.survey;
                return {
                    survey
                };
            }

            const connectedSurveyContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SurveyContainer);


            /***/
}),

/***/ "./src/constants/cevap.constants.js":
/*!******************************************!*\
  !*** ./src/constants/cevap.constants.js ***!
  \******************************************/
/*! exports provided: cevapConstants */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cevapConstants", function () { return cevapConstants; });
            const cevapConstants = {
                TEKCEVAP_CEVAP_EKLE: 'TEKCEVAP_CEVAP_EKLE',
                TEKCEVAP_CEVAP_DUZENLE: 'TEKCEVAP_SORU_DUZENLE',
                TEKCEVAP_CEVAP_SIL: 'TEKCEVAP_CEVAP_SIL'
            };

            /***/
}),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: cevapConstants, surveyConstants */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cevap_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cevap.constants */ "./src/constants/cevap.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cevapConstants", function () { return _cevap_constants__WEBPACK_IMPORTED_MODULE_0__["cevapConstants"]; });

/* harmony import */ var _survey_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.constants */ "./src/constants/survey.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "surveyConstants", function () { return _survey_constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"]; });




            /***/
}),

/***/ "./src/constants/question.constants.js":
/*!*********************************************!*\
  !*** ./src/constants/question.constants.js ***!
  \*********************************************/
/*! exports provided: EVETHAYIR_SORU, RESIM_SORU, CHECKBOX_SORU, TEXT_SORU, RATING_SORU, TEKCEVAP_SORU, SIRALAMA_SORU, TABLO_SORU */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVETHAYIR_SORU", function () { return EVETHAYIR_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIM_SORU", function () { return RESIM_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_SORU", function () { return CHECKBOX_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_SORU", function () { return TEXT_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_SORU", function () { return RATING_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEKCEVAP_SORU", function () { return TEKCEVAP_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIRALAMA_SORU", function () { return SIRALAMA_SORU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLO_SORU", function () { return TABLO_SORU; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);


            const TABLO_SORU = order => {
                return {
                    // TODO Template e çekilecek
                    typeId: 8,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "TEKCEVAP SORU",
                    text: "Ana soru başlığı: " + order,
                    questions: [{
                        id: "s_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Soru 1"
                    }, {
                        id: "s_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Soru 2"
                    }, {
                        id: "s_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Soru 3"
                    }],
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 2"
                    }, {
                        text: "Cevap 3"
                    }],
                    // optionals
                    required: true,
                    imgUrl: undefined
                };
            };

            const TEKCEVAP_SORU = order => {
                return {
                    // TODO Template e çekilecek
                    typeId: 1,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "TEKCEVAP SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 2"
                    }, {
                        text: "Cevap 3"
                    }],
                    // optionals
                    required: true,
                    imgUrl: undefined
                };
            };

            const RATING_SORU = order => {
                // TODO Template e çekilecek
                return {
                    typeId: 2,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "RATING SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "2"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "3"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "4"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "5"
                    }],
                    // optionals
                    required: true,
                    imgUrl: undefined
                };
            };

            const TEXT_SORU = order => {
                // TODO Template e çekilecek
                return {
                    typeId: 3,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "TEXT SORU",
                    text: "Soru: " + order,
                    answers: [],
                    // optionals
                    required: true,
                    placeholder: 'placeholder...',
                    cols: 50,
                    rows: 4,
                    maxLength: 300,
                    minLength: 0,
                    imgUrl: undefined
                };
            };

            var CHECKBOX_SORU = order => {
                // TODO Template e çekilecek
                return {
                    typeId: 4,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "CHECKBOX SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 2"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 3"
                    }],
                    // optionals
                    required: true,
                    maxSecim: 5,
                    minSecim: 1,
                    imgUrl: undefined
                };
            };

            var RESIM_SORU = order => {
                // TODO Template e çekilecek
                return {
                    typeId: 5,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "RESIM SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 2"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 3"
                    }],
                    // optionals
                    required: true,
                    maxSecim: 5,
                    minSecim: 1,
                    imgUrl: undefined
                };
            };

            const EVETHAYIR_SORU = order => {
                return {
                    // TODO Template e çekilecek
                    typeId: 6,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "EVET_HAYIR SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "EVET"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "HAYIR"
                    }],
                    // optionals
                    required: true,
                    imgUrl: undefined
                };
            };

            var SIRALAMA_SORU = order => {
                // TODO Template e çekilecek
                return {
                    typeId: 7,
                    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                    order: order,
                    type: "SIRALAMA SORU",
                    text: "Soru: " + order,
                    answers: [{
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 1"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 2"
                    }, {
                        id: "c_" + uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
                        text: "Cevap 3"
                    }],
                    // optionals
                    required: true,
                    kacAdetSiralasin: 3,
                    imgUrl: undefined
                };
            };



            /***/
}),

/***/ "./src/constants/survey.constants.js":
/*!*******************************************!*\
  !*** ./src/constants/survey.constants.js ***!
  \*******************************************/
/*! exports provided: surveyConstants */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyConstants", function () { return surveyConstants; });
            const surveyConstants = {
                TEKCEVAP_SORU_EKLE: 'TEKCEVAP_SORU_EKLE',
                RATING_SORU_EKLE: 'RATING_SORU_EKLE',
                TEXT_SORU_EKLE: 'TEXT_SORU_EKLE',
                CHECKBOX_SORU_EKLE: 'CHECKBOX_SORU_EKLE',
                RESIM_CEVAPLI_SORU_EKLE: 'RESIM_CEVALI_SORU_EKLE',
                EVETHAYIR_SORU_EKLE: 'EVETHAYIR_SORU_EKLE',
                SIRALAMA_SORU_EKLE: 'SIRALAMA_SORU_EKLE',
                TABLO_SORU_EKLE: 'TABLO_SORU_EKLE',
                SORU_SIL: 'SORU_SIL',
                SORU_YUKARI: 'SORU_YUKARI',
                SORU_ASAGI: 'SORU_ASAGI',
                SORU_DETAY: 'SORU_DETAY',
                SORU_DUZENLE: 'SORU_DUZENLE',
                SORU_CEVAP_DUZENLE: 'SORU_CEVAP_DUZENLE'
            };

            /***/
}),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: store */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/helpers/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function () { return _store__WEBPACK_IMPORTED_MODULE_0__["store"]; });



            /***/
}),

/***/ "./src/helpers/store.js":
/*!******************************!*\
  !*** ./src/helpers/store.js ***!
  \******************************/
/*! exports provided: store */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function () { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

            //import { createLogger } from 'redux-logger';

            //const loggerMiddleware = createLogger();

            const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));

            /***/
}),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }

            var options = {}

            options.insert = "head";
            options.singleton = false;

            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

            if (content.locals) {
                module.exports = content.locals;
            }

            if (true) {
                if (!content.locals) {
                    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
                        function () {
                            var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

                            if (typeof newContent === 'string') {
                                newContent = [[module.i, newContent, '']];
                            }

                            update(newContent);
                        }
                    )
                }

                module.hot.dispose(function () {
                    update();
                });
            }

            /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
            var _jsxFileName = "D:\\tfsprojects\\ibb-dashboard.izmir.bel.tr\\AnketBuilder\\ClientApp\\src\\index.js";







            Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
                store: _helpers__WEBPACK_IMPORTED_MODULE_3__["store"],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                },
                __self: undefined
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                },
                __self: undefined
            })), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA

            _serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

            /***/
}),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

            /***/
}),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _survey_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.reducer */ "./src/reducers/survey.reducer.js");


            const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
                survey: _survey_reducer__WEBPACK_IMPORTED_MODULE_1__["survey"]
            });
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

            /***/
}),

/***/ "./src/reducers/survey.reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/survey.reducer.js ***!
  \****************************************/
/*! exports provided: survey */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "survey", function () { return survey; });
/* harmony import */ var D_tfsprojects_ibb_dashboard_izmir_bel_tr_AnketBuilder_ClientApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _constants_question_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/question.constants */ "./src/constants/question.constants.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);


            function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

            function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(D_tfsprojects_ibb_dashboard_izmir_bel_tr_AnketBuilder_ClientApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




            function survey(state = window.anketData, action) {
                var newOrder = state.questions.length + 1;

                switch (action.type) {
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].RESIM_CEVAPLI_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["RESIM_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].CHECKBOX_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["CHECKBOX_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].TEXT_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].TEKCEVAP_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["TEKCEVAP_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].RATING_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["RATING_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].EVETHAYIR_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["EVETHAYIR_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SIRALAMA_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["SIRALAMA_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].TABLO_SORU_EKLE:
                        {
                            var question = Object(_constants_question_constants__WEBPACK_IMPORTED_MODULE_2__["TABLO_SORU"])(newOrder);
                            return _objectSpread({}, state, {
                                questions: [...state.questions, question]
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SORU_SIL:
                        {
                            const newList = state.questions.filter(function (q) {
                                return q.id !== action.id;
                            });
                            sort(newList).forEach(function (element, i) {
                                element.order = i + 1;
                            });
                            return _objectSpread({}, state, {
                                questions: newList
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SORU_YUKARI:
                        {
                            const newList1 = [...state.questions];
                            const newItem1 = newList1.filter(function (q) {
                                return q.id === action.id;
                            });
                            newItem1[0].order += 1.1;
                            sort(newList1).forEach(function (element, i) {
                                element.order = i + 1;
                            });
                            return _objectSpread({}, state, {
                                questions: sort(newList1)
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SORU_ASAGI:
                        {
                            const newList2 = [...state.questions];
                            const newItem2 = newList2.filter(function (q) {
                                return q.id === action.id;
                            });
                            newItem2[0].order -= 1.1;
                            sort(newList2).forEach(function (element, i) {
                                element.order = i + 1;
                            });
                            return _objectSpread({}, state, {
                                questions: sort(newList2)
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SORU_DUZENLE:
                        {
                            const sorular = state.questions.map((item, index) => {
                                if (item.id !== action.payload.id) {
                                    // This isn't the item we care about - keep it as-is
                                    return item;
                                } // Otherwise, this is the one we want - return an updated value


                                return _objectSpread({}, item, {}, action.payload);
                            });
                            return _objectSpread({}, state, {
                                questions: sorular
                            });
                        }

                    case _constants__WEBPACK_IMPORTED_MODULE_1__["surveyConstants"].SORU_CEVAP_DUZENLE:
                        {
                            // sorucevap düzenle 
                            state.questions.map((item, index) => {
                                item.answers = item.answers.map((answer, i) => {
                                    if (answer.id !== action.payload.id) {
                                        // This isn't the item we care about - keep it as-is
                                        return answer;
                                    } // Otherwise, this is the one we want - return an updated value


                                    return _objectSpread({}, answer, {}, action.payload);
                                });
                            });
                            return _objectSpread({}, state);
                        }

                    default:
                        return _objectSpread({}, state);
                }
            }

            function sort(obj) {
                return obj.slice().sort(function (a, b) {
                    if (a.order < b.order) return -1;
                    if (a.order > b.order) return 1;
                    return 0;
                });
            }

            /***/
}),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function () { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function () { return unregister; });
            // This optional code is used to register a service worker.
            // register() is not called by default.
            // This lets the app load faster on subsequent visits in production, and gives
            // it offline capabilities. However, it also means that developers (and users)
            // will only see deployed updates on subsequent visits to a page, after all the
            // existing tabs open on the page have been closed, since previously cached
            // resources are updated in the background.
            // To learn more about the benefits of this model and instructions on how to
            // opt-in, read https://bit.ly/CRA-PWA
            const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
                window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
                window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            function register(config) {
                if (false) { }
            }

            function registerValidSW(swUrl, config) {
                navigator.serviceWorker.register(swUrl).then(registration => {
                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;

                        if (installingWorker == null) {
                            return;
                        }

                        installingWorker.onstatechange = () => {
                            if (installingWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    // At this point, the updated precached content has been fetched,
                                    // but the previous service worker will still serve the older
                                    // content until all client tabs are closed.
                                    console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

                                    if (config && config.onUpdate) {
                                        config.onUpdate(registration);
                                    }
                                } else {
                                    // At this point, everything has been precached.
                                    // It's the perfect time to display a
                                    // "Content is cached for offline use." message.
                                    console.log('Content is cached for offline use.'); // Execute callback

                                    if (config && config.onSuccess) {
                                        config.onSuccess(registration);
                                    }
                                }
                            }
                        };
                    };
                }).catch(error => {
                    console.error('Error during service worker registration:', error);
                });
            }

            function checkValidServiceWorker(swUrl, config) {
                // Check if the service worker can be found. If it can't reload the page.
                fetch(swUrl).then(response => {
                    // Ensure service worker exists, and that we really are getting a JS file.
                    const contentType = response.headers.get('content-type');

                    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
                        // No service worker found. Probably a different app. Reload the page.
                        navigator.serviceWorker.ready.then(registration => {
                            registration.unregister().then(() => {
                                window.location.reload();
                            });
                        });
                    } else {
                        // Service worker found. Proceed as normal.
                        registerValidSW(swUrl, config);
                    }
                }).catch(() => {
                    console.log('No internet connection found. App is running in offline mode.');
                });
            }

            function unregister() {
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then(registration => {
                        registration.unregister();
                    });
                }
            }

            /***/
}),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            __webpack_require__(/*! D:\tfsprojects\ibb-dashboard.izmir.bel.tr\AnketBuilder\ClientApp\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
            module.exports = __webpack_require__(/*! D:\tfsprojects\ibb-dashboard.izmir.bel.tr\AnketBuilder\ClientApp\src\index.js */"./src/index.js");


            /***/
})

}, [[0, "runtime~main", 1]]]);
//# sourceMappingURL=main.chunk.js.map