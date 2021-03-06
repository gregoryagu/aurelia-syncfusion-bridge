import './setup';

import {getEventOption} from 'src/common/events';
import {constants} from 'src/common/constants';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
describe('Events', ()=>{
  beforeEach(() => {
    initialize();
  });

  it('getEventOption return the control events properly', ()=>{
    let element = DOM.createElement('div');
    element.setAttribute('custom-event', '');
    element.setAttribute(`${constants.eventPrefix}click.trigger`, '');
    let response = getEventOption(element);
    expect(Object.keys(response)[0]).toBe('click');
  });
});
