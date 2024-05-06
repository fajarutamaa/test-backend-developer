const { ResponseTemplate } = require('../helpers/resp.helper')
const { InternalServerError } = require('../server/server.error')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function ListUsers(req, res) {
  const { username, email, password } = req.query
  const payload = {}

  if (username) {
    payload.username = username
  }

  if (email) {
    payload.email = email
  }

  if (password) {
    payload.password = password
  }

  try {
    const listUsers = await prisma.user.findMany({
      where: payload,
      select: {
        id: true,
        username: true,
        is_verified: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        username: 'asc',
      },
    })

    if (listUsers.length === 0) {
      return res.status(404).json({
        message: 'data not found',
        status: 'error',
      })
    }

    let response = ResponseTemplate(listUsers, 'success', null, 200)
    return res.status(200).json(response)
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

async function DeleteUser(req, res) {
  const { id } = req.params

  try {
    const findUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    })

    if (!findUser) {
      return res.status(404).json({
        message: `not found`,
        status: 404,
      })
    }

    await prisma.user.delete({
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
  ListUsers,
  DeleteUser,
}
