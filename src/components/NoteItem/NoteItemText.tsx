import { useState } from 'react'
import { TextConverter } from '@/components/functional/TextConverter'

interface NoteItemTextProps {
  text: string
}

const NoteItemText: React.FC<NoteItemTextProps> = ({ text }) => {
  const [showMore, setShowMore] = useState(false)
  const toggleShowMore = () => setShowMore(!showMore)

  return (
    <div className="pt-2 text-sm text-gray-700 dark:text-gray-300 font-noto-sans whitespace-pre-wrap break-words">
      <TextConverter text={showMore ? text : text.substring(0, 300)} />
      {text.length > 300 && (
        <span>
          {!showMore && <span>...</span>}
          <button
            onClick={toggleShowMore}
            className="text-blue-500 dark:text-blue-300 ml-2"
          >
            {showMore ? '閉じる' : '続きを読む'}
          </button>
        </span>
      )}
    </div>
  )
}

export default NoteItemText
