const bcrypt = require('bcrypt')

const HashPassword = (password) => {
  const saltRounds = 1
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const ComparePassword = (password, HashPassword) => {
  const compare = bcrypt.compareSync(password, HashPassword)
  return compare
}

module.exports = { HashPassword, ComparePassword }
