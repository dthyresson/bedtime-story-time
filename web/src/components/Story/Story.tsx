type StoryProps = {
  id: string
  title: string
  story: string
  summary: string
  pictureUrl: string
}

const Story = ({ title, story, summary, pictureUrl }: StoryProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 p-4">
      <img src={pictureUrl} alt={title} />
      <h1>{title}</h1>
      <p>{story}</p>
      <p>{summary}</p>
    </div>
  )
}

export default Story
