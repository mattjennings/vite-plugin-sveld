import { ComponentParser } from 'sveld'
import sveltePreprocess from 'svelte-preprocess'
import * as svelte from 'svelte/compiler'
import qs from 'query-string'

export default function sveld() {
	return {
		name: 'vite-plugin-sveld',
		async transform(src, id) {
			const query = qs.parse(id.split('?')[1])

			if ('raw' in query && 'sveld' in query) {
				const raw = JSON.parse(src.split('export default ')[1])

				let { code } = await svelte.preprocess(raw, sveltePreprocess(), {
					filename: id
				})
				const data = new ComponentParser({
					verbose: false
				}).parseSvelteComponent(code, {
					filePath: id,
					moduleName: id
				})

				
				return {
					code: `export default ${JSON.stringify(data)}`,
					map: null
				}
			}
		}
	}
}
