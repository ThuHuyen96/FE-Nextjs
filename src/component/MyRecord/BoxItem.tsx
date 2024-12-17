"use client"

type IProps = {
  className?: string
}

export default function BoxItem({ className }: IProps) {
  return (
    <div className={`border-[var(--color-gray-500)] border-md border-solid p-4 ${className}`}>
      <p className="m-0 font-inter text-lg mb-2">
        2021.05.21 <br /> 23:25
      </p>
      <p className="m-0 mb-1">私の日記の記録が一部表示されます</p>
      <p className="m-0 line-clamp-4 mb-2">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  )
}
