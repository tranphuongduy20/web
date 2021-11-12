import React from 'react'
import SecondarySidebarToggle from './SecondarySidebarToggle'
import SecondarySidebarContent from './SecondarySidebarContent'
import SecondarySidenavTheme from '../MatxTheme/SecondarySidenavTheme/SecondarySidenavTheme'
import useSettings from 'app/hooks/useSettings'

const SecondarySidebar = () => {
	const { settings } = useSettings()
	const secondarySidebarTheme = settings.themes[settings.secondarySidebar.theme]

	return (
		<div style={{ zIndex: 200 }}>
			<SecondarySidenavTheme theme={secondarySidebarTheme}>
				{settings.secondarySidebar.open && <SecondarySidebarContent />}
				<SecondarySidebarToggle />
			</SecondarySidenavTheme>
		</div>
	)
}

export default SecondarySidebar
