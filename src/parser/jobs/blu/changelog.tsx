import CONTRIBUTORS from 'data/CONTRIBUTORS'
import React from 'react'

export const changelog = [
	{
		date: new Date('2023-05-14'),
		Changes: () => <>Dying to Final Sting and Self-Destruct won't be counted as a death</>,
		contributors: [CONTRIBUTORS.HUGMEIR],
	},
	{
		date: new Date('2023-05-08'),
		Changes: () => <>Support for BLU for 6.0 - 6.4</>,
		contributors: [CONTRIBUTORS.HUGMEIR],
	},
]
