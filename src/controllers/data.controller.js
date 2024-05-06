const { ResponseTemplate } = require('../helpers/resp.helper')
const { InternalServerError } = require('../server/server.error')

async function getAuthToken() {
  try {
    const response = await fetch(process.env.AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'testingpanicbutton',
        password: '123qwe',
      }),
    })
    const data = await response.json()
    return data.message.data.token
  } catch (error) {
    console.error('Error fetching auth token:', error)
    return null
  }
}

async function getVehicleData(token) {
  try {
    const response = await fetch(process.env.VEHICLE_DATA_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    return data.message.data
  } catch (error) {
    console.error('Error fetching vehicle data:', error)
    return null
  }
}

function determineStatus(vehicle) {
  if (vehicle.acc === 'ON' && vehicle.speed > 0) {
    return 'Running'
  } else if (vehicle.acc === 'OFF' && vehicle.speed === 0) {
    return 'Parking'
  } else if (vehicle.acc === 'ON' && vehicle.speed === 0) {
    return 'Stop'
  } else {
    return 'Unknown'
  }
}

async function FetchData(req, res) {
  try {
    const token = await getAuthToken()
    if (!token) {
      res.status(500).json({ error: 'Failed to fetch auth token' })
      return
    }

    const vehicleData = await getVehicleData(token)
    if (!vehicleData) {
      res.status(500).json({ error: 'Failed to fetch vehicle data' })
      return
    }

    const data = vehicleData.map((vehicle) => ({
      plate: vehicle.plate,
      gsm_no: vehicle.gsm_no,
      activation_time: vehicle.activation_time,
      expired_gsm: vehicle.expired_gsm,
      status: determineStatus(vehicle),
    }))

    let response = ResponseTemplate(data, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = { FetchData }
