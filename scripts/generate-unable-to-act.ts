import axios from 'axios'
import bodybuilder from 'bodybuilder'
import fs from 'fs'

main().catch(e => {
	console.error(e)
	process.exit(1)
})

interface XivapiPagination {
	Page: number
	PageNext: number | null
	PagePrev: number | null
	PageTotal: number
	Results: number
	ResultsPerPage: number
	ResultsTotal: number
}

interface XivapiResponse<T> {
	Pagination: XivapiPagination
	Results: T[]
}

interface XivapiStatus {
	ID: number
	Name: string | null
	LockActions: 0 | 1
	LockControl: 0 | 1
}

interface UTAStatus {
	id: number
	name: string
	reasons: string[]
}

async function main() {
	const {data} = await axios.post<XivapiResponse<XivapiStatus>>('https://xivapi.com/search', {
		indexes: 'status',
		columns: 'ID,LockActions,LockControl,Name',
		body: bodybuilder()
			.orFilter('term', 'LockActions', 1)
			.orFilter('term', 'LockControl', 1)
			.size(1000)
			.build(),
	})

	// Build the list of statuses that imply inability to act
	const utaStatuses: UTAStatus[] = []
	// for await (const status of statuses.getRows()) {
	for (const status of data.Results) {
		if (status.LockActions === 0 && status.LockControl === 0) {
			continue
		}

		utaStatuses.push({
			id: status.ID,
			name: status.Name,
			reasons: [
				...status.LockActions ? ['lockActions'] : [],
				...status.LockControl ? ['lockControl'] : [],
			],
		})
	}

    // The secondary effect from Moon Flute, Waning Nocturne, makes you
    // unable to do any actions (save, for some reason, Sprint) for 15 seconds.
    // Sadly the game doesn't mark it as LockActions.
    // Just tagging it manually here saves a lot of hassle later:
    utaStatuses.push({
        id: 1727,
        name: "Waning Nocturne",
        reasons: [
            ['lockActions'],
        ],
    })

	// Codegen
	const statusLines = utaStatuses
		.map(meta => `\t${meta.id}, // ${meta.name} (${meta.reasons.join(', ')})`)
	const fileContents = `/* eslint-disable */
// This file is automatically generated. Do not edit.
// If you wish to regenerate, run \`yarn generate\`.
export const UNABLE_TO_ACT_STATUS_IDS = [
${statusLines.join('\n')}
]
`

	fs.writeFileSync('./src/generated/unableToActStatusIds.ts', fileContents)
}
