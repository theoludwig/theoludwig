import { createMocks } from 'node-mocks-http'

import handleSendEmail from 'pages/api/send-email'

jest.mock('nodemailer', () => ({
  createTransport: () => {
    return {
      sendMail: jest.fn(async () => {})
    }
  }
}))

describe('POST /api/send-email', () => {
  it('succeeds and send the email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Divlo',
        email: 'contact@divlo.fr',
        subject: 'Subject',
        message: 'Hello world!'
      }
    })
    await handleSendEmail(req, res)
    expect(res._getStatusCode()).toBe(201)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        type: 'success'
      })
    )
  })

  it('fails with empty values', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    })
    await handleSendEmail(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        type: 'requiredFields'
      })
    )
  })

  it('fails with invalid email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Name',
        email: 'random wrong email',
        subject: 'Subject',
        message: 'Message'
      }
    })
    await handleSendEmail(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        type: 'invalidEmail'
      })
    )
  })
})
