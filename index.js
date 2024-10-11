import * as sveld from 'sveld'
import * as svelte from 'svelte/compiler'
import sveltePreprocess from 'svelte-preprocess'
import qs from 'query-string'

const { ComponentParser } = sveld.default


export default function sveldPlugin() {
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
