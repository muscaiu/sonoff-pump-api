import axios from 'axios';

async function pompaSonoff() {
  try {
    // let res = await axios({
    //   url: 'http://192.168.1.11/ay',
    //   method: 'get',
    //   timeout: 10000,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    // const parseStatus = res.data.split('px\'>')
    // const status = parseStatus[1].split('</div')[0]
    // const parseTemperatureHumidity = res.data.split('{m}')
    // const temperature = parseInt(parseTemperatureHumidity[1].split('&')[0])
    return ({
      // status,
      // temperature,
      status: true,
      temperature: 25,
    })
  }
  catch (err) {
    console.log(err);
  }
}

function turnOn() {
  axios.get('http://192.168.1.11/cm?cmnd=Power%20On')
}
function turnOff() {
  axios.get('http://192.168.1.11/cm?cmnd=Power%20off')
}

export default pompaSonoff;
export { turnOn, turnOff };
