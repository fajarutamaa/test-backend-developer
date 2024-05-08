const { PrismaClient } = require('@prisma/client')
const { InternalServerError } = require('../server/server.error')
const { ResponseTemplate } = require('../helpers/resp.helper')

const prisma = new PrismaClient()

async function CreateCity(req, res) {
  const { nama_kota } = req.body

  const payload = {
    nama_kota,
  }

  try {
    async function checkExistence(field, value, message) {
      const city = await prisma.kota.findUnique({
        where: { [field]: value },
      })

      if (city) {
        res.status(400).json({
          message: message,
          status: 400,
        })
      }
    }

    await checkExistence('nama_kota', nama_kota, 'nama kota already exists')

    const createCity = await prisma.kota.create({
      data: {
        ...payload,
      },
      select: {
        id: true,
        nama_kota: true,
      },
    })

    let response = ResponseTemplate(createCity, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function ListCity(req, res) {
  const { nama_kota } = req.query
  const payload = {}

  if (nama_kota) {
    payload.nama_kota = nama_kota
  }

  try {
    const listCity = await prisma.kota.findMany({
      where: payload,
      select: {
        id: true,
        nama_kota: true,
      },
    })

    if (listCity.length === 0) {
      return res.status(404).json({
        message: 'data not found',
        status: 'error',
      })
    }

    let response = ResponseTemplate(listCity, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function DeleteCity(req, res) {
  const { id } = req.params

  try {
    const findCity = await prisma.kota.findUnique({
      where: { id: Number(id) },
    })

    if (!findCity) {
      return res.status(404).json({
        message: `not found`,
        status: 404,
      })
    }

    await prisma.kota.delete({
      where: {
        id: Number(id),
      },
    })

    return res.status(200).json({
      message: 'success',
      status: 200,
    })
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function EditCity(req, res) {
  const { nama_kota } = req.body
  const { id } = req.params

  try {
    const kota = await prisma.kota.update({
      where: { id: Number(id) },
      data: { nama_kota },
      select: {
        id: true,
        nama_kota: true,
      },
    })

    let response = ResponseTemplate(kota, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = {
  CreateCity,
  ListCity,
  DeleteCity,
  EditCity,
}
