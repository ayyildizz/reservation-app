import { render } from 'react-dom';
import * as React from 'react';

import { Day, ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
import axios from "axios";
import { DataManager, UrlAdaptor, RemoteSaveAdaptor, Query, ODataV4Adaptor, WebApiAdaptor } from '@syncfusion/ej2-data';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { L10n } from '@syncfusion/ej2-base';
import { Internationalization } from '@syncfusion/ej2-base';



L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Add',
      'cancelButton': 'Cancel',
      'deleteButton': 'Remove',
      'newEvent': 'Add Appointment',
    },
  }
});

export class CoiffeurTable extends React.Component {
  state = {
    tests: []
  }

  componentDidMount() {
    console.log("test içi tests", this.props.tests);
    this.setState({ tests: this.props.tests })
  }
  constructor(props) {
    super(props);

    this.instance = new Internationalization();


    this.resourceData = [

      { Text: 'Selin', Id: 7, Color: '#DEC8F4' },
      { Text: 'Naz', Id: 8, Color: '#81BED2' },
      { Text: 'Hayriye', Id: 9, Color: '#F0CC96' },
      { Text: 'Ayşe', Id: 10, Color: '#86BB9D' },
      { Text: 'Esin', Id: 11, Color: '#7fdf80' },
      { Text: 'Nil', Id: 12, Color: '#86BB9D' },
      { Text: 'Defne', Id: 13, Color: '#7fdf80' },

    ];
    this.fields = { text: 'Text', value: 'Id' };



  }
  getEmployeeName(value) {
    return ((value.resourceData) ?
      value.resourceData[value.resource.textField] :
      value.resourceName);
  }

  /*monthEventTemplate(props) {
    return (<div className="subject">{props.Subject}</div>);
  }*/



  resourceHeaderTemplate(props) {
    return (
      <div>
        <h5 className="resource-details text-center" ><div className="resource-name" style={{ background: '#E4BEBE' }}>{this.getEmployeeName(props)}</div> </h5>
      </div>);
  }

  editorTemplate(props) {
    return (props !== undefined && Object.keys(props).length > 0 ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
      <tr><td className="e-textlabel">Customer Name</td><td colSpan={40}>
        <input id="customerName" className="e-field e-input" type="text" name="customerName" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Customer Phone</td><td colSpan={4}>
        <input id="customerPhone" className="e-field e-input" type="text" name="customerPhone" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Artists</td><td colSpan={4}>
        <MultiSelectComponent id="artistsId" className="e-field" placeholder='Choose Artist' data-name="artistId" dataSource={this.resourceData} fields={this.fields} value={props.artistId} />
      </td></tr>
      <tr><td className="e-textlabel">Service Type</td><td colSpan={4}>
        <input id="serviceType" className="e-field e-input" type="text" name="serviceType" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">From</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">To</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>

      <tr><td className="e-textlabel">Notes</td><td colSpan={4}>
        <textarea id="notes" className="e-field e-input" name="notes" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr></tbody></table> : <div></div>);
  }



  getTimeString(value) {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  }

  onActionBegin(args) {
    if (args.requestType === 'eventCreate' && args.data.length > 0) {
      let eventData = args.data[0];
      let eventField = this.scheduleObj.eventFields;
      let startDate = eventData[eventField.startTime];
      let endDate = eventData[eventField.endTime];
     // args.cancel = this.scheduleObj.isSlotAvailable(startDate, endDate);
    }
  }
  onDragStart(args) {
    args.excludeSelectors = 'e-header-cells,e-header-day,e-header-date,e-all-day-cells';
  }


  

  eventTemplate(props) {
    return (

      <div className="template-wrap" class="container" style={{ color: '#000000' }}>
        <div className="serviceType" class="row" style={{ color: 'black' }}>{props.serviceType}</div>

        <div className="time" class="row" style={{ background: props.PrimaryColor }}>
          Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}</div>
      </div>

    )
  };
  render() {

    return (<div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent

            cssClass='group-editing' width='100%' height='100%' dragStart={(this.onDragStart.bind(this))} ref={schedule => this.scheduleObj = schedule} actionBegin={this.onActionBegin.bind(this)} selectedDate={this.date} currentView='WorkDay' editorTemplate={this.editorTemplate.bind(this)} resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)} eventSettings={{

              dataSource: this.props.dataMan,
              template: this.eventTemplate.bind(this),
              enableTooltip: true,

            }} group={{ allowGroupEdit: true, resources: ['Artists'] }}>
            <ResourcesDirective>
              <ResourceDirective field='artistId' title='Attendees' name='Artists' allowMultiple={true} dataSource={this.resourceData} textField='Text' idField='Id' colorField='Color'>
              </ResourceDirective>
            </ResourcesDirective>
            <ViewsDirective>
              <ViewDirective option='Day' startHour='08:00' endHour='20:00' timeScale={{ enable: true, slotCount: 4 }} />
            </ViewsDirective>
            <Inject services={[Day, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>);
  }
}
export default CoiffeurTable
