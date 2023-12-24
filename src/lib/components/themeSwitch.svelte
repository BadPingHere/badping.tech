<script lang="ts">
	import { theme } from '$lib/stores';
	// Sure this entire theme switcher *looks* garbage, but the backend of it is good. and i just spent the entire day looking for a theme switcher
	// that wasnt doing some dumb shit like tailwind or bootstrap and found none. so like i guess i gotta keep the oldie.
</script>

<select style="position: absolute;top: 0%;left: 48%;" bind:value={$theme}>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
