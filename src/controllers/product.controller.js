const { PrismaClient } = require('@prisma/client')
const { InternalServerError } = require('../server/server.error')
const { ResponseTemplate } = require('../helpers/resp.helper')

const prisma = new PrismaClient()

async function CreateProduct(req, res) {
  const { nama_produk, kategoriid, kotaid } = req.body

  const payload = {
    nama_produk,
    kategoriId: Number(kategoriid),
    kotaId: Number(kotaid),
    user: req.user.username,
  }

  try {
    const createProduct = await prisma.product.create({
      data: {
        ...payload,
      },
      select: {
        id: true,
        nama_produk: true,
        kategori: {
          select: {
            nama_kategori: true,
          },
        },
        kota: {
          select: {
            nama_kota: true,
          },
        },
      },
    })

    let data = {
      id: createProduct.id,
      nama_produk: createProduct.nama_produk,
      nama_kategori: createProduct.kategori.nama_kategori,
      nama_kota: createProduct.kota.nama_kota,
    }

    let response = ResponseTemplate(data, 'success', null, 200)
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
        kategori: {
          select: { nama_kategori: true },
        },
        kota: {
          select: {
            nama_kota: true,
          },
        },
      },
    })

    let data = listProducts.map((product) => ({
      id: product.id,
      nama_produk: product.nama_produk,
      nama_kategori: product.kategori.nama_kategori,
      nama_kota: product.kota.nama_kota,
    }))

    let response = ResponseTemplate(data, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function EditProduct(req, res) {
  const { nama_produk, kategoriid, kotaid } = req.body
  const { id } = req.params

  const payload = {
    nama_produk,
    kategoriId: Number(kategoriid),
    kotaId: Number(kotaid),
    user: req.user.username,
  }

  try {
    const produk = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        ...payload,
      },
      select: {
        id: true,
        nama_produk: true,
        kategori: {
          select: {
            nama_kategori: true,
          },
        },
        kota: {
          select: {
            nama_kota: true,
          },
        },
      },
    })

    let data = {
      id: produk.id,
      nama_produk: produk.nama_produk,
      nama_kategori: produk.kategori.nama_kategori,
      nama_kota: produk.kota.nama_kota,
    }

    let response = ResponseTemplate(data, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function DeleteProduct(req, res) {
  const { id } = req.params

  try {
    const findProduct = await prisma.product.findUnique({
      where: { id: Number(id) },
    })

    if (!findProduct) {
      return res.status(404).json({
        message: `not found`,
        status: 404,
      })
    }

    await prisma.product.delete({
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

module.exports = {
  CreateProduct,
  ListProduct,
  EditProduct,
  DeleteProduct,
}
