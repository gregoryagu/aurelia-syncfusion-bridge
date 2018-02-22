import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

@customAttribute(`${constants.attributePrefix}slider`)
    @generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showButtons', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

