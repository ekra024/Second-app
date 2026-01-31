
export default async function View() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>5k Views</h1>
    </div>
  )
}
