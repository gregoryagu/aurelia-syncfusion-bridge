'use strict';

exports.__esModule = true;
exports.ejWaitingPopup = exports.ejTreeView = exports.ejUploadbox = exports.ejTreeMap = exports.Level = exports.TreeGridColumn = exports.ejTreeGrid = exports.ejTooltip = exports.ejToolbar = exports.ejToggleButton = exports.ejTimePicker = exports.ejTagCloud = exports.ejTile = exports.ejTab = exports.SunburstLevels = exports.ejSunburstChart = exports.ejSymbolPalette = exports.ejSpreadsheet = exports.Sheet = exports.ejSplitter = exports.ejSplitButton = exports.ejSpellCheck = exports.ejSignature = exports.ejSparkline = exports.ejSlider = exports.ejScroller = exports.ScheduleResource = exports.ejSchedule = exports.ejRotator = exports.ejRadioButton = exports.ejRte = exports.ejRibbon = exports.ejReportViewer = exports.ejRating = exports.RangeSeries = exports.ejRangeNavigator = exports.ejRadialSlider = exports.ejRadialMenu = exports.Item = exports.ejProgressBar = exports.ejPivotGauge = exports.ejPivotTreeMap = exports.ejPivotSchemaDesigner = exports.ejPivotGrid = exports.ejPercentageTextbox = exports.ejPivotChart = exports.ejPdfViewer = exports.ejPager = exports.ejOverview = exports.ejNavigationDrawer = exports.ejNumericTextbox = exports.ejMenu = exports.ejMaskEdit = exports.ejListView = exports.ejMap = exports.Layer = exports.ejListBox = exports.ejLinearGauge = exports.ejHeatMapLegend = exports.KanbanColumn = exports.ejKanban = exports.ejHeatMap = exports.ejGantt = exports.ejGroupButton = exports.ejGrid = exports.Column = exports.ejFileExplorer = exports.ejDropDownList = exports.ejDiagram = exports.ejDigitalGauge = exports.ejDialog = exports.ejDateRangePicker = exports.ejDateTimePicker = exports.ejDatePicker = exports.ejCurrencyTextbox = exports.WidgetBase = exports.Util = exports.Template = exports.TemplateProcessor = exports.constants = exports.TemplatingEngine = exports.children = exports.customElement = exports.inlineView = exports.inject = exports.bindable = exports.customAttribute = exports.ejComboBox = exports.ejColorPicker = exports.ejCircularGauge = exports.ejCheckBox = exports.Series = exports.ejChart = exports.ejButton = exports.QualitativeRange = exports.ejBulletGraph = exports.ejBarcode = exports.ejAutocomplete = exports.ejAccordion = exports.EjConfigBuilder = undefined;

var _dec, _dec2, _dec3, _dec4, _class2, _dec5, _dec6, _dec7, _class3, _dec8, _dec9, _dec10, _dec11, _class4, _dec12, _dec13, _dec14, _dec15, _dec16, _class5, _desc, _value, _class6, _descriptor, _dec17, _dec18, _dec19, _class8, _dec20, _dec21, _dec22, _class9, _dec23, _dec24, _dec25, _dec26, _dec27, _class10, _desc2, _value2, _class11, _descriptor2, _dec28, _dec29, _dec30, _class13, _dec31, _dec32, _dec33, _class14, _dec34, _dec35, _dec36, _dec37, _class15, _dec38, _dec39, _dec40, _class16, _dec41, _dec42, _dec43, _class17, _dec44, _class18, _dec45, _dec46, _dec47, _dec48, _class19, _desc3, _value3, _class20, _descriptor3, _dec49, _desc4, _value4, _class22, _dec50, _dec51, _dec52, _class23, _dec53, _dec54, _dec55, _class24, _dec56, _dec57, _dec58, _class25, _dec59, _dec60, _dec61, _class26, _dec62, _dec63, _dec64, _dec65, _class27, _dec66, _dec67, _dec68, _dec69, _class28, _dec70, _dec71, _dec72, _dec73, _class29, _dec74, _dec75, _dec76, _class30, _dec77, _dec78, _dec79, _dec80, _class31, _dec81, _dec82, _dec83, _dec84, _class32, _desc5, _value5, _class33, _descriptor4, _dec85, _dec86, _dec87, _dec88, _dec89, _class35, _desc6, _value6, _class36, _descriptor5, _dec90, _dec91, _dec92, _class38, _dec93, _dec94, _dec95, _dec96, _class39, _dec97, _dec98, _dec99, _dec100, _class40, _dec101, _dec102, _dec103, _dec104, _dec105, _class41, _desc7, _value7, _class42, _descriptor6, _dec106, _dec107, _dec108, _class44, _dec109, _dec110, _dec111, _dec112, _class45, _dec113, _dec114, _dec115, _dec116, _class46, _dec117, _dec118, _dec119, _class47, _dec120, _dec121, _dec122, _class48, _dec123, _dec124, _dec125, _dec126, _dec127, _class49, _desc8, _value8, _class50, _descriptor7, _dec128, _dec129, _dec130, _dec131, _class52, _dec132, _dec133, _dec134, _class53, _dec135, _dec136, _dec137, _class54, _dec138, _dec139, _dec140, _class55, _dec141, _dec142, _dec143, _dec144, _class56, _dec145, _dec146, _dec147, _dec148, _class57, _dec149, _dec150, _dec151, _dec152, _class58, _dec153, _dec154, _dec155, _dec156, _class59, _dec157, _dec158, _dec159, _dec160, _class60, _dec161, _dec162, _dec163, _class61, _dec164, _dec165, _dec166, _dec167, _class62, _dec168, _dec169, _dec170, _dec171, _class63, _dec172, _dec173, _dec174, _dec175, _class64, _dec176, _dec177, _dec178, _dec179, _class65, _dec180, _dec181, _dec182, _class66, _dec183, _dec184, _dec185, _dec186, _class67, _desc9, _value9, _class68, _descriptor8, _dec187, _dec188, _dec189, _dec190, _dec191, _class70, _desc10, _value10, _class71, _descriptor9, _dec192, _dec193, _dec194, _dec195, _class73, _dec196, _dec197, _dec198, _dec199, _dec200, _class74, _desc11, _value11, _class75, _descriptor10, _dec201, _dec202, _dec203, _class77, _dec204, _dec205, _dec206, _class78, _dec207, _dec208, _dec209, _dec210, _class79, _dec211, _dec212, _dec213, _dec214, _class80, _dec215, _dec216, _dec217, _class81, _dec218, _dec219, _dec220, _class82, _dec221, _dec222, _dec223, _class83, _dec224, _dec225, _dec226, _dec227, _dec228, _class84, _desc12, _value12, _class85, _descriptor11, _dec229, _dec230, _dec231, _class87, _dec232, _dec233, _dec234, _class88, _dec235, _dec236, _dec237, _class89, _dec238, _dec239, _dec240, _dec241, _class90, _dec242, _dec243, _dec244, _dec245, _class91, _dec246, _dec247, _dec248, _dec249, _class92, _dec250, _dec251, _dec252, _class93, _dec253, _dec254, _dec255, _dec256, _class94, _dec257, _dec258, _dec259, _class95, _dec260, _dec261, _dec262, _dec263, _dec264, _class96, _desc13, _value13, _class97, _descriptor12, _dec265, _dec266, _dec267, _dec268, _class99, _dec269, _dec270, _dec271, _dec272, _dec273, _class100, _desc14, _value14, _class101, _descriptor13, _dec274, _dec275, _dec276, _class103, _dec277, _dec278, _dec279, _dec280, _class104, _dec281, _dec282, _dec283, _dec284, _class105, _dec285, _dec286, _dec287, _dec288, _class106, _dec289, _dec290, _dec291, _class107, _dec292, _dec293, _dec294, _class108, _dec295, _dec296, _dec297, _class109, _dec298, _dec299, _dec300, _class110, _dec301, _dec302, _dec303, _dec304, _dec305, _class111, _desc15, _value15, _class112, _descriptor14, _dec306, _dec307, _dec308, _dec309, _class114, _desc16, _value16, _class115, _descriptor15, _dec310, _dec311, _dec312, _class117, _dec313, _dec314, _dec315, _dec316, _dec317, _class118, _desc17, _value17, _class119, _descriptor16, _dec318, _dec319, _dec320, _dec321, _class121, _dec322, _dec323, _dec324, _class122, _dec325, _dec326, _dec327, _class123;

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.delayed = delayed;
exports.getEventOption = getEventOption;
exports.fireEvent = fireEvent;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaBinding = require('aurelia-binding');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EjConfigBuilder = exports.EjConfigBuilder = function () {
  function EjConfigBuilder() {
    _classCallCheck(this, EjConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  EjConfigBuilder.prototype.useAll = function useAll() {
    this.ejGrid().ejChart().ejSunburstChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejHeatMap().ejHeatMapLegend().ejSparkline().ejSymbolPalette().ejOverview().ejPager().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejComboBox().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejDateRangePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejPivotTreeMap().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejSignature().ejTooltip().ejSpellCheck().ejTemplate();
    return this;
  };

  EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  EjConfigBuilder.prototype.ejGrid = function ejGrid() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/column'));
    return this;
  };

  EjConfigBuilder.prototype.ejChart = function ejChart() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/chart'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/series'));
    return this;
  };

  EjConfigBuilder.prototype.ejSunburstChart = function ejSunburstChart() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstchart'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
    return this;
  };

  EjConfigBuilder.prototype.ejMap = function ejMap() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/map'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/layer'));
    return this;
  };

  EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/treemap'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/level'));
    return this;
  };

  EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangenavigator'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangeseries'));
    return this;
  };

  EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./diagram/diagram'));
    return this;
  };

  EjConfigBuilder.prototype.ejHeatMap = function ejHeatMap() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmap/heatmap'));
    return this;
  };

  EjConfigBuilder.prototype.ejHeatMapLegend = function ejHeatMapLegend() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
    return this;
  };

  EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./sparkline/sparkline'));
    return this;
  };

  EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./symbolpalette/symbolpalette'));
    return this;
  };

  EjConfigBuilder.prototype.ejOverview = function ejOverview() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./overview/overview'));
    return this;
  };

  EjConfigBuilder.prototype.ejPager = function ejPager() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pager/pager'));
    return this;
  };

  EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/bulletgraph'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/qualitativerange'));
    return this;
  };

  EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./circulargauge/circulargauge'));
    return this;
  };

  EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./lineargauge/lineargauge'));
    return this;
  };

  EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./digitalgauge/digitalgauge'));
    return this;
  };

  EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitter/splitter'));
    return this;
  };

  EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  };

  EjConfigBuilder.prototype.ejGantt = function ejGantt() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./gantt/gantt'));
    return this;
  };

  EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegrid'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegridcolumn'));
    return this;
  };

  EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./colorpicker/colorpicker'));
    return this;
  };

  EjConfigBuilder.prototype.ejDialog = function ejDialog() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
    return this;
  };

  EjConfigBuilder.prototype.ejScroller = function ejScroller() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./scroller/scroller'));
    return this;
  };

  EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./barcode/barcode'));
    return this;
  };

  EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pdfviewer/pdfviewer'));
    return this;
  };

  EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./numerictextbox/numerictextbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./currencytextbox/currencytextbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  };

  EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  };

  EjConfigBuilder.prototype.ejMenu = function ejMenu() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./menu/menu'));
    return this;
  };

  EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./maskedit/maskedit'));
    return this;
  };

  EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./treeview/treeview'));
    return this;
  };

  EjConfigBuilder.prototype.ejKanban = function ejKanban() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanban'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanbancolumn'));
    return this;
  };

  EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./ribbon/ribbon'));
    return this;
  };

  EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/spreadsheet'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/sheet'));
    return this;
  };

  EjConfigBuilder.prototype.ejRating = function ejRating() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./rating/rating'));
    return this;
  };

  EjConfigBuilder.prototype.ejListBox = function ejListBox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./listbox/listbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejListView = function ejListView() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./listview/listview'));
    return this;
  };

  EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
    return this;
  };

  EjConfigBuilder.prototype.ejRotator = function ejRotator() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./rotator/rotator'));
    return this;
  };

  EjConfigBuilder.prototype.ejRTE = function ejRTE() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./rte/rte'));
    return this;
  };

  EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./dropdownlist/dropdownlist'));
    return this;
  };

  EjConfigBuilder.prototype.ejComboBox = function ejComboBox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./combobox/combobox'));
    return this;
  };

  EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  };

  EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/radialmenu'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/item'));
    return this;
  };

  EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialslider/radialslider'));
    return this;
  };

  EjConfigBuilder.prototype.ejTile = function ejTile() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./tile/tile'));
    return this;
  };

  EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./accordion/accordion'));
    return this;
  };

  EjConfigBuilder.prototype.ejTab = function ejTab() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./tab/tab'));
    return this;
  };

  EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./radiobutton/radiobutton'));
    return this;
  };

  EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./togglebutton/togglebutton'));
    return this;
  };

  EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitbutton/splitbutton'));
    return this;
  };

  EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./groupbutton/groupbutton'));
    return this;
  };

  EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./datetimepicker/datetimepicker'));
    return this;
  };

  EjConfigBuilder.prototype.ejDateRangePicker = function ejDateRangePicker() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./daterangepicker/daterangepicker'));
    return this;
  };

  EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./progressbar/progressbar'));
    return this;
  };

  EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./tagcloud/tagcloud'));
    return this;
  };

  EjConfigBuilder.prototype.ejButton = function ejButton() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
    return this;
  };

  EjConfigBuilder.prototype.ejSlider = function ejSlider() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));
    return this;
  };

  EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./fileexplorer/fileexplorer'));
    return this;
  };

  EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgrid/pivotgrid'));
    return this;
  };

  EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotchart/pivotchart'));
    return this;
  };

  EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgauge/pivotgauge'));
    return this;
  };

  EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
    return this;
  };

  EjConfigBuilder.prototype.ejPivotTreeMap = function ejPivotTreeMap() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivottreemap/pivottreemap'));
    return this;
  };

  EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./waitingpopup/waitingpopup'));
    return this;
  };

  EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./reportviewer/reportviewer'));
    return this;
  };

  EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/schedule'));
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/scheduleresource'));
    return this;
  };

  EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./uploadbox/uploadbox'));
    return this;
  };

  EjConfigBuilder.prototype.ejSignature = function ejSignature() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./signature/signature'));
    return this;
  };

  EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  };

  EjConfigBuilder.prototype.ejSpellCheck = function ejSpellCheck() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./spellcheck/spellcheck'));
    return this;
  };

  EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
    this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/template'));
    return this;
  };

  return EjConfigBuilder;
}();

function configure(aurelia, configCallback) {
  var builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var ejAccordion = exports.ejAccordion = (_dec = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'accordion'), _dec2 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec4 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class2 = _dec2(_class2 = _dec3(_class2 = _dec4(_class2 = function (_WidgetBase) {
  _inherits(ejAccordion, _WidgetBase);

  function ejAccordion(element) {
    _classCallCheck(this, ejAccordion);

    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

    _this.element = element;
    return _this;
  }

  return ejAccordion;
}(WidgetBase)) || _class2) || _class2) || _class2) || _class2);
var ejAutocomplete = exports.ejAutocomplete = (_dec5 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'autocomplete'), _dec6 = generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'ignoreAccent', 'locale', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': ['enableRtl'] }), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec5(_class3 = _dec6(_class3 = _dec7(_class3 = function (_WidgetBase2) {
  _inherits(ejAutocomplete, _WidgetBase2);

  function ejAutocomplete(element) {
    _classCallCheck(this, ejAutocomplete);

    var _this2 = _possibleConstructorReturn(this, _WidgetBase2.call(this));

    _this2.element = element;
    return _this2;
  }

  return ejAutocomplete;
}(WidgetBase)) || _class3) || _class3) || _class3);
var ejBarcode = exports.ejBarcode = (_dec8 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'barcode'), _dec9 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec10 = generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension']), _dec11 = (0, _aureliaDependencyInjection.inject)(Element), _dec8(_class4 = _dec9(_class4 = _dec10(_class4 = _dec11(_class4 = function (_WidgetBase3) {
  _inherits(ejBarcode, _WidgetBase3);

  function ejBarcode(element) {
    _classCallCheck(this, ejBarcode);

    var _this3 = _possibleConstructorReturn(this, _WidgetBase3.call(this));

    _this3.element = element;
    return _this3;
  }

  return ejBarcode;
}(WidgetBase)) || _class4) || _class4) || _class4) || _class4);
var ejBulletGraph = exports.ejBulletGraph = (_dec12 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'bullet-graph'), _dec13 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec14 = generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'enableResizing', 'flowDirection', 'height', 'isResponsive', 'enableGroupSeparator', 'locale', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width']), _dec15 = (0, _aureliaDependencyInjection.inject)(Element), _dec16 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'qualitative-range'), _dec12(_class5 = _dec13(_class5 = _dec14(_class5 = _dec15(_class5 = (_class6 = function (_WidgetBase4) {
  _inherits(ejBulletGraph, _WidgetBase4);

  function ejBulletGraph(element) {
    _classCallCheck(this, ejBulletGraph);

    var _this4 = _possibleConstructorReturn(this, _WidgetBase4.call(this));

    _initDefineProp(_this4, 'qualitativeRanges', _descriptor, _this4);

    _this4.element = element;
    _this4.hasChildProperty = true;
    _this4.childPropertyName = 'qualitativeRanges';
    return _this4;
  }

  return ejBulletGraph;
}(WidgetBase), (_descriptor = _applyDecoratedDescriptor(_class6.prototype, 'qualitativeRanges', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class6)) || _class5) || _class5) || _class5) || _class5);
var QualitativeRange = exports.QualitativeRange = (_dec17 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec18 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'qualitative-range'), _dec19 = generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke']), _dec17(_class8 = _dec18(_class8 = _dec19(_class8 = function QualitativeRange() {
  _classCallCheck(this, QualitativeRange);
}) || _class8) || _class8) || _class8);
var ejButton = exports.ejButton = (_dec20 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'button'), _dec21 = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec22 = (0, _aureliaDependencyInjection.inject)(Element), _dec20(_class9 = _dec21(_class9 = _dec22(_class9 = function (_WidgetBase5) {
  _inherits(ejButton, _WidgetBase5);

  function ejButton(element) {
    _classCallCheck(this, ejButton);

    var _this5 = _possibleConstructorReturn(this, _WidgetBase5.call(this));

    _this5.element = element;
    return _this5;
  }

  return ejButton;
}(WidgetBase)) || _class9) || _class9) || _class9);
var ejChart = exports.ejChart = (_dec23 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'chart'), _dec24 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec25 = generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming']), _dec26 = (0, _aureliaDependencyInjection.inject)(Element), _dec27 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'series'), _dec23(_class10 = _dec24(_class10 = _dec25(_class10 = _dec26(_class10 = (_class11 = function (_WidgetBase6) {
  _inherits(ejChart, _WidgetBase6);

  function ejChart(element) {
    _classCallCheck(this, ejChart);

    var _this6 = _possibleConstructorReturn(this, _WidgetBase6.call(this));

    _initDefineProp(_this6, 'series', _descriptor2, _this6);

    _this6.element = element;
    _this6.hasChildProperty = true;
    _this6.childPropertyName = 'series';
    return _this6;
  }

  return ejChart;
}(WidgetBase), (_descriptor2 = _applyDecoratedDescriptor(_class11.prototype, 'series', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class11)) || _class10) || _class10) || _class10) || _class10);
var Series = exports.Series = (_dec28 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec29 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'series'), _dec30 = generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings']), _dec28(_class13 = _dec29(_class13 = _dec30(_class13 = function Series() {
  _classCallCheck(this, Series);
}) || _class13) || _class13) || _class13);
var ejCheckBox = exports.ejCheckBox = (_dec31 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'check-box'), _dec32 = generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState'], { 'enableRTL': ['enableRtl'] }), _dec33 = (0, _aureliaDependencyInjection.inject)(Element), _dec31(_class14 = _dec32(_class14 = _dec33(_class14 = function (_WidgetBase7) {
  _inherits(ejCheckBox, _WidgetBase7);

  function ejCheckBox(element) {
    _classCallCheck(this, ejCheckBox);

    var _this7 = _possibleConstructorReturn(this, _WidgetBase7.call(this));

    _this7.element = element;
    return _this7;
  }

  return ejCheckBox;
}(WidgetBase)) || _class14) || _class14) || _class14);
var ejCircularGauge = exports.ejCircularGauge = (_dec34 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'circular-gauge'), _dec35 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec36 = generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'rangeZOrder', 'enableAnimation', 'enableGroupSeparator', 'enableResize', 'exportSettings', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'locale', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'legend', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), _dec37 = (0, _aureliaDependencyInjection.inject)(Element), _dec34(_class15 = _dec35(_class15 = _dec36(_class15 = _dec37(_class15 = function (_WidgetBase8) {
  _inherits(ejCircularGauge, _WidgetBase8);

  function ejCircularGauge(element) {
    _classCallCheck(this, ejCircularGauge);

    var _this8 = _possibleConstructorReturn(this, _WidgetBase8.call(this));

    _this8.element = element;
    return _this8;
  }

  return ejCircularGauge;
}(WidgetBase)) || _class15) || _class15) || _class15) || _class15);
var ejColorPicker = exports.ejColorPicker = (_dec38 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'color-picker'), _dec39 = generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue']), _dec40 = (0, _aureliaDependencyInjection.inject)(Element), _dec38(_class16 = _dec39(_class16 = _dec40(_class16 = function (_WidgetBase9) {
  _inherits(ejColorPicker, _WidgetBase9);

  function ejColorPicker(element) {
    _classCallCheck(this, ejColorPicker);

    var _this9 = _possibleConstructorReturn(this, _WidgetBase9.call(this));

    _this9.element = element;
    return _this9;
  }

  return ejColorPicker;
}(WidgetBase)) || _class16) || _class16) || _class16);
var ejComboBox = exports.ejComboBox = (_dec41 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'combo-box'), _dec42 = generateBindables('ejComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enableRtl', 'enabled', 'fields', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'width'], ['value']), _dec43 = (0, _aureliaDependencyInjection.inject)(Element), _dec41(_class17 = _dec42(_class17 = _dec43(_class17 = function (_WidgetBase10) {
  _inherits(ejComboBox, _WidgetBase10);

  function ejComboBox(element) {
    _classCallCheck(this, ejComboBox);

    var _this10 = _possibleConstructorReturn(this, _WidgetBase10.call(this));

    _this10.isEditor = true;
    _this10.element = element;
    return _this10;
  }

  return ejComboBox;
}(WidgetBase)) || _class17) || _class17) || _class17);
exports.customAttribute = _aureliaTemplating.customAttribute;
exports.bindable = _aureliaTemplating.bindable;
exports.inject = _aureliaDependencyInjection.inject;
exports.inlineView = _aureliaTemplating.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
var constants = exports.constants = {
  eventPrefix: 'e-on-',
  bindablePrefix: 'e-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-',
  aureliaTemplateString: '<template><slot></slot></template>'
};

function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);
    var bindingInstance = container.get(_aureliaBinding.BindingEngine);
    inputs.push('options');
    inputs.push('widget');
    var len = inputs.length;
    if (observerCollection) {
      target.prototype.arrayObserver = [];
      observerCollection.forEach(function (element) {
        target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
      });
      target.prototype.bindingInstance = bindingInstance;
    }
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len; i++) {
        var option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
          option.forEach(function (prop) {
            registerProp(util, prop, target, behaviorResource, descriptor);
          });
        } else {
          registerProp(util, option, target, behaviorResource, descriptor);
        }
      }
    }
  };
}

function registerProp(util, option, target, behaviorResource, descriptor) {
  var nameOrConfigOrTarget = {
    name: util.getBindablePropertyName(option)
  };

  if (option === 'widget') {
    nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
  }

  var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
  prop.registerWith(target, behaviorResource, descriptor);
}

function delayed() {
  return function (target, key, descriptor) {
    var taskQueue = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_aureliaTaskQueue.TaskQueue);
    var ptr = descriptor.value;

    descriptor.value = function () {
      var _this11 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this.childPropertyName) {
        taskQueue.queueTask(function () {
          return ptr.apply(_this11, args);
        });
      } else {
        ptr.apply(this, args);
      }
    };

    return descriptor;
  };
}

function getEventOption(element) {
  var name = void 0;
  var attr = void 0;
  var attributes = element.attributes;
  var option = {};
  var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
  var util = container.get(Util);

  var _loop = function _loop(i, len) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      return 'continue';
    }
    var actualEventName = name.split('.')[0];
    var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = function (e) {
      return fireEvent(element, actualEventName, e);
    };
  };

  for (var i = 0, len = attributes.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === 'continue') continue;
  }
  return option;
}
function fireEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

var TemplateProcessor = exports.TemplateProcessor = (_dec44 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, Util), _dec44(_class18 = function () {
  function TemplateProcessor(context, templateEngine) {
    _classCallCheck(this, TemplateProcessor);

    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  TemplateProcessor.prototype.initTemplate = function initTemplate() {
    var proxy = this;
    ej.template.render = function (self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  };

  TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
    if (this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    var proxy = this.context;
    var element = this.context.widget.element;
    element.on(this.context.widget.pluginName + 'refresh', function () {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  };

  TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
    var templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    var scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    var actElement = $(selector).html();
    var tempElement = "<div ej-prop='" + index + "' class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  };

  TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
    var templates = $(element).find('.ej-aurelia-template');
    var templateObject = this.context.widget.aureliaTemplate;
    for (var template in templateObject) {
      var tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (var i = 0; i < tmplElement.length; i++) {
          var dataIndex = parseInt($(tmplElement[i]).attr('ej-prop'));
          var view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[dataIndex], this.context.parentCtx);
          templateObject[template].views[dataIndex] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  };

  TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
    var templateObject = this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (var t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  };

  TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
    for (var i = 0; i < obj.views.length; i++) {
      var view = obj.views[i];
      view.unbind();
    }
  };

  return TemplateProcessor;
}()) || _class18);
var Template = exports.Template = (_dec45 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'template'), _dec46 = (0, _aureliaTemplating.noView)(), _dec47 = (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
  var html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  element.innerHTML = '';
}), _dec48 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction), _dec45(_class19 = _dec46(_class19 = _dec47(_class19 = _dec48(_class19 = (_class20 = function Template(target) {
  _classCallCheck(this, Template);

  _initDefineProp(this, 'template', _descriptor3, this);

  this.template = target.elementInstruction.template;
}, (_descriptor3 = _applyDecoratedDescriptor(_class20.prototype, 'template', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class20)) || _class19) || _class19) || _class19) || _class19);

var Util = exports.Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
    var name = '' + constants.bindablePrefix + propertyName;
    return this._unhyphenate(name);
  };

  Util.prototype._unhyphenate = function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  Util.prototype.getOptions = function getOptions(model, properties) {
    var _this12 = this;

    var bindableproperites = {};
    var value = void 0;
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
        model.abbrevProperties[prop].some(function (property) {
          value = model[_this12.getBindablePropertyName(property)];
          return _this12.hasValue(value);
        });
      } else {
        value = model[this.getBindablePropertyName(prop)];
      }
      if (this.hasValue(value)) {
        if (typeof value === 'string') {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  };

  Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
    var _this13 = this;

    var property = void 0;

    var _loop2 = function _loop2() {
      if (_isArray2) {
        if (_i2 >= _iterator2.length) return 'break';
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) return 'break';
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
        options.abbrevProperties[prop].some(function (props) {
          property = propertyName === _this13.getBindablePropertyName(props) ? prop : undefined;
          return property;
        });
        if (property) return 'break';
      } else if (propertyName === _this13.getBindablePropertyName(prop)) {
        property = prop;
        return 'break';
      }
    };

    for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      var _ret2 = _loop2();

      if (_ret2 === 'break') break;
    }
    return property;
  };

  Util.prototype.hasValue = function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  };

  Util.prototype.processData = function processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  };

  return Util;
}();

var firstValue = {};
var WidgetBase = exports.WidgetBase = (_dec49 = delayed(), (_class22 = function () {
  function WidgetBase() {
    _classCallCheck(this, WidgetBase);
  }

  WidgetBase.prototype.createWidget = function createWidget(option) {
    var _this14 = this;

    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }
    this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.model._change = function (evt) {
        if ('eValue' in _this14) {
          _this14[_this14.util.getBindablePropertyName('value')] = evt.value;
        }
      };
    }
  };

  WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
    this.parentCtx = overrideCtx;
    if (this.widget && this.widget.element && this.isEditor) {
      this.widget.option('value', this.eValue === undefined ? null : this.eValue);
    }
  };

  WidgetBase.prototype.createTwoWays = function createTwoWays() {
    var model = this.allOption;
    var twoWays = this.twoWays;
    var len = twoWays.length;
    for (var i = 0; i < len; i++) {
      var _prop = twoWays[i];
      ej.createObject(_prop, this.addTwoways(_prop), model);
    }
  };

  WidgetBase.prototype.addTwoways = function addTwoways(prop) {
    var model = this;
    var value = firstValue;
    return function (newVal, isApp) {
      if (value === firstValue) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal)) {
        var _viewModelProp = model.util.getBindablePropertyName(prop);
        model[_viewModelProp] = newVal;
      }
      return null;
    };
  };

  WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
    var propOptions = void 0;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    var eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  };

  WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
    var PropertyName = this.childPropertyName;
    var childCollection = this[PropertyName];
    var len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      var childProperties = childCollection[0].controlProperties;
      for (var i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  };

  WidgetBase.prototype.attached = function attached() {
    if (this.templateProcessor) {
      this[this.childPropertyName].forEach(function (template) {
        return template.setTemplates();
      });
    }
    this.util = new Util();
    this.createWidget({ element: this.element });
  };

  WidgetBase.prototype.unsubscribe = function unsubscribe() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  };

  WidgetBase.prototype.unbind = function unbind() {
    this.unsubscribe();
  };

  WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    var _this15 = this;

    if (this.widget) {
      var modelValue = void 0;
      var _prop2 = this.util.getControlPropertyName(this, property);
      this.unsubscribe();
      if (this.arrayObserver) {
        this.arrayObserver.forEach(function (arrayProp) {
          if (_this15[arrayProp] instanceof Array) {
            _this15.subscription = _this15.bindingInstance.collectionObserver(_this15[arrayProp]).subscribe(function (e) {
              _this15.update(e);
            });
          }
        });
      }
      if (_prop2) {
        if (_prop2 === 'widget') {
          return;
        } else if (_prop2 !== 'options') {
          modelValue = this.widget.model[_prop2];
          var isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(_prop2);
            }
            this.widget.option(_prop2, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  };

  WidgetBase.prototype.update = function update(e) {
    var _this16 = this;

    var modelValue = void 0;
    var newVal = void 0;
    if (e.length) {
      this.arrayObserver.forEach(function (arrayProp) {
        if (_this16[arrayProp] instanceof Array) {
          var _prop3 = _this16.util.getControlPropertyName(_this16, arrayProp);
          modelValue = _this16.widget.model[_prop3];
          if (typeof modelValue === 'function') {
            modelValue = modelValue();
            newVal = modelValue;
            newVal = _this16.addTwoways(_prop3);
            _this16.widget.option(_prop3, newVal);
          } else {
            _this16.widget.option(_prop3, modelValue);
          }
        }
      });
    }
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return WidgetBase;
}(), (_applyDecoratedDescriptor(_class22.prototype, 'attached', [_dec49], Object.getOwnPropertyDescriptor(_class22.prototype, 'attached'), _class22.prototype)), _class22));
var ejCurrencyTextbox = exports.ejCurrencyTextbox = (_dec50 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'currency-textbox'), _dec51 = generateBindables('ejCurrencyTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec52 = (0, _aureliaDependencyInjection.inject)(Element), _dec50(_class23 = _dec51(_class23 = _dec52(_class23 = function (_WidgetBase11) {
  _inherits(ejCurrencyTextbox, _WidgetBase11);

  function ejCurrencyTextbox(element) {
    _classCallCheck(this, ejCurrencyTextbox);

    var _this17 = _possibleConstructorReturn(this, _WidgetBase11.call(this));

    _this17.isEditor = true;
    _this17.element = element;
    return _this17;
  }

  return ejCurrencyTextbox;
}(WidgetBase)) || _class23) || _class23) || _class23);
var ejDatePicker = exports.ejDatePicker = (_dec53 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-picker'), _dec54 = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec55 = (0, _aureliaDependencyInjection.inject)(Element), _dec53(_class24 = _dec54(_class24 = _dec55(_class24 = function (_WidgetBase12) {
  _inherits(ejDatePicker, _WidgetBase12);

  function ejDatePicker(element) {
    _classCallCheck(this, ejDatePicker);

    var _this18 = _possibleConstructorReturn(this, _WidgetBase12.call(this));

    _this18.isEditor = true;
    _this18.element = element;
    return _this18;
  }

  return ejDatePicker;
}(WidgetBase)) || _class24) || _class24) || _class24);
var ejDateTimePicker = exports.ejDateTimePicker = (_dec56 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-time-picker'), _dec57 = generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec58 = (0, _aureliaDependencyInjection.inject)(Element), _dec56(_class25 = _dec57(_class25 = _dec58(_class25 = function (_WidgetBase13) {
  _inherits(ejDateTimePicker, _WidgetBase13);

  function ejDateTimePicker(element) {
    _classCallCheck(this, ejDateTimePicker);

    var _this19 = _possibleConstructorReturn(this, _WidgetBase13.call(this));

    _this19.isEditor = true;
    _this19.element = element;
    return _this19;
  }

  return ejDateTimePicker;
}(WidgetBase)) || _class25) || _class25) || _class25);
var ejDateRangePicker = exports.ejDateRangePicker = (_dec59 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-range-picker'), _dec60 = generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'maxDate', 'minDate', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value']), _dec61 = (0, _aureliaDependencyInjection.inject)(Element), _dec59(_class26 = _dec60(_class26 = _dec61(_class26 = function (_WidgetBase14) {
  _inherits(ejDateRangePicker, _WidgetBase14);

  function ejDateRangePicker(element) {
    _classCallCheck(this, ejDateRangePicker);

    var _this20 = _possibleConstructorReturn(this, _WidgetBase14.call(this));

    _this20.isEditor = true;
    _this20.element = element;
    return _this20;
  }

  return ejDateRangePicker;
}(WidgetBase)) || _class26) || _class26) || _class26);
var ejDialog = exports.ejDialog = (_dec62 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'dialog'), _dec63 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec64 = generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], { 'enableRTL': ['enableRtl'] }), _dec65 = (0, _aureliaDependencyInjection.inject)(Element), _dec62(_class27 = _dec63(_class27 = _dec64(_class27 = _dec65(_class27 = function (_WidgetBase15) {
  _inherits(ejDialog, _WidgetBase15);

  function ejDialog(element) {
    _classCallCheck(this, ejDialog);

    var _this21 = _possibleConstructorReturn(this, _WidgetBase15.call(this));

    _this21.element = element;
    return _this21;
  }

  return ejDialog;
}(WidgetBase)) || _class27) || _class27) || _class27) || _class27);
var ejDigitalGauge = exports.ejDigitalGauge = (_dec66 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'digital-gauge'), _dec67 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec68 = generateBindables('ejDigitalGauge', ['exportSettings', 'frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value']), _dec69 = (0, _aureliaDependencyInjection.inject)(Element), _dec66(_class28 = _dec67(_class28 = _dec68(_class28 = _dec69(_class28 = function (_WidgetBase16) {
  _inherits(ejDigitalGauge, _WidgetBase16);

  function ejDigitalGauge(element) {
    _classCallCheck(this, ejDigitalGauge);

    var _this22 = _possibleConstructorReturn(this, _WidgetBase16.call(this));

    _this22.element = element;
    return _this22;
  }

  return ejDigitalGauge;
}(WidgetBase)) || _class28) || _class28) || _class28) || _class28);
var ejDiagram = exports.ejDiagram = (_dec70 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'diagram'), _dec71 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec72 = generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor']), _dec73 = (0, _aureliaDependencyInjection.inject)(Element), _dec70(_class29 = _dec71(_class29 = _dec72(_class29 = _dec73(_class29 = function (_WidgetBase17) {
  _inherits(ejDiagram, _WidgetBase17);

  function ejDiagram(element) {
    _classCallCheck(this, ejDiagram);

    var _this23 = _possibleConstructorReturn(this, _WidgetBase17.call(this));

    _this23.element = element;
    return _this23;
  }

  return ejDiagram;
}(WidgetBase)) || _class29) || _class29) || _class29) || _class29);
var ejDropDownList = exports.ejDropDownList = (_dec74 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'drop-down-list'), _dec75 = generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'loadOnDemand', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), _dec76 = (0, _aureliaDependencyInjection.inject)(Element), _dec74(_class30 = _dec75(_class30 = _dec76(_class30 = function (_WidgetBase18) {
  _inherits(ejDropDownList, _WidgetBase18);

  function ejDropDownList(element) {
    _classCallCheck(this, ejDropDownList);

    var _this24 = _possibleConstructorReturn(this, _WidgetBase18.call(this));

    _this24.isEditor = true;
    _this24.element = element;
    return _this24;
  }

  return ejDropDownList;
}(WidgetBase)) || _class30) || _class30) || _class30);
var ejFileExplorer = exports.ejFileExplorer = (_dec77 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'file-explorer'), _dec78 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec79 = generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enablePersistence', 'enableResize', 'enableRTL', 'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'rootFolderName', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'virtualItemCount', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec80 = (0, _aureliaDependencyInjection.inject)(Element), _dec77(_class31 = _dec78(_class31 = _dec79(_class31 = _dec80(_class31 = function (_WidgetBase19) {
  _inherits(ejFileExplorer, _WidgetBase19);

  function ejFileExplorer(element) {
    _classCallCheck(this, ejFileExplorer);

    var _this25 = _possibleConstructorReturn(this, _WidgetBase19.call(this));

    _this25.element = element;
    return _this25;
  }

  return ejFileExplorer;
}(WidgetBase)) || _class31) || _class31) || _class31) || _class31);
var Column = exports.Column = (_dec81 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec82 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'column'), _dec83 = generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] }), _dec84 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec81(_class32 = _dec82(_class32 = _dec83(_class32 = (_class33 = function () {
  function Column() {
    _classCallCheck(this, Column);

    _initDefineProp(this, 'template', _descriptor4, this);
  }

  Column.prototype.setTemplates = function setTemplates() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  return Column;
}(), (_descriptor4 = _applyDecoratedDescriptor(_class33.prototype, 'template', [_dec84], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class33)) || _class32) || _class32) || _class32);
var ejGrid = exports.ejGrid = (_dec85 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'grid'), _dec86 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec87 = generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], { 'enableRTL': ['enableRtl'] }, ['dataSource']), _dec88 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec89 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'column'), _dec85(_class35 = _dec86(_class35 = _dec87(_class35 = _dec88(_class35 = (_class36 = function (_WidgetBase20) {
  _inherits(ejGrid, _WidgetBase20);

  function ejGrid(element, templateEngine) {
    _classCallCheck(this, ejGrid);

    var _this26 = _possibleConstructorReturn(this, _WidgetBase20.call(this));

    _initDefineProp(_this26, 'columns', _descriptor5, _this26);

    _this26.element = element;
    _this26.hasChildProperty = true;
    _this26.childPropertyName = 'columns';
    _this26.templateProcessor = new TemplateProcessor(_this26, templateEngine);
    _this26.templateProcessor.initTemplate();
    return _this26;
  }

  return ejGrid;
}(WidgetBase), (_descriptor5 = _applyDecoratedDescriptor(_class36.prototype, 'columns', [_dec89], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class36)) || _class35) || _class35) || _class35) || _class35);
var ejGroupButton = exports.ejGroupButton = (_dec90 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'group-button'), _dec91 = generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec92 = (0, _aureliaDependencyInjection.inject)(Element), _dec90(_class38 = _dec91(_class38 = _dec92(_class38 = function (_WidgetBase21) {
  _inherits(ejGroupButton, _WidgetBase21);

  function ejGroupButton(element) {
    _classCallCheck(this, ejGroupButton);

    var _this27 = _possibleConstructorReturn(this, _WidgetBase21.call(this));

    _this27.element = element;
    return _this27;
  }

  return ejGroupButton;
}(WidgetBase)) || _class38) || _class38) || _class38);
var ejGantt = exports.ejGantt = (_dec93 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'gantt'), _dec94 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec95 = generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowDragAndDrop', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowUnscheduledTask', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'cellTooltipTemplate', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'dayWorkingTime', 'dragTooltip', 'durationMapping', 'durationUnit', 'durationUnitMapping', 'editDialogFields', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enablePredecessorValidation', 'enableProgressBarResizing', 'enableResize', 'enableSerialNumber', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'enableWBS', 'enableWBSPredecessor', 'endDateMapping', 'expandStateMapping', 'filterSettings', 'groupCollection', 'groupIdMapping', 'groupNameMapping', 'highlightNonWorkingTime', 'highlightWeekends', 'holidays', 'includeWeekend', 'isResponsive', 'leftTaskLabelMapping', 'leftTaskLabelTemplate', 'locale', 'milestoneMapping', 'milestoneTemplate', 'nonWorkingBackground', 'notesMapping', 'parentProgressbarBackground', 'parentTaskIdMapping', 'parentTaskbarBackground', 'parentTaskbarTemplate', 'predecessorMapping', 'predecessorTooltipTemplate', 'progressMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'query', 'readOnly', 'renderBaseline', 'resourceCollectionMapping', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resourceUnitMapping', 'resources', 'rightTaskLabelMapping', 'rightTaskLabelTemplate', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedCellIndexes', 'selectedRowIndex', 'selectionType', 'selectionMode', 'showColumnChooser', 'showColumnOptions', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'splitterSettings', 'startDateMapping', 'stripLines', 'taskCollectionMapping', 'taskIdMapping', 'taskNameMapping', 'taskSchedulingMode', 'taskSchedulingModeMapping', 'taskType', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTemplate', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'toolbarSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'weekendBackground', 'workMapping', 'workUnit', 'workWeek', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'], {}, ['dataSource']), _dec96 = (0, _aureliaDependencyInjection.inject)(Element), _dec93(_class39 = _dec94(_class39 = _dec95(_class39 = _dec96(_class39 = function (_WidgetBase22) {
  _inherits(ejGantt, _WidgetBase22);

  function ejGantt(element) {
    _classCallCheck(this, ejGantt);

    var _this28 = _possibleConstructorReturn(this, _WidgetBase22.call(this));

    _this28.element = element;
    return _this28;
  }

  return ejGantt;
}(WidgetBase)) || _class39) || _class39) || _class39) || _class39);
var ejHeatMap = exports.ejHeatMap = (_dec97 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'heat-map'), _dec98 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec99 = generateBindables('ejHeatMap', ['width', 'height', 'id', 'showTooltip', 'tooltipSettings', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection']), _dec100 = (0, _aureliaDependencyInjection.inject)(Element), _dec97(_class40 = _dec98(_class40 = _dec99(_class40 = _dec100(_class40 = function (_WidgetBase23) {
  _inherits(ejHeatMap, _WidgetBase23);

  function ejHeatMap(element) {
    _classCallCheck(this, ejHeatMap);

    var _this29 = _possibleConstructorReturn(this, _WidgetBase23.call(this));

    _this29.element = element;
    return _this29;
  }

  return ejHeatMap;
}(WidgetBase)) || _class40) || _class40) || _class40) || _class40);
var ejKanban = exports.ejKanban = (_dec101 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban'), _dec102 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec103 = generateBindables('ejKanban', ['allowDragAndDrop', 'allowExternalDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale', 'showColumnWhenEmpty'], ['dataSource'], { 'enableRTL': ['enableRtl'] }, ['dataSource']), _dec104 = (0, _aureliaDependencyInjection.inject)(Element), _dec105 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'kanban-column'), _dec101(_class41 = _dec102(_class41 = _dec103(_class41 = _dec104(_class41 = (_class42 = function (_WidgetBase24) {
  _inherits(ejKanban, _WidgetBase24);

  function ejKanban(element) {
    _classCallCheck(this, ejKanban);

    var _this30 = _possibleConstructorReturn(this, _WidgetBase24.call(this));

    _initDefineProp(_this30, 'columns', _descriptor6, _this30);

    _this30.element = element;
    _this30.hasChildProperty = true;
    _this30.childPropertyName = 'columns';
    return _this30;
  }

  return ejKanban;
}(WidgetBase), (_descriptor6 = _applyDecoratedDescriptor(_class42.prototype, 'columns', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class42)) || _class41) || _class41) || _class41) || _class41);
var KanbanColumn = exports.KanbanColumn = (_dec106 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec107 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban-column'), _dec108 = generateBindables('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton']), _dec106(_class44 = _dec107(_class44 = _dec108(_class44 = function KanbanColumn() {
  _classCallCheck(this, KanbanColumn);
}) || _class44) || _class44) || _class44);
var ejHeatMapLegend = exports.ejHeatMapLegend = (_dec109 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'heat-map-legend'), _dec110 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec111 = generateBindables('ejHeatMapLegend', ['width', 'height', 'isResponsive', 'showLabel', 'colorMappingCollection', 'orientation', 'legendMode']), _dec112 = (0, _aureliaDependencyInjection.inject)(Element), _dec109(_class45 = _dec110(_class45 = _dec111(_class45 = _dec112(_class45 = function (_WidgetBase25) {
  _inherits(ejHeatMapLegend, _WidgetBase25);

  function ejHeatMapLegend(element) {
    _classCallCheck(this, ejHeatMapLegend);

    var _this31 = _possibleConstructorReturn(this, _WidgetBase25.call(this));

    _this31.element = element;
    return _this31;
  }

  return ejHeatMapLegend;
}(WidgetBase)) || _class45) || _class45) || _class45) || _class45);
var ejLinearGauge = exports.ejLinearGauge = (_dec113 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'linear-gauge'), _dec114 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec115 = generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'exportSettings', 'isResponsive', 'enableGroupSeparator', 'enableResize', 'frame', 'height', 'labelColor', 'locale', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), _dec116 = (0, _aureliaDependencyInjection.inject)(Element), _dec113(_class46 = _dec114(_class46 = _dec115(_class46 = _dec116(_class46 = function (_WidgetBase26) {
  _inherits(ejLinearGauge, _WidgetBase26);

  function ejLinearGauge(element) {
    _classCallCheck(this, ejLinearGauge);

    var _this32 = _possibleConstructorReturn(this, _WidgetBase26.call(this));

    _this32.element = element;
    return _this32;
  }

  return ejLinearGauge;
}(WidgetBase)) || _class46) || _class46) || _class46) || _class46);
var ejListBox = exports.ejListBox = (_dec117 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'list-box'), _dec118 = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields', 'height', 'itemHeight', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'sortOrder', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value', 'dataSource'], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), _dec119 = (0, _aureliaDependencyInjection.inject)(Element), _dec117(_class47 = _dec118(_class47 = _dec119(_class47 = function (_WidgetBase27) {
  _inherits(ejListBox, _WidgetBase27);

  function ejListBox(element) {
    _classCallCheck(this, ejListBox);

    var _this33 = _possibleConstructorReturn(this, _WidgetBase27.call(this));

    _this33.element = element;
    return _this33;
  }

  return ejListBox;
}(WidgetBase)) || _class47) || _class47) || _class47);
var Layer = exports.Layer = (_dec120 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec121 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'layer'), _dec122 = generateBindables('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers']), _dec120(_class48 = _dec121(_class48 = _dec122(_class48 = function Layer() {
  _classCallCheck(this, Layer);
}) || _class48) || _class48) || _class48);
var ejMap = exports.ejMap = (_dec123 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'map'), _dec124 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec125 = generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'draggingOnSelection', 'enableAnimation', 'enableRTL', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'isResponsive', 'zoomSettings', 'navigationControl', 'locale', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'], { 'enableRTL': ['enableRtl'] }), _dec126 = (0, _aureliaDependencyInjection.inject)(Element), _dec127 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'layer'), _dec123(_class49 = _dec124(_class49 = _dec125(_class49 = _dec126(_class49 = (_class50 = function (_WidgetBase28) {
  _inherits(ejMap, _WidgetBase28);

  function ejMap(element) {
    _classCallCheck(this, ejMap);

    var _this34 = _possibleConstructorReturn(this, _WidgetBase28.call(this));

    _initDefineProp(_this34, 'layers', _descriptor7, _this34);

    _this34.element = element;
    _this34.hasChildProperty = true;
    _this34.childPropertyName = 'layers';
    return _this34;
  }

  return ejMap;
}(WidgetBase), (_descriptor7 = _applyDecoratedDescriptor(_class50.prototype, 'layers', [_dec127], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class50)) || _class49) || _class49) || _class49) || _class49);
var ejListView = exports.ejListView = (_dec128 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'list-view'), _dec129 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec130 = generateBindables('ejListView', ['ajaxSettings', 'checkedIndices', 'cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'itemRequestCount', 'totalItemsCount', 'allowVirtualScrolling', 'virtualScrollMode'], ['dataSource', 'selectedItemIndex'], {}, ['dataSource']), _dec131 = (0, _aureliaDependencyInjection.inject)(Element), _dec128(_class52 = _dec129(_class52 = _dec130(_class52 = _dec131(_class52 = function (_WidgetBase29) {
  _inherits(ejListView, _WidgetBase29);

  function ejListView(element) {
    _classCallCheck(this, ejListView);

    var _this35 = _possibleConstructorReturn(this, _WidgetBase29.call(this));

    _this35.element = element;
    return _this35;
  }

  return ejListView;
}(WidgetBase)) || _class52) || _class52) || _class52) || _class52);
var ejMaskEdit = exports.ejMaskEdit = (_dec132 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'mask-edit'), _dec133 = generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'locale', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value']), _dec134 = (0, _aureliaDependencyInjection.inject)(Element), _dec132(_class53 = _dec133(_class53 = _dec134(_class53 = function (_WidgetBase30) {
  _inherits(ejMaskEdit, _WidgetBase30);

  function ejMaskEdit(element) {
    _classCallCheck(this, ejMaskEdit);

    var _this36 = _possibleConstructorReturn(this, _WidgetBase30.call(this));

    _this36.isEditor = true;
    _this36.element = element;
    return _this36;
  }

  return ejMaskEdit;
}(WidgetBase)) || _class53) || _class53) || _class53);
var ejMenu = exports.ejMenu = (_dec135 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'menu'), _dec136 = generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'container', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width', 'overflowHeight', 'overflowWidth'], [], { 'enableRTL': ['enableRtl'] }), _dec137 = (0, _aureliaDependencyInjection.inject)(Element), _dec135(_class54 = _dec136(_class54 = _dec137(_class54 = function (_WidgetBase31) {
  _inherits(ejMenu, _WidgetBase31);

  function ejMenu(element) {
    _classCallCheck(this, ejMenu);

    var _this37 = _possibleConstructorReturn(this, _WidgetBase31.call(this));

    _this37.element = element;
    return _this37;
  }

  return ejMenu;
}(WidgetBase)) || _class54) || _class54) || _class54);
var ejNumericTextbox = exports.ejNumericTextbox = (_dec138 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'numeric-textbox'), _dec139 = generateBindables('ejNumericTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec140 = (0, _aureliaDependencyInjection.inject)(Element), _dec138(_class55 = _dec139(_class55 = _dec140(_class55 = function (_WidgetBase32) {
  _inherits(ejNumericTextbox, _WidgetBase32);

  function ejNumericTextbox(element) {
    _classCallCheck(this, ejNumericTextbox);

    var _this38 = _possibleConstructorReturn(this, _WidgetBase32.call(this));

    _this38.isEditor = true;
    _this38.element = element;
    return _this38;
  }

  return ejNumericTextbox;
}(WidgetBase)) || _class55) || _class55) || _class55);
var ejNavigationDrawer = exports.ejNavigationDrawer = (_dec141 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'navigation-drawer'), _dec142 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec143 = generateBindables('ejNavigationDrawer', ['ajaxSettings', 'contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width', 'isPaneOpen']), _dec144 = (0, _aureliaDependencyInjection.inject)(Element), _dec141(_class56 = _dec142(_class56 = _dec143(_class56 = _dec144(_class56 = function (_WidgetBase33) {
  _inherits(ejNavigationDrawer, _WidgetBase33);

  function ejNavigationDrawer(element) {
    _classCallCheck(this, ejNavigationDrawer);

    var _this39 = _possibleConstructorReturn(this, _WidgetBase33.call(this));

    _this39.element = element;
    return _this39;
  }

  return ejNavigationDrawer;
}(WidgetBase)) || _class56) || _class56) || _class56) || _class56);
var ejOverview = exports.ejOverview = (_dec145 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'overview'), _dec146 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec147 = generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': ['sourceId'] }), _dec148 = (0, _aureliaDependencyInjection.inject)(Element), _dec145(_class57 = _dec146(_class57 = _dec147(_class57 = _dec148(_class57 = function (_WidgetBase34) {
  _inherits(ejOverview, _WidgetBase34);

  function ejOverview(element) {
    _classCallCheck(this, ejOverview);

    var _this40 = _possibleConstructorReturn(this, _WidgetBase34.call(this));

    _this40.element = element;
    return _this40;
  }

  return ejOverview;
}(WidgetBase)) || _class57) || _class57) || _class57) || _class57);
var ejPager = exports.ejPager = (_dec149 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pager'), _dec150 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec151 = generateBindables('ejPager', ['customText', 'currentPage', 'cssClass', 'enabled', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'isResponsive', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'pageSizeMessage', 'template', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], { 'enableRTL': ['enableRtl'] }), _dec152 = (0, _aureliaDependencyInjection.inject)(Element), _dec149(_class58 = _dec150(_class58 = _dec151(_class58 = _dec152(_class58 = function (_WidgetBase35) {
  _inherits(ejPager, _WidgetBase35);

  function ejPager(element) {
    _classCallCheck(this, ejPager);

    var _this41 = _possibleConstructorReturn(this, _WidgetBase35.call(this));

    _this41.element = element;
    return _this41;
  }

  return ejPager;
}(WidgetBase)) || _class58) || _class58) || _class58) || _class58);
var ejPdfViewer = exports.ejPdfViewer = (_dec153 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pdf-viewer'), _dec154 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec155 = generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'textSelectionContextMenu', 'annotationContextMenu', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'bufferingMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName']), _dec156 = (0, _aureliaDependencyInjection.inject)(Element), _dec153(_class59 = _dec154(_class59 = _dec155(_class59 = _dec156(_class59 = function (_WidgetBase36) {
  _inherits(ejPdfViewer, _WidgetBase36);

  function ejPdfViewer(element) {
    _classCallCheck(this, ejPdfViewer);

    var _this42 = _possibleConstructorReturn(this, _WidgetBase36.call(this));

    _this42.element = element;
    return _this42;
  }

  return ejPdfViewer;
}(WidgetBase)) || _class59) || _class59) || _class59) || _class59);
var ejPivotChart = exports.ejPivotChart = (_dec157 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-chart'), _dec158 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec159 = generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'axes', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'title', 'url', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }), _dec160 = (0, _aureliaDependencyInjection.inject)(Element), _dec157(_class60 = _dec158(_class60 = _dec159(_class60 = _dec160(_class60 = function (_WidgetBase37) {
  _inherits(ejPivotChart, _WidgetBase37);

  function ejPivotChart(element) {
    _classCallCheck(this, ejPivotChart);

    var _this43 = _possibleConstructorReturn(this, _WidgetBase37.call(this));

    _this43.element = element;
    return _this43;
  }

  return ejPivotChart;
}(WidgetBase)) || _class60) || _class60) || _class60) || _class60);
var ejPercentageTextbox = exports.ejPercentageTextbox = (_dec161 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'percentage-textbox'), _dec162 = generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec163 = (0, _aureliaDependencyInjection.inject)(Element), _dec161(_class61 = _dec162(_class61 = _dec163(_class61 = function (_WidgetBase38) {
  _inherits(ejPercentageTextbox, _WidgetBase38);

  function ejPercentageTextbox(element) {
    _classCallCheck(this, ejPercentageTextbox);

    var _this44 = _possibleConstructorReturn(this, _WidgetBase38.call(this));

    _this44.isEditor = true;
    _this44.element = element;
    return _this44;
  }

  return ejPercentageTextbox;
}(WidgetBase)) || _class61) || _class61) || _class61);
var ejPivotGrid = exports.ejPivotGrid = (_dec164 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-grid'), _dec165 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec166 = generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'headerSettings', 'showUniqueNameOnPivotButton', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellClick', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'maxNodeLimitInMemberEditor', 'enableMemberEditorPaging', 'memberEditorPageSize', 'enableMemberEditorSorting', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableColumnResizing', 'resizeColumnsToFit', 'enableContextMenu', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableCompleteDataExport', 'enableXHRCredentials'], [], { 'pivotTableFieldListID': ['pivotTableFieldListId'], 'enableRTL': ['enableRtl'] }), _dec167 = (0, _aureliaDependencyInjection.inject)(Element), _dec164(_class62 = _dec165(_class62 = _dec166(_class62 = _dec167(_class62 = function (_WidgetBase39) {
  _inherits(ejPivotGrid, _WidgetBase39);

  function ejPivotGrid(element) {
    _classCallCheck(this, ejPivotGrid);

    var _this45 = _possibleConstructorReturn(this, _WidgetBase39.call(this));

    _this45.element = element;
    return _this45;
  }

  return ejPivotGrid;
}(WidgetBase)) || _class62) || _class62) || _class62) || _class62);
var ejPivotSchemaDesigner = exports.ejPivotSchemaDesigner = (_dec168 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-schema-designer'), _dec169 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec170 = generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], { 'enableRTL': ['enableRtl'] }), _dec171 = (0, _aureliaDependencyInjection.inject)(Element), _dec168(_class63 = _dec169(_class63 = _dec170(_class63 = _dec171(_class63 = function (_WidgetBase40) {
  _inherits(ejPivotSchemaDesigner, _WidgetBase40);

  function ejPivotSchemaDesigner(element) {
    _classCallCheck(this, ejPivotSchemaDesigner);

    var _this46 = _possibleConstructorReturn(this, _WidgetBase40.call(this));

    _this46.element = element;
    return _this46;
  }

  return ejPivotSchemaDesigner;
}(WidgetBase)) || _class63) || _class63) || _class63) || _class63);
var ejPivotTreeMap = exports.ejPivotTreeMap = (_dec172 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-tree-map'), _dec173 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec174 = generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableXHRCredentials']), _dec175 = (0, _aureliaDependencyInjection.inject)(Element), _dec172(_class64 = _dec173(_class64 = _dec174(_class64 = _dec175(_class64 = function (_WidgetBase41) {
  _inherits(ejPivotTreeMap, _WidgetBase41);

  function ejPivotTreeMap(element) {
    _classCallCheck(this, ejPivotTreeMap);

    var _this47 = _possibleConstructorReturn(this, _WidgetBase41.call(this));

    _this47.element = element;
    return _this47;
  }

  return ejPivotTreeMap;
}(WidgetBase)) || _class64) || _class64) || _class64) || _class64);
var ejPivotGauge = exports.ejPivotGauge = (_dec176 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-gauge'), _dec177 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec178 = generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }), _dec179 = (0, _aureliaDependencyInjection.inject)(Element), _dec176(_class65 = _dec177(_class65 = _dec178(_class65 = _dec179(_class65 = function (_WidgetBase42) {
  _inherits(ejPivotGauge, _WidgetBase42);

  function ejPivotGauge(element) {
    _classCallCheck(this, ejPivotGauge);

    var _this48 = _possibleConstructorReturn(this, _WidgetBase42.call(this));

    _this48.element = element;
    return _this48;
  }

  return ejPivotGauge;
}(WidgetBase)) || _class65) || _class65) || _class65) || _class65);
var ejProgressBar = exports.ejProgressBar = (_dec180 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'progress-bar'), _dec181 = generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec182 = (0, _aureliaDependencyInjection.inject)(Element), _dec180(_class66 = _dec181(_class66 = _dec182(_class66 = function (_WidgetBase43) {
  _inherits(ejProgressBar, _WidgetBase43);

  function ejProgressBar(element) {
    _classCallCheck(this, ejProgressBar);

    var _this49 = _possibleConstructorReturn(this, _WidgetBase43.call(this));

    _this49.element = element;
    return _this49;
  }

  return ejProgressBar;
}(WidgetBase)) || _class66) || _class66) || _class66);
var Item = exports.Item = (_dec183 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec184 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'item'), _dec185 = generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'badge', 'badge', 'type', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'items']), _dec186 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec183(_class67 = _dec184(_class67 = _dec185(_class67 = (_class68 = function () {
  function Item() {
    _classCallCheck(this, Item);

    _initDefineProp(this, 'template', _descriptor8, this);
  }

  Item.prototype.setTemplates = function setTemplates() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  return Item;
}(), (_descriptor8 = _applyDecoratedDescriptor(_class68.prototype, 'template', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class68)) || _class67) || _class67) || _class67);
var ejRadialMenu = exports.ejRadialMenu = (_dec187 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-menu'), _dec188 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec189 = generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position']), _dec190 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec191 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'item'), _dec187(_class70 = _dec188(_class70 = _dec189(_class70 = _dec190(_class70 = (_class71 = function (_WidgetBase44) {
  _inherits(ejRadialMenu, _WidgetBase44);

  function ejRadialMenu(element, templateEngine) {
    _classCallCheck(this, ejRadialMenu);

    var _this50 = _possibleConstructorReturn(this, _WidgetBase44.call(this));

    _initDefineProp(_this50, 'items', _descriptor9, _this50);

    _this50.element = element;
    _this50.hasChildProperty = true;
    _this50.childPropertyName = 'items';
    _this50.templateProcessor = new TemplateProcessor(_this50, templateEngine);
    _this50.templateProcessor.initTemplate();
    return _this50;
  }

  return ejRadialMenu;
}(WidgetBase), (_descriptor9 = _applyDecoratedDescriptor(_class71.prototype, 'items', [_dec191], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class71)) || _class70) || _class70) || _class70) || _class70);
var ejRadialSlider = exports.ejRadialSlider = (_dec192 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-slider'), _dec193 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec194 = generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'locale', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks', 'value'], ['value', 'ticks']), _dec195 = (0, _aureliaDependencyInjection.inject)(Element), _dec192(_class73 = _dec193(_class73 = _dec194(_class73 = _dec195(_class73 = function (_WidgetBase45) {
  _inherits(ejRadialSlider, _WidgetBase45);

  function ejRadialSlider(element) {
    _classCallCheck(this, ejRadialSlider);

    var _this51 = _possibleConstructorReturn(this, _WidgetBase45.call(this));

    _this51.element = element;
    return _this51;
  }

  return ejRadialSlider;
}(WidgetBase)) || _class73) || _class73) || _class73) || _class73);
var ejRangeNavigator = exports.ejRangeNavigator = (_dec196 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-navigator'), _dec197 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec198 = generateBindables('ejRangeNavigator', ['allowSnapping', 'allowNextValue', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': ['enableRtl'] }), _dec199 = (0, _aureliaDependencyInjection.inject)(Element), _dec200 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'range-series'), _dec196(_class74 = _dec197(_class74 = _dec198(_class74 = _dec199(_class74 = (_class75 = function (_WidgetBase46) {
  _inherits(ejRangeNavigator, _WidgetBase46);

  function ejRangeNavigator(element) {
    _classCallCheck(this, ejRangeNavigator);

    var _this52 = _possibleConstructorReturn(this, _WidgetBase46.call(this));

    _initDefineProp(_this52, 'series', _descriptor10, _this52);

    _this52.element = element;
    _this52.hasChildProperty = true;
    _this52.childPropertyName = 'series';
    return _this52;
  }

  return ejRangeNavigator;
}(WidgetBase), (_descriptor10 = _applyDecoratedDescriptor(_class75.prototype, 'series', [_dec200], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class75)) || _class74) || _class74) || _class74) || _class74);
var RangeSeries = exports.RangeSeries = (_dec201 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec202 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-series'), _dec203 = generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill']), _dec201(_class77 = _dec202(_class77 = _dec203(_class77 = function RangeSeries() {
  _classCallCheck(this, RangeSeries);
}) || _class77) || _class77) || _class77);
var ejRating = exports.ejRating = (_dec204 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rating'), _dec205 = generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value']), _dec206 = (0, _aureliaDependencyInjection.inject)(Element), _dec204(_class78 = _dec205(_class78 = _dec206(_class78 = function (_WidgetBase47) {
  _inherits(ejRating, _WidgetBase47);

  function ejRating(element) {
    _classCallCheck(this, ejRating);

    var _this53 = _possibleConstructorReturn(this, _WidgetBase47.call(this));

    _this53.element = element;
    return _this53;
  }

  return ejRating;
}(WidgetBase)) || _class78) || _class78) || _class78);
var ejReportViewer = exports.ejReportViewer = (_dec207 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'report-viewer'), _dec208 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec209 = generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'serviceAuthorizationToken']), _dec210 = (0, _aureliaDependencyInjection.inject)(Element), _dec207(_class79 = _dec208(_class79 = _dec209(_class79 = _dec210(_class79 = function (_WidgetBase48) {
  _inherits(ejReportViewer, _WidgetBase48);

  function ejReportViewer(element) {
    _classCallCheck(this, ejReportViewer);

    var _this54 = _possibleConstructorReturn(this, _WidgetBase48.call(this));

    _this54.element = element;
    return _this54;
  }

  return ejReportViewer;
}(WidgetBase)) || _class79) || _class79) || _class79) || _class79);
var ejRibbon = exports.ejRibbon = (_dec211 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'ribbon'), _dec212 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec213 = generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'cssClass', 'collapsePinSettings', 'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec214 = (0, _aureliaDependencyInjection.inject)(Element), _dec211(_class80 = _dec212(_class80 = _dec213(_class80 = _dec214(_class80 = function (_WidgetBase49) {
  _inherits(ejRibbon, _WidgetBase49);

  function ejRibbon(element) {
    _classCallCheck(this, ejRibbon);

    var _this55 = _possibleConstructorReturn(this, _WidgetBase49.call(this));

    _this55.element = element;
    return _this55;
  }

  return ejRibbon;
}(WidgetBase)) || _class80) || _class80) || _class80) || _class80);
var ejRte = exports.ejRte = (_dec215 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rte'), _dec216 = generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'pasteCleanupSettings', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'exportToPdfSettings', 'exportToWordSettings', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'importSettings', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'toolbarOverflowMode', 'tooltipSettings', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec217 = (0, _aureliaDependencyInjection.inject)(Element), _dec215(_class81 = _dec216(_class81 = _dec217(_class81 = function (_WidgetBase50) {
  _inherits(ejRte, _WidgetBase50);

  function ejRte(element) {
    _classCallCheck(this, ejRte);

    var _this56 = _possibleConstructorReturn(this, _WidgetBase50.call(this));

    _this56.element = element;
    return _this56;
  }

  return ejRte;
}(WidgetBase)) || _class81) || _class81) || _class81);
var ejRadioButton = exports.ejRadioButton = (_dec218 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'radio-button'), _dec219 = generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': ['enableRtl'] }), _dec220 = (0, _aureliaDependencyInjection.inject)(Element), _dec218(_class82 = _dec219(_class82 = _dec220(_class82 = function (_WidgetBase51) {
  _inherits(ejRadioButton, _WidgetBase51);

  function ejRadioButton(element) {
    _classCallCheck(this, ejRadioButton);

    var _this57 = _possibleConstructorReturn(this, _WidgetBase51.call(this));

    _this57.element = element;
    return _this57;
  }

  return ejRadioButton;
}(WidgetBase)) || _class82) || _class82) || _class82);
var ejRotator = exports.ejRotator = (_dec221 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rotator'), _dec222 = generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID'], [], { 'enableRTL': ['enableRtl'], 'thumbnailSourceID': ['thumbnailSourceId'] }), _dec223 = (0, _aureliaDependencyInjection.inject)(Element), _dec221(_class83 = _dec222(_class83 = _dec223(_class83 = function (_WidgetBase52) {
  _inherits(ejRotator, _WidgetBase52);

  function ejRotator(element) {
    _classCallCheck(this, ejRotator);

    var _this58 = _possibleConstructorReturn(this, _WidgetBase52.call(this));

    _this58.element = element;
    return _this58;
  }

  return ejRotator;
}(WidgetBase)) || _class83) || _class83) || _class83);
var ejSchedule = exports.ejSchedule = (_dec224 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule'), _dec225 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec226 = generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowDelete', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], { 'enableRTL': ['enableRtl'] }), _dec227 = (0, _aureliaDependencyInjection.inject)(Element), _dec228 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'schedule-resource'), _dec224(_class84 = _dec225(_class84 = _dec226(_class84 = _dec227(_class84 = (_class85 = function (_WidgetBase53) {
  _inherits(ejSchedule, _WidgetBase53);

  function ejSchedule(element) {
    _classCallCheck(this, ejSchedule);

    var _this59 = _possibleConstructorReturn(this, _WidgetBase53.call(this));

    _initDefineProp(_this59, 'resources', _descriptor11, _this59);

    _this59.element = element;
    _this59.hasChildProperty = true;
    _this59.childPropertyName = 'resources';
    return _this59;
  }

  return ejSchedule;
}(WidgetBase), (_descriptor11 = _applyDecoratedDescriptor(_class85.prototype, 'resources', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class85)) || _class84) || _class84) || _class84) || _class84);
var ScheduleResource = exports.ScheduleResource = (_dec229 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec230 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule-resource'), _dec231 = generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings']), _dec229(_class87 = _dec230(_class87 = _dec231(_class87 = function ScheduleResource() {
  _classCallCheck(this, ScheduleResource);
}) || _class87) || _class87) || _class87);
var ejScroller = exports.ejScroller = (_dec232 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'scroller'), _dec233 = generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': ['enableRtl'] }), _dec234 = (0, _aureliaDependencyInjection.inject)(Element), _dec232(_class88 = _dec233(_class88 = _dec234(_class88 = function (_WidgetBase54) {
  _inherits(ejScroller, _WidgetBase54);

  function ejScroller(element) {
    _classCallCheck(this, ejScroller);

    var _this60 = _possibleConstructorReturn(this, _WidgetBase54.call(this));

    _this60.element = element;
    return _this60;
  }

  return ejScroller;
}(WidgetBase)) || _class88) || _class88) || _class88);
var ejSlider = exports.ejSlider = (_dec235 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'slider'), _dec236 = generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showButtons', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec237 = (0, _aureliaDependencyInjection.inject)(Element), _dec235(_class89 = _dec236(_class89 = _dec237(_class89 = function (_WidgetBase55) {
  _inherits(ejSlider, _WidgetBase55);

  function ejSlider(element) {
    _classCallCheck(this, ejSlider);

    var _this61 = _possibleConstructorReturn(this, _WidgetBase55.call(this));

    _this61.element = element;
    return _this61;
  }

  return ejSlider;
}(WidgetBase)) || _class89) || _class89) || _class89);
var ejSparkline = exports.ejSparkline = (_dec238 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sparkline'), _dec239 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec240 = generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']), _dec241 = (0, _aureliaDependencyInjection.inject)(Element), _dec238(_class90 = _dec239(_class90 = _dec240(_class90 = _dec241(_class90 = function (_WidgetBase56) {
  _inherits(ejSparkline, _WidgetBase56);

  function ejSparkline(element) {
    _classCallCheck(this, ejSparkline);

    var _this62 = _possibleConstructorReturn(this, _WidgetBase56.call(this));

    _this62.element = element;
    return _this62;
  }

  return ejSparkline;
}(WidgetBase)) || _class90) || _class90) || _class90) || _class90);
var ejSignature = exports.ejSignature = (_dec242 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'signature'), _dec243 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec244 = generateBindables('ejSignature', ['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive', 'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth', 'width']), _dec245 = (0, _aureliaDependencyInjection.inject)(Element), _dec242(_class91 = _dec243(_class91 = _dec244(_class91 = _dec245(_class91 = function (_WidgetBase57) {
  _inherits(ejSignature, _WidgetBase57);

  function ejSignature(element) {
    _classCallCheck(this, ejSignature);

    var _this63 = _possibleConstructorReturn(this, _WidgetBase57.call(this));

    _this63.element = element;
    return _this63;
  }

  return ejSignature;
}(WidgetBase)) || _class91) || _class91) || _class91) || _class91);
var ejSpellCheck = exports.ejSpellCheck = (_dec246 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'spell-check'), _dec247 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec248 = generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync', 'ajaxRequestType', 'ajaxDataType']), _dec249 = (0, _aureliaDependencyInjection.inject)(Element), _dec246(_class92 = _dec247(_class92 = _dec248(_class92 = _dec249(_class92 = function (_WidgetBase58) {
  _inherits(ejSpellCheck, _WidgetBase58);

  function ejSpellCheck(element) {
    _classCallCheck(this, ejSpellCheck);

    var _this64 = _possibleConstructorReturn(this, _WidgetBase58.call(this));

    _this64.element = element;
    return _this64;
  }

  return ejSpellCheck;
}(WidgetBase)) || _class92) || _class92) || _class92) || _class92);
var ejSplitButton = exports.ejSplitButton = (_dec250 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'split-button'), _dec251 = generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], { 'enableRTL': ['enableRtl'], 'targetID': ['targetId'] }), _dec252 = (0, _aureliaDependencyInjection.inject)(Element), _dec250(_class93 = _dec251(_class93 = _dec252(_class93 = function (_WidgetBase59) {
  _inherits(ejSplitButton, _WidgetBase59);

  function ejSplitButton(element) {
    _classCallCheck(this, ejSplitButton);

    var _this65 = _possibleConstructorReturn(this, _WidgetBase59.call(this));

    _this65.element = element;
    return _this65;
  }

  return ejSplitButton;
}(WidgetBase)) || _class93) || _class93) || _class93);
var ejSplitter = exports.ejSplitter = (_dec253 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'splitter'), _dec254 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec255 = generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'expanderTemplate', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec256 = (0, _aureliaDependencyInjection.inject)(Element), _dec253(_class94 = _dec254(_class94 = _dec255(_class94 = _dec256(_class94 = function (_WidgetBase60) {
  _inherits(ejSplitter, _WidgetBase60);

  function ejSplitter(element) {
    _classCallCheck(this, ejSplitter);

    var _this66 = _possibleConstructorReturn(this, _WidgetBase60.call(this));

    _this66.element = element;
    return _this66;
  }

  return ejSplitter;
}(WidgetBase)) || _class94) || _class94) || _class94) || _class94);
var Sheet = exports.Sheet = (_dec257 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec258 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sheet'), _dec259 = generateBindables('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell']), _dec257(_class95 = _dec258(_class95 = _dec259(_class95 = function Sheet() {
  _classCallCheck(this, Sheet);
}) || _class95) || _class95) || _class95);
var ejSpreadsheet = exports.ejSpreadsheet = (_dec260 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'spreadsheet'), _dec261 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec262 = generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowSparkline', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings', 'importSettings', 'isImport', 'isReadOnly', 'locale', 'nameManager', 'pictureSettings', 'printSettings', 'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showPager', 'showRibbon', 'undoRedoStep', 'userName']), _dec263 = (0, _aureliaDependencyInjection.inject)(Element), _dec264 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'sheet'), _dec260(_class96 = _dec261(_class96 = _dec262(_class96 = _dec263(_class96 = (_class97 = function (_WidgetBase61) {
  _inherits(ejSpreadsheet, _WidgetBase61);

  function ejSpreadsheet(element) {
    _classCallCheck(this, ejSpreadsheet);

    var _this67 = _possibleConstructorReturn(this, _WidgetBase61.call(this));

    _initDefineProp(_this67, 'sheets', _descriptor12, _this67);

    _this67.element = element;
    _this67.hasChildProperty = true;
    _this67.childPropertyName = 'sheets';
    return _this67;
  }

  return ejSpreadsheet;
}(WidgetBase), (_descriptor12 = _applyDecoratedDescriptor(_class97.prototype, 'sheets', [_dec264], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class97)) || _class96) || _class96) || _class96) || _class96);
var ejSymbolPalette = exports.ejSymbolPalette = (_dec265 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'symbol-palette'), _dec266 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec267 = generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width']), _dec268 = (0, _aureliaDependencyInjection.inject)(Element), _dec265(_class99 = _dec266(_class99 = _dec267(_class99 = _dec268(_class99 = function (_WidgetBase62) {
  _inherits(ejSymbolPalette, _WidgetBase62);

  function ejSymbolPalette(element) {
    _classCallCheck(this, ejSymbolPalette);

    var _this68 = _possibleConstructorReturn(this, _WidgetBase62.call(this));

    _this68.element = element;
    return _this68;
  }

  return ejSymbolPalette;
}(WidgetBase)) || _class99) || _class99) || _class99) || _class99);
var ejSunburstChart = exports.ejSunburstChart = (_dec269 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sunburst-chart'), _dec270 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec271 = generateBindables('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType']), _dec272 = (0, _aureliaDependencyInjection.inject)(Element), _dec273 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'sunburst-levels'), _dec269(_class100 = _dec270(_class100 = _dec271(_class100 = _dec272(_class100 = (_class101 = function (_WidgetBase63) {
  _inherits(ejSunburstChart, _WidgetBase63);

  function ejSunburstChart(element) {
    _classCallCheck(this, ejSunburstChart);

    var _this69 = _possibleConstructorReturn(this, _WidgetBase63.call(this));

    _initDefineProp(_this69, 'levels', _descriptor13, _this69);

    _this69.element = element;
    _this69.hasChildProperty = true;
    _this69.childPropertyName = 'levels';
    return _this69;
  }

  return ejSunburstChart;
}(WidgetBase), (_descriptor13 = _applyDecoratedDescriptor(_class101.prototype, 'levels', [_dec273], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class101)) || _class100) || _class100) || _class100) || _class100);
var SunburstLevels = exports.SunburstLevels = (_dec274 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec275 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sunburst-levels'), _dec276 = generateBindables('levels', ['groupMemberPath']), _dec274(_class103 = _dec275(_class103 = _dec276(_class103 = function SunburstLevels() {
  _classCallCheck(this, SunburstLevels);
}) || _class103) || _class103) || _class103);
var ejTab = exports.ejTab = (_dec277 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tab'), _dec278 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec279 = generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': ['enableRtl'] }), _dec280 = (0, _aureliaDependencyInjection.inject)(Element), _dec277(_class104 = _dec278(_class104 = _dec279(_class104 = _dec280(_class104 = function (_WidgetBase64) {
  _inherits(ejTab, _WidgetBase64);

  function ejTab(element) {
    _classCallCheck(this, ejTab);

    var _this70 = _possibleConstructorReturn(this, _WidgetBase64.call(this));

    _this70.element = element;
    return _this70;
  }

  return ejTab;
}(WidgetBase)) || _class104) || _class104) || _class104) || _class104);
var ejTile = exports.ejTile = (_dec281 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tile'), _dec282 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec283 = generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'locale', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor']), _dec284 = (0, _aureliaDependencyInjection.inject)(Element), _dec281(_class105 = _dec282(_class105 = _dec283(_class105 = _dec284(_class105 = function (_WidgetBase65) {
  _inherits(ejTile, _WidgetBase65);

  function ejTile(element) {
    _classCallCheck(this, ejTile);

    var _this71 = _possibleConstructorReturn(this, _WidgetBase65.call(this));

    _this71.element = element;
    return _this71;
  }

  return ejTile;
}(WidgetBase)) || _class105) || _class105) || _class105) || _class105);
var ejTagCloud = exports.ejTagCloud = (_dec285 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tag-cloud'), _dec286 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec287 = generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': ['enableRtl'] }), _dec288 = (0, _aureliaDependencyInjection.inject)(Element), _dec285(_class106 = _dec286(_class106 = _dec287(_class106 = _dec288(_class106 = function (_WidgetBase66) {
  _inherits(ejTagCloud, _WidgetBase66);

  function ejTagCloud(element) {
    _classCallCheck(this, ejTagCloud);

    var _this72 = _possibleConstructorReturn(this, _WidgetBase66.call(this));

    _this72.element = element;
    return _this72;
  }

  return ejTagCloud;
}(WidgetBase)) || _class106) || _class106) || _class106) || _class106);
var ejTimePicker = exports.ejTimePicker = (_dec289 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'time-picker'), _dec290 = generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'validationMessages', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec291 = (0, _aureliaDependencyInjection.inject)(Element), _dec289(_class107 = _dec290(_class107 = _dec291(_class107 = function (_WidgetBase67) {
  _inherits(ejTimePicker, _WidgetBase67);

  function ejTimePicker(element) {
    _classCallCheck(this, ejTimePicker);

    var _this73 = _possibleConstructorReturn(this, _WidgetBase67.call(this));

    _this73.isEditor = true;
    _this73.element = element;
    return _this73;
  }

  return ejTimePicker;
}(WidgetBase)) || _class107) || _class107) || _class107);
var ejToggleButton = exports.ejToggleButton = (_dec292 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toggle-button'), _dec293 = generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec294 = (0, _aureliaDependencyInjection.inject)(Element), _dec292(_class108 = _dec293(_class108 = _dec294(_class108 = function (_WidgetBase68) {
  _inherits(ejToggleButton, _WidgetBase68);

  function ejToggleButton(element) {
    _classCallCheck(this, ejToggleButton);

    var _this74 = _possibleConstructorReturn(this, _WidgetBase68.call(this));

    _this74.element = element;
    return _this74;
  }

  return ejToggleButton;
}(WidgetBase)) || _class108) || _class108) || _class108);
var ejToolbar = exports.ejToolbar = (_dec295 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toolbar'), _dec296 = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec297 = (0, _aureliaDependencyInjection.inject)(Element), _dec295(_class109 = _dec296(_class109 = _dec297(_class109 = function (_WidgetBase69) {
  _inherits(ejToolbar, _WidgetBase69);

  function ejToolbar(element) {
    _classCallCheck(this, ejToolbar);

    var _this75 = _possibleConstructorReturn(this, _WidgetBase69.call(this));

    _this75.element = element;
    return _this75;
  }

  return ejToolbar;
}(WidgetBase)) || _class109) || _class109) || _class109);
var ejTooltip = exports.ejTooltip = (_dec298 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tooltip'), _dec299 = generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec300 = (0, _aureliaDependencyInjection.inject)(Element), _dec298(_class110 = _dec299(_class110 = _dec300(_class110 = function (_WidgetBase70) {
  _inherits(ejTooltip, _WidgetBase70);

  function ejTooltip(element) {
    _classCallCheck(this, ejTooltip);

    var _this76 = _possibleConstructorReturn(this, _WidgetBase70.call(this));

    _this76.element = element;
    return _this76;
  }

  return ejTooltip;
}(WidgetBase)) || _class110) || _class110) || _class110);
var ejTreeGrid = exports.ejTreeGrid = (_dec301 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid'), _dec302 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec303 = generateBindables('ejTreeGrid', ['allowColumnReordering', 'allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowPaging', 'allowSearching', 'allowSelection', 'allowSorting', 'allowTextWrap', 'altRowTemplateID', 'cellTooltipTemplate', 'childMapping', 'collapsibleTotalSummary', 'columnDialogFields', 'columnResizeSettings', 'columns', 'commonWidth', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'detailsRowHeight', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableLoadOnDemand', 'enableResize', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'headerTextOverflow', 'idMapping', 'isResponsive', 'locale', 'pageSettings', 'parentIdMapping', 'parseRowTemplate', 'query', 'rowHeight', 'rowTemplateID', 'searchSettings', 'selectedCellIndexes', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnOptions', 'showDetailsRow', 'showDetailsRowInfoColumn', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showStackedHeader', 'showSummaryRow', 'showTotalSummary', 'sizeSettings', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings', 'totalSummaryHeight', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], { 'altRowTemplateID': ['altRowTemplateId'], 'rowTemplateID': ['rowTemplateId'] }, ['dataSource']), _dec304 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec305 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'tree-grid-column'), _dec301(_class111 = _dec302(_class111 = _dec303(_class111 = _dec304(_class111 = (_class112 = function (_WidgetBase71) {
  _inherits(ejTreeGrid, _WidgetBase71);

  function ejTreeGrid(element, templateEngine) {
    _classCallCheck(this, ejTreeGrid);

    var _this77 = _possibleConstructorReturn(this, _WidgetBase71.call(this));

    _initDefineProp(_this77, 'columns', _descriptor14, _this77);

    _this77.element = element;
    _this77.hasChildProperty = true;
    _this77.childPropertyName = 'columns';
    _this77.templateProcessor = new TemplateProcessor(_this77, templateEngine);
    _this77.templateProcessor.initTemplate();
    return _this77;
  }

  return ejTreeGrid;
}(WidgetBase), (_descriptor14 = _applyDecoratedDescriptor(_class112.prototype, 'columns', [_dec305], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class112)) || _class111) || _class111) || _class111) || _class111);
var TreeGridColumn = exports.TreeGridColumn = (_dec306 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec307 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid-column'), _dec308 = generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] }), _dec309 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec306(_class114 = _dec307(_class114 = _dec308(_class114 = (_class115 = function () {
  function TreeGridColumn() {
    _classCallCheck(this, TreeGridColumn);

    _initDefineProp(this, 'angularTemplate', _descriptor15, this);
  }

  TreeGridColumn.prototype.setTemplates = function setTemplates() {
    if (this.angularTemplate[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
    }
  };

  return TreeGridColumn;
}(), (_descriptor15 = _applyDecoratedDescriptor(_class115.prototype, 'angularTemplate', [_dec309], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class115)) || _class114) || _class114) || _class114);
var Level = exports.Level = (_dec310 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec311 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'level'), _dec312 = generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'textOverflow', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels']), _dec310(_class117 = _dec311(_class117 = _dec312(_class117 = function Level() {
  _classCallCheck(this, Level);
}) || _class117) || _class117) || _class117);
var ejTreeMap = exports.ejTreeMap = (_dec313 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-map'), _dec314 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec315 = generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'colorPath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource', 'header', 'enableDrillDown', 'drillDownValue', 'drillDownLevel', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'enableGroupSeparator', 'locale', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'], {}, ['dataSource']), _dec316 = (0, _aureliaDependencyInjection.inject)(Element), _dec317 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'level'), _dec313(_class118 = _dec314(_class118 = _dec315(_class118 = _dec316(_class118 = (_class119 = function (_WidgetBase72) {
  _inherits(ejTreeMap, _WidgetBase72);

  function ejTreeMap(element) {
    _classCallCheck(this, ejTreeMap);

    var _this78 = _possibleConstructorReturn(this, _WidgetBase72.call(this));

    _initDefineProp(_this78, 'levels', _descriptor16, _this78);

    _this78.element = element;
    _this78.hasChildProperty = true;
    _this78.childPropertyName = 'levels';
    return _this78;
  }

  return ejTreeMap;
}(WidgetBase), (_descriptor16 = _applyDecoratedDescriptor(_class119.prototype, 'levels', [_dec317], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class119)) || _class118) || _class118) || _class118) || _class118);
var ejUploadbox = exports.ejUploadbox = (_dec318 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'uploadbox'), _dec319 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec320 = generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec321 = (0, _aureliaDependencyInjection.inject)(Element), _dec318(_class121 = _dec319(_class121 = _dec320(_class121 = _dec321(_class121 = function (_WidgetBase73) {
  _inherits(ejUploadbox, _WidgetBase73);

  function ejUploadbox(element) {
    _classCallCheck(this, ejUploadbox);

    var _this79 = _possibleConstructorReturn(this, _WidgetBase73.call(this));

    _this79.element = element;
    return _this79;
  }

  return ejUploadbox;
}(WidgetBase)) || _class121) || _class121) || _class121) || _class121);
var ejTreeView = exports.ejTreeView = (_dec322 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tree-view'), _dec323 = generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec324 = (0, _aureliaDependencyInjection.inject)(Element), _dec322(_class122 = _dec323(_class122 = _dec324(_class122 = function (_WidgetBase74) {
  _inherits(ejTreeView, _WidgetBase74);

  function ejTreeView(element) {
    _classCallCheck(this, ejTreeView);

    var _this80 = _possibleConstructorReturn(this, _WidgetBase74.call(this));

    _this80.element = element;
    return _this80;
  }

  return ejTreeView;
}(WidgetBase)) || _class122) || _class122) || _class122);
var ejWaitingPopup = exports.ejWaitingPopup = (_dec325 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'waiting-popup'), _dec326 = generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text']), _dec327 = (0, _aureliaDependencyInjection.inject)(Element), _dec325(_class123 = _dec326(_class123 = _dec327(_class123 = function (_WidgetBase75) {
  _inherits(ejWaitingPopup, _WidgetBase75);

  function ejWaitingPopup(element) {
    _classCallCheck(this, ejWaitingPopup);

    var _this81 = _possibleConstructorReturn(this, _WidgetBase75.call(this));

    _this81.element = element;
    return _this81;
  }

  return ejWaitingPopup;
}(WidgetBase)) || _class123) || _class123) || _class123);