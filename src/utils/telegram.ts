import { makeGetRequest } from './getRequest'

export const sendNotification = async () => {
  const searchParams = new URLSearchParams(window.location.search)
  const telegramId = searchParams.get('telegram-id')

  const endpoint = `http://localhost:3000/send_message/${telegramId}`
  await makeGetRequest(endpoint)
}
