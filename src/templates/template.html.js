const templateWelcome = (activationLink) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 30px;
            text-align: center;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 10px;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <p>Hii👋, welcome to Super Spring!</p>
    <p>Congratulations on becoming a part of our community. To activate your account, please click the link below:</p>
    <a href="${activationLink}">Verify Account</a>
    <p>If you did not sign up for Super Spring, you can safely ignore this email.</p>
    <p>Thank you, and we hope you have a fantastic experience with Super Spring!</p>

</body>

</html>
`

const templateReset = (resetLink) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 30px;
            text-align: center;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 10px;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }

        /* Add more styles as needed */
    </style>
</head>

<body>
    <p>Hii👋, You are receiving this email because we received a password reset request for your account </p>
    <a href="${resetLink}">Reset Password</a>
    <p>If you did not request a password reset, no further action is required</p>
</body>

</html>
`

const templateNotif = () => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 30px;
            text-align: center;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 10px;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            color: #ffff;
            background-color: #3498db;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <p>Hii👋, Congratulations your account is verified! </p>
    <p>Thank you, and we hope you have a fantastic experience with Super Spring!</p>
</body>

</html>
`

module.exports = { templateWelcome, templateReset, templateNotif }
