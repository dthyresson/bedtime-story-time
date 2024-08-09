const Spinner = ({ caption }: { caption: string }) => (
  <div className="flex h-[60vh] flex-col items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <p className="animate-pulse text-xl font-semibold text-gray-800">
        {caption}
      </p>
    </div>
  </div>
)

export default Spinner
