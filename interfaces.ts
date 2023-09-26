export interface IBird {
	wings: number
	nocturnal: boolean
	family: string[]
	phones?: (string | number | boolean)[]
	flies: boolean
}

interface IHasKilled {
	type: string
	weight: number
	color: string
}

export interface IEtableBirds extends IBird {
	colorful: boolean
	etable: boolean
	hasKilled?: IHasKilled[]
}