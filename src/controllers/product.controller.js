const { PrismaClient } = require('@prisma/client')
const { InternalServerError } = require('../server/server.error')
const { ResponseTemplate } = require('../helpers/resp.helper')

const prisma = new PrismaClient()

async function CreateProduct(req, res) {
  const { nama_produk, kategoriid, kotaid } = req.body

  const payload = {
    nama_produk,
    kategoriid,
    kotaid,
  }

  try {
    const createProduct = await prisma.product.create({
      data: {
        ...payload,
      },
      select: {
        nama_produk: true,
        kategori: {
          select: {
            nama_kategori,
          },
        },
        kota: {
          select: {
            nama_kota,
          },
        },
      },
    })

    let response = ResponseTemplate(createProduct, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function ListProduct(req, res) {
  const { nama_produk, nama_kategori, nama_kota } = req.query
  const payload = {}

  if (nama_produk) {
    payload.nama_produk = nama_produk
  }

  if (nama_kategori) {
    payload.nama_kategori = nama_kategori
  }

  if (nama_kota) {
    payload.nama_kota = nama_kota
  }

  try {
    const listProducts = await prisma.product.findMany({
      where: payload,
      select: {
        id: true,
        nama_produk: true,
        nama_kategori: true,
        nama_kota: true,
      },
    })
    let response = ResponseTemplate(listProducts, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = {
  CreateProduct,
  ListProduct,
}
