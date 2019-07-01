import axios from 'axios';
import models from '../models';

var CronJob = require('cron').CronJob;

// seconds(0 - 59), minutes(0 - 59), hours(0 - 23), day of month(1 - 31), months0 - 11, day of week(0 - 6)
// DON'T USE STRINGS HERE
const customHour = 9;
const customMinute = 0;

const startTime = new CronJob(`00 ${customMinute} ${customHour} * * *`, async function () {
  const mode = await getMode();
  if (mode === 'auto') {
    await models.Status.create({
      value: true,
      startedBy: 'cron'
    });
    axios.get('http://192.168.1.11/cm?cmnd=Power%20On')
    console.log('pompa started by cron');
  } else {
    console.log('cant start auto because is currently in manual mode');
  }
});

const stopTime = new CronJob(`00 ${customMinute} ${customHour + 1} * * *`, async function () {
  const mode = await getMode();
  if (mode === 'auto') {
    await models.Status.create({
      value: false,
      startedBy: 'cron'
    });
    axios.get('http://192.168.1.11/cm?cmnd=Power%20off')
    console.log('pompa stopped by cron');
  } else {
    console.log('cant stop auto because is currently in manual mode');
  }
});

async function getMode() {
  const mode = await models.Mode.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  })
  return Promise.resolve(mode[0].value);
}

export { startTime, stopTime };
