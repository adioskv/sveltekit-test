<script>
  let answer = ''
  async function handleGET() {
    const response = await fetch('/api', { method: "get" }) 
    answer = await response.text()
  }
  async function handlePOST() {
    const response = await fetch('/api', { method: "post" }) 
    answer = await response.text()

  }
  async function handleDELETE() {
    const response = await fetch('/api', { method: "delete" }) 
    answer = await response.text()
  }
</script>

<h2>Protected page</h2>
<br>
<p>Runs only on developmnet environment.</p>
<br>
<h3>Test SvelteKit API endpoints</h3>
<br>
<button on:click={handleGET}>GET</button>
<button on:click={handlePOST}>POST</button>
<button on:click={handleDELETE}>DELETE</button>
<br>
<p><b>Answer:</b>{answer}</p>