import React, { useState } from 'react'
import { connectWallet } from './connectWallet'
import { makePostRequest } from './request'

export function useConnect() {
  const [error, setError] = useState<Error>();

  const connect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const wallet = await connectWallet({
        chainId: (e.target as HTMLInputElement).id,
      });
      const searchParams = new URLSearchParams(window.location.search);
      const telegramId = searchParams.get('telegram-id');

      await makePostRequest(
        `http://localhost:3000/update_wallet/${telegramId}`,
        {
          wallet,
        }
      );
    } catch (e: any) {
      setError(e);
    }
  }

  return {
    error,
    connect
  }
}
