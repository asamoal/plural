import React from 'react'
import { Box, Text } from 'grommet'
import { SIDEBAR_ICON_HEIGHT } from '../Sidebar'

export function SectionChoice({label, selected, icon, onClick}) {
  return (
    <Box background={selected ? 'sidebarHover' : null} focusIndicator={false}
      hoverIndicator='sidebarHover' direction='row' align='center' gap='small'
      round='3px' pad={{horizontal: 'small'}} height={SIDEBAR_ICON_HEIGHT} 
      onClick={onClick}>
      {icon}
      <Box fill='horizontal'>
        <Text size='small'>{label}</Text>
      </Box>
    </Box>
  )
}