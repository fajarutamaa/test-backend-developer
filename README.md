<p align="center">
  <a href="https://github.com/fajarutamaa/test-backend-developer/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000" alt="License">
  </a>
</p>

<p align="center">
  <a href="#installation-guide"><strong>Installation Guide</strong></a> ·
  <a href="#environment-variables-setting"><strong>Environment Variable Setting</strong></a> ·
  <a href="#api-endpoints"><strong>API Endpoints</strong></a> ·
  <a href="#error-handling"><strong>Error Handling</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a> ·
  <a href="#reference"><strong>Reference</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Installation Guide

Clone the project from GitHub repository:

      git clone https://github.com/fajarutamaa/test-backend-developer.git

Change directory:

```bash
cd test-backend-developer
```

To install dependencies:

```bash
bun install
```

Prisma configuration and initializaze:

```bash
bun prisma generate
```

Compile and hot-reload for development:

```bash
bun dev
```

Compile and hot-reload for starting:

```bash
bun start
```

For check files use Prettier code style:

```bash
bun check
```

To format the files, use the Prettier code style by running:

```bash
bun format
```

## Environment Variables Setting

Create an `.env` file in your project root folder and add your variables. See [`.env.example`](https://github.com/fajarutamaa/test-backend-developer/blob/main/.env.example) file for assitance.

## Api Endpoints

this project running on Base URL : `http://localhost:3000/api/v1/`

| Methods | URLs                    | Actions                                       |
| ------- | ----------------------- | --------------------------------------------- |
| POST    | /register               | Register account                              |
| POST    | /login                  | Login account                                 |
| POST    | /auth/logout            | Login account                                 |
| POST    | /forgot-password        | Send password reset link                      |
| POST    | /reset-password/:token  | Reset user password                           |
| GET     | /admin/users            | List users                                    |
| PATCH   | /admin/users/edit/:id   | Change role user by admin                     |
| DELETE  | /admin/users/:id        | Delete user by admin                          |
| GET     | /admin/category         | List category                                 |
| POST    | /admin/create           | Add new category by admin                     |
| PATCH   | /admin/category/edit:id | Edit nama kategori by admin                   |
| GET     | /admin/city             | List city                                     |
| POST    | /admin/city/create      | Add new city by admin                         |
| POST    | /admin/city/edit/:id    | Edit nama kota by admin                       |
| GET     | /vehicles/data          | Fetch vehicle data using API public           |
| GET     | /product                | List product                                  |
| POST    | /product/create         | Add new produk                                |
| PATCH   | /product/edit/:id       | Edit nama produk, nama kategori,and nama kota |
| DELETE  | /product/:id            | Delete product                                |
| GET     | /activation/:id         | Activation account                            |

## Error Handling

This table outlines the status codes, their meanings, and corresponding error messages for the API:

| Status Code | Meaning               | Error Message         |
| ----------- | --------------------- | --------------------- |
| 200         | Success               | Request successful    |
| 400         | Bad Request           | Invalid request       |
| 401         | Unauthorized          | Authentication failed |
| 404         | Not Found             | Data not found        |
| 500         | Internal Server Error | Internal server error |

These status codes and messages are essential for understanding and troubleshooting API responses.

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/fajarutamaa/test-backend-developer/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/fajarutamaa/test-backend-developer/pulls) to add new features/make quality-of-life improvements/fix bugs.

## Reference

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## License

This project is available for use under the MIT License.
