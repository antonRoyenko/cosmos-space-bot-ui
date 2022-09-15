import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { connectWallet } from './connectWallet'
import { makePostRequest } from './postRequest'

export function useConnect() {
  const [error, setError] = useState<Error>()

  const connect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const wallet = await connectWallet({
        chainId: (e.target as HTMLInputElement).id,
      })
      const searchParams = new URLSearchParams(window.location.search)
      const telegramId = searchParams.get('telegram-id')

      if (!wallet) return
      const response = await makePostRequest(`http://localhost:3000/update_wallet/${telegramId}`, {
        wallet: wallet.address,
        name: wallet.address,
      })

      if (response.error) {
        toast(response.error)
        return
      }
      toast('Wallet was added!')
    } catch (e: any) {
      setError(e)
    }
  }

  return {
    error,
    connect,
  }
}
