import React from 'react'
import { useLocation } from 'react-router-dom'

function Warning() {
  const location = useLocation()

  return (
    <div className='warning-wrapper'>
      <div className={'warning'}>
        I&apos;m open source bot and don&apos;t use any sensitive data. You can find all codebases
        on my{' '}
        <a
          href='https://github.com/antonRoyenko/cosmos-space-bot-ui'
          target={'_blank'}
          rel='noreferrer'
        >
          Github
        </a>
        . The main idea is to take your address and save it to the database without manual action.
        If you want to continue, click on the{' '}
        <a href={`/${location.search}`} target={'_blank'} rel='noreferrer'>
          link
        </a>
        . Otherwise, you can close the modal window and choose another type adding an address.
      </div>
    </div>
  )
}

export default Warning
