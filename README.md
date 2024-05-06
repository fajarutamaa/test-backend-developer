## Installation Guide

Change directory:

```bash
cd test-backend
```

To install dependencies:

```bash
bun install
```

Compile and hot-reload for development:

```bash
bun dev
```

## Environment Variables Setting

Create an `.env` file in your project root folder and add your variables. See `.env.example` for assitance.

## Api Endpoints

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

## Reference

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
