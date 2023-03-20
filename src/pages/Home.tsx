import React from 'react'
import logo from '../assets/logo.svg'
import arrowLeft from '../assets/arrowLeft.svg'
import { useConnect } from '../utils/useConnect'
import { splitArrayIntoChunks } from '../utils/splitArray'
import { chainInfo } from '../config'
import { sendNotification } from '../utils/telegram'

function Home() {
  // TODO add error handling
  const { connect } = useConnect()
  const chunks = splitArrayIntoChunks(chainInfo, 5)
  const back = async () => {
    try {
      await sendNotification()
    } catch (e) {
      console.error(e)
    }

    window.location.replace('https://t.me/cosmos_space_bot')
  }
  console.log('test')
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt='' />
        <button onClick={back} className='App-header__btn btn'>
          <img src={arrowLeft} alt='' />
          back to telegram
        </button>
      </header>
      <div className='App-body'>
        {chunks.map((item, key) => (
          <div key={key} className='grid-item'>
            {item.map(({ chainId, chainName }) => (
              <button key={chainId} id={chainId} className='btn' onClick={connect}>
                Connect {chainName}
              </button>
            ))}
          </div>
        ))}

        {/* {error && <div>{error.message}</div>}*/}
      </div>
    </>
  )
}

export default Home
