import type { ElementBaseProps } from "./type"

type TableProps<T> = React.TableHTMLAttributes<T> & ElementBaseProps<T>

export const Table = ({ className, ...props }: TableProps<HTMLTableElement>) => (
  <div className="w-full overflow-auto">
    <table className={`table-fixed w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
)
Table.displayName = "Table"

export const TableHeader = ({ className, ...props }: TableProps<HTMLTableSectionElement>) => (
  <thead className={`[&_tr]:border-b ${className}`} {...props} />
)
TableHeader.displayName = "TableHeader"

export const TableBody = ({ className, ...props }: TableProps<HTMLTableSectionElement>) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
)
TableBody.displayName = "TableBody"

export const TableRow = ({ className, ...props }: TableProps<HTMLTableRowElement>) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-14 ${className}`}
    {...props}
  />
)
TableRow.displayName = "TableRow"

export const TableHead = ({ className, ...props }: TableProps<HTMLTableCellElement>) => (
  <th
    className={`h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
)
TableHead.displayName = "TableHead"

export const TableCell = ({ className, ...props }: TableProps<HTMLTableCellElement>) => (
  <td className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
)
TableCell.displayName = "TableCell"
