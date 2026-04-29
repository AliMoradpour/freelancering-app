type Props = {}

function Home({}: Props) {
  return (
    <div>
      <h1>Home</h1>

      <a href="/auth"  className="text-xs underline text-sky-600">Go to Auth Page</a>
    </div>
  )
}

export default Home