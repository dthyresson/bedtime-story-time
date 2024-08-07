type StoryProps = {
  id: string
  title: string
  story: string
  summary: string
  pictureUrl: string
}

const Story = ({ title, story, summary, pictureUrl }: StoryProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 p-4 lg:flex-row">
      <img src={pictureUrl} alt={title} className="h-96 rounded-md" />
      <div className="flex flex-col gap-4 lg:w-2/3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg font-medium">{summary}</h2>
        <p>{story}</p>
      </div>
    </div>
  )
}

export default Story
