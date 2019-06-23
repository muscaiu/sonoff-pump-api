const CronJob = require('cron').CronJob;

import pompaSonoff from '../sonoffs/pompaSonoff';
import { pompadb } from '../models';

//Hourly Temp and Status
const tempCron = new CronJob(`0 0 * * * *`, function () {
  pompaSonoff()
    .then(data => {
      pompadb.insert({
        ...data,
        createdAt: new Date(),
        type: 'temperature'
      })
    })
});

module.exports = tempCron;
