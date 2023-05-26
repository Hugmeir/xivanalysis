import {ActionRow, ActionTimeline as CoreActionTimeline} from 'parser/core/modules/ActionTimeline'

// TODO: Would be really nice if ActionTimeline picked the name of the first
// one used, instead of the first one in the array.
export class ActionTimeline extends CoreActionTimeline {
	static override rows: ActionRow[] = [
		...CoreActionTimeline.rows,
		'NIGHTBLOOM',
		'TRIPLE_TRIDENT',
		'THE_ROSE_OF_DESTRUCTION',
		'SHOCK_STRIKE',
		'BLU_MOUNTAIN_BUSTER',
		'GLASS_DANCE',
		'SURPANAKHA',
		['MATRA_MAGIC', 'DRAGON_FORCE', 'ANGELS_SNACK'],
		'FEATHER_RAIN',
		'ERUPTION',
		['PHANTOM_FLURRY', 'PHANTOM_FLURRY_KICK'],
		'QUASAR',
		'J_KICK',
		{
			label: 'Raid Buffs',
			content: [
				'PECULIAR_LIGHT',
				'OFF_GUARD',
			],
		},
		'COLD_FOG',

		// Standard role actions
		'LUCID_DREAMING',
		'SWIFTCAST',

		// Mit
		'ADDLE',
		'MAGIC_HAMMER',

		// Ressurect
		'ANGEL_WHISPER',

		// Tanking CDs
		'DEVOUR',
		'CHELONIAN_GATE',
	]
}
