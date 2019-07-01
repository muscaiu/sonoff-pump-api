import pompaSonoff from '../sonoffs/pompaSonoff';
import models from '../models';

const CronJob = require('cron').CronJob;

//Hourly Temp and Status
const tempCron = new CronJob(`0 * * * * *`, async function () {
  pompaSonoff()
    .then(async data => {
      await models.Temperature.create({
        value: data.temperature,
      });
    })
});

module.exports = tempCron;
