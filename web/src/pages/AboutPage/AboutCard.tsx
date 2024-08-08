interface AboutCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-yellow-200 bg-yellow-50 p-6 text-center shadow-md">
      <div className="mb-4 h-12 w-12 text-amber-400">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AboutCard
