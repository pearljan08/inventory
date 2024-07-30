const SummaryCards = ({ icon, textColor, title, description}) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition duration-500">
        
        <div className="px-6 py-4">
          <div className="grid grid-cols-2">
              <div className="text-5xl content-center">
                {icon}
              </div>
              <div className="text-4xl mb-2 dark:text-white content-center">
                <div className={`font-bold ${textColor}`}>{title}</div>
                <p className="flex flex-row text-gray-700 dark:text-gray-300 text-sm">
                  {description}
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryCards