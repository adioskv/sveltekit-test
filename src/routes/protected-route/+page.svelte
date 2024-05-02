<script>
  import { onMount } from "svelte";
  import { VITE_VALUE } from '$lib/env';
  import { goto } from '$app/navigation';

  onMount(() => {
    if (VITE_VALUE !== "PRODUCTION") {
      goto('/');
    } else {
      goto('/protected-route/protected-page')
    }
  }) 
</script>