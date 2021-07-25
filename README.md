# vite-plugin-sveld

A vite plugin to parse your Svelte components through [sveld](https://github.com/IBM/sveld)

## Setup

```
npm install vite-plugin-sveld
```

```js
// vite.config.js
import sveld from 'vite-plugin-sveld'

export default {
  plugins: [sveld()]
  ...
}
```

## Usage

By adding `?raw&sveld` to a .svelte import, it will return the JSON output from sveld for that component.

```svelte
<script>
import docs from './Button.svelte?raw&sveld'
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		{#each docs.props as prop}
			<tr>
				<td>{prop.name}</td>
				<td><code>{prop.type?.replace(/'/g, '"')}</code></td>
				<td><code>{prop.value?.replace(/'/g, '"') ?? ''}</code></td>
				<td>{@html prop.description ? prop.description : ''}</td>
			</tr>
		{/each}
	</tbody>
</table>
```

## ?raw&sveld types

If you'd like to have the sveld imports typed, add

```
/// <reference types="vite-plugin-sveld" />
```

to a `src/global.d.ts` file or similar in your project. Imports _must_ have `?raw&sveld` specifically to be typed. Adding additional query params, or flipping to `?sveld&raw` will cause them to be untyped.
