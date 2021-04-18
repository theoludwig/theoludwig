import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import validator from 'validator'

const EMAIL_PORT = parseInt(process.env.EMAIL_PORT ?? '465', 10)

const emailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<any> => {
  if (request.method !== 'POST') {
    return response.redirect('/404')
  }

  let { name, email, subject, message } = request.body as {
    name: string
    email: string
    subject: string
    message: string
  }

  if (
    validator.isEmpty(name) ||
    validator.isEmpty(email) ||
    validator.isEmpty(subject) ||
    validator.isEmpty(message)
  ) {
    return response.status(400).json({ type: 'requiredFields' })
  }

  if (!validator.isEmail(email)) {
    return response.status(400).json({ type: 'invalidEmail' })
  }

  email = validator.normalizeEmail(email) as string
  message = validator.trim(message)
  message = validator.escape(message)
  subject = validator.trim(subject)
  subject = validator.escape(subject)

  try {
    await emailTransporter.sendMail({
      from: '"Divlo" <contact@divlo.fr>',
      to: email,
      subject: `Contact - ${subject}`,
      html: `
                <b>Name:</b> ${name} <br/>
                <b>Email:</b> ${email} <br/>
                <b>Message:</b> ${message}
            `
    })
    return response.status(201).json({ type: 'success' })
  } catch {
    return response.status(500).json({ type: 'serverError' })
  }
}
