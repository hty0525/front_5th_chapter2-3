import { useSearchFilter } from "../../searchFilter/model/useSearchFilter"

type Props = {
  tag: string
}

const Tag = ({ tag }: Props) => {
  const { tag: selectedTag, setTag } = useSearchFilter()
  const isSelected = selectedTag === tag

  const onClickTag = () => {
    setTag(tag)
  }

  return (
    <span
      key={tag}
      className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
        isSelected ? "text-white bg-blue-500 hover:bg-blue-600" : "text-blue-800 bg-blue-100 hover:bg-blue-200"
      }`}
      onClick={onClickTag}
    >
      {tag}
    </span>
  )
}

export default Tag
