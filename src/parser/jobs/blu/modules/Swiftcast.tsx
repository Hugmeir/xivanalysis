import {Trans} from '@lingui/react'
import {DataLink} from 'components/ui/DbLink'
import {Swiftcast as CoreSwiftcast} from 'parser/core/modules/Swiftcast'
import React from 'react'
import {DISPLAY_ORDER} from './DISPLAY_ORDER'

export class Swiftcast extends CoreSwiftcast {
	static override displayOrder = DISPLAY_ORDER.SWIFTCAST
	override suggestionContent = <Trans id="blu.swiftcast.suggestion.content">Cast a spell with <DataLink action="SWIFTCAST" /> before it expires.</Trans>
}
