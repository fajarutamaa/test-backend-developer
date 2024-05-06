const { PrismaClient } = require('@prisma/client')
const { InternalServerError } = require('../server/server.error')
const { ResponseTemplate } = require('../helpers/resp.helper')

const prisma = new PrismaClient()

async function CreateCategory(req, res) {
  const { nama_kategori } = req.body

  const payload = {
    nama_kategori,
  }

  try {
    async function checkExistence(field, value, message) {
      const category = await prisma.kategori.findFirst({
        where: { [field]: value },
      })

      if (category) {
        res.status(400).json({
          message: message,
          status: 400,
        })
      }
    }

    await checkExistence(
      'nama_kategori',
      nama_kategori,
      'category already exists',
    )

    const createCategory = await prisma.kategori.create({
      data: {
        ...payload,
      },
      select: {
        id: true,
        nama_kategori: true,
      },
    })

    let response = ResponseTemplate(createCategory, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function ListCategory(req, res) {
  const { nama_kategori } = req.query
  const payload = {}

  if (nama_kategori) {
    payload.nama_kategori = nama_kategori
  }

  try {
    const listCategories = await prisma.kategori.findMany({
      where: payload,
      select: {
        id: true,
        nama_kategori: true,
      },
    })

    if (listCategories.length === 0) {
      return res.status(404).json({
        message: 'data not found',
        status: 'error',
      })
    }

    let response = ResponseTemplate(listCategories, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function DeleteCategory(req, res) {
  const { id } = req.params

  try {
    const findCategory = await prisma.kategori.findUnique({
      where: { id: Number(id) },
    })

    if (!findCategory) {
      return res.status(404).json({
        message: `not found`,
        status: 404,
      })
    }

    await prisma.kategori.delete({
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

async function EditCategory(req, res) {
  const { nama_kategori } = req.body
  const { id } = req.params

  try {
    const kategori = await prisma.kategori.update({
      where: { id },
      data: { nama_kategori },
      select: {
        id: true,
        nama_kategori: true,
      },
    })

    let response = ResponseTemplate(kategori, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = {
  CreateCategory,
  ListCategory,
  DeleteCategory,
  EditCategory,
}
