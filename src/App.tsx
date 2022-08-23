import React from 'react'
import './App.css'
import { sendNotification } from './utils/telegram'
import { chainInfo } from './config'
import { useConnect } from './utils/useConnect'
import { splitArrayIntoChunks } from './utils/splitArray'
import logo from './assets/logo.svg'
import arrowLeft from './assets/arrowLeft.svg'

function App() {
  const { connect } = useConnect()
  const chunks = splitArrayIntoChunks(chainInfo, 7)
  const back = async () => {
    await sendNotification('Perfect! Now you can use /assets command', 'HTML')
    window.location.replace('https://t.me/cosmos_space_bot')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='' />
        <button onClick={back} className='App-header__btn btn'>
          <img src={arrowLeft} alt='' />
          back to telegram
        </button>
      </header>
      <body className='App-body'>
        <div className='App-body__container'>
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
      </body>
    </div>
  )
}

export default App
