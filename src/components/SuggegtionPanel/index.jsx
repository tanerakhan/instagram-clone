import React from 'react'
import 'src/assets/styles/components/suggegtion.scss'

export default function SuggegtionPanel() {
  return (
    <div className='feed-suggegtion'>
      <div className='suggegtion-container suggegtion-fixed'>
        <div className='shared-flex-content suggegtion-space'>
          <div className='suggegtion-user-switch-line shared-flex-content'>
            <div className='suggegtion-avatar suggegtion-avatar-huge'>
              <div className='global-user-avatar global-user-avatar-huge'>
                <a className='shared-flex-center' href='/'>T</a>
              </div>
            </div>
            <div className='suggegtion-user-info'>
              <span className='global-text-username'>african_animal</span>
              <span className='suggegtion-user-fullname'>African Animal</span>
            </div>
            <div className='suggegtion-user-switch'><button className='p-0 blue-button'>switch</button></div>
          </div>
          </div>
      </div>
    </div>
  )
}
