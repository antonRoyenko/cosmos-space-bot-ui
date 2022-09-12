import React from 'react'

function Warning() {
  return (
    <div className='warning-wrapper'>
      <div className={'warning'}>
        I&apos;m open source bot and don&apos;t use any sensitive data. You can find all codebase on
        my{' '}
        <a
          href='https://github.com/antonRoyenko/cosmos-space-bot-ui'
          target={'_blank'}
          rel='noreferrer'
        >
          Github
        </a>
        . The main idea - take your address and save it to database without manually action. If you
        want continue click to the{' '}
        <a href='/' target={'_blank'}>
          link
        </a>
        , otherwise you can close modal window and choose other type adding an address
      </div>
    </div>
  )
}

export default Warning