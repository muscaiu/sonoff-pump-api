import axios from 'axios';
import { pompadb } from '../models';

var CronJob = require('cron').CronJob;

// seconds(0 - 59), minutes(0 - 59), hours(0 - 23), day of month(1 - 31), months0 - 11, day of week(0 - 6)
const customHour = '09';
const customMinute = '00';

const startTime = new CronJob(`00 ${customMinute} ${customHour} * * *`, async function () {
  const mode = await getMode();
  if (mode === 'auto') {
    await pompadb.insert({
      value: true,
      createdAt: new Date(),
      type: 'status',
      startedBy: 'cron'
    })
    axios.get('http://192.168.1.11/cm?cmnd=Power%20On')
    console.log('pompa started by cron');
  } else {
    console.log('cant start auto because is currently in manual mode');
  }
});

const stopTime = new CronJob(`00 ${customMinute} ${customHour + 1} * * *`, async function () {
  const mode = await getMode();
  if (mode === 'auto') {
    await pompadb.insert({
      value: false,
      createdAt: new Date(),
      type: 'status',
      startedBy: 'cron'
    })
    axios.get('http://192.168.1.11/cm?cmnd=Power%20off')
    console.log('pompa stopped by cron');
  } else {
    console.log('cant stop auto because is currently in manual mode');
  }
});

function getMode() {
  return new Promise(resolve => {
    pompadb.find({
      selector: {
        type: { "$eq": "mode" }
      },
      fields: ["value", "createdAt"],
    }).then((modes) => {
      resolve(modes.docs[modes.docs.length - 1].value);
    });
  })
}

export { startTime, stopTime };
